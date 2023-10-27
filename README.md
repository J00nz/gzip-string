# gzip-string
Module for compressing strings using the browsers built in gzip zipping functionality.
Hence this module is made for browsers and have not been tested on server-side environments.

## Install

```
npm install gzip-string
```

## Example

```js
import { compress, decompress } from 'gzip-string'

const compressedData = await compress([YOUR STRING])

const yourString = await decompress(compressedData)
```

#### Functions:
  - compress
  - decompress
  - compressToURI
  - decompressFromURI


###### compress(string, (encoding = 'gzip'))
Compresses the string using the browsers internal compression method.


###### decompress(password, (times = 1))
Decompresses the provided using the browsers internal decompression method.


###### compressToURI(password, (times = 1))
Compresses the string using the browsers internal compression method and makes sure it is safe to put in the URI.


###### decompressFromURI(password, (times = 1))
Decompresses URI encoded strings using the browsers internal compression.
