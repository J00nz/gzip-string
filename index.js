const compress = async function (string, encoding = 'gzip') {
  const byteArray = new TextEncoder().encode(string)
  const cs = new CompressionStream(encoding)
  const writer = cs.writable.getWriter()
  writer.write(byteArray)
  writer.close()
  const buffer = await new Response(cs.readable).arrayBuffer()
  return btoa(String.fromCharCode.apply(null, new Uint8Array(buffer)))
}

const decompress = async function(data, encoding = 'gzip') {
  const cs = new DecompressionStream(encoding)
  const writer = cs.writable.getWriter()
  const byteArray = new Uint8Array([...atob(data)].map(char => char.charCodeAt(0)))
  writer.write(byteArray)
  writer.close()
  const arrayBuffer = await new Response(cs.readable).arrayBuffer()
  return new TextDecoder().decode(arrayBuffer)
}

module.exports = {
  compress,
  decompress,
  compressToURI: async function(string, encoding = 'gzip') {
    const data = await compress(string, encoding)
    return encodeURIComponent(data)
  },
  decompressFromURI: async function(string, encoding = 'gzip') {
    const data = decodeURIComponent(string)
    return await decompress(data, encoding)
  }
}