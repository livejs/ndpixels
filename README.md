# ndpixels

ndpixels are [ndarrays](https://npmjs.org/ndarray) in a format for pixels.

[![unstable](http://badges.github.io/stability-badges/dist/unstable.svg)](http://github.com/badges/stability-badges)

## spec

each `ndpixels` frame should have the following properties:

### `shape`

should be an `Array` of the form:

```
[width, channels]
[width, height, channels]
[width, height, depth, channels]
```

### `data`

if we [`.pick(width, ...)`](https://github.com/scijs/ndarray#arraypickp0-p1-), we should see [channel data](https://en.wikipedia.org/wiki/Channel_(digital_image)) in a form such as:

```
[keyword] // keyword
[red, green, blue] // rgb
[hue, saturation, value] // hsv
[hue, saturation, lightness] // hsl
[hue, whiteness, blackness] // hwb
[x, y, z] // xyz
[lightness, a, b] // lab
[l, c, h] // lch
[cyan, magenta, yellow, key] // cmyk
```

### `format`

should be a `String` identifier for the color space model, e.g. `rgb`.

## modules

some modules use ndpixels. 

- [get-pixels](https://www.npmjs.com/package/get-pixels)
- [ndarray-from-image](https://www.npmjs.com/package/ndarray-from-image)
- [ndarray-from-canvas](https://www.npmjs.com/package/ndarray-from-canvas)
- [save-pixels](https://www.npmjs.com/package/save-pixels)
- [data-uri-to-ndarray](https://www.npmjs.com/package/data-uri-to-ndarray)
- [apply-colormap](https://github.com/mikolalysenko/apply-colormap)
- [ndarray-imshow](https://github.com/scijs/ndarray-imshow)
- [baboon-image](https://www.npmjs.com/package/baboon-image)
- [ndarray-warp](https://www.npmjs.com/package/ndarray-warp)
- [ndarray-homography](https://www.npmjs.com/ndarray-homography)
- [ndpack-image](https://www.npmjs.com/ndpack-image)
- [ndarray-pixel-sort](https://www.npmjs.com/package/ndarray-pixel-sort)
- [pixels-canvas](https://github.com/livejs/pixels-canvas)
- [pixel-to-css-color](https://github.com/livejs/pixel-to-css-color)
- [rainbow-pixels](https://github.com/ahdinosaur/rainbow-pixels)
- [ndpixels-convert](https://www.npmjs.com/ndpixels-convert)
- [pixels-apa102](https://github.com/livejs/pixels-apa102)
- [ndpixels-opc](https://www.npmjs.com/ndpixels-opc)
- [2dpixels-terminal](https://www.npmjs.com/2dpixels-terminal)

feel free to add what's missing. :)

## `ndpixels` [type](https://github.com/gcanti/tcomb/blob/master/docs/API.md)

```shell
npm install --save ndpixels
```

extended from [`t-ndarray`](https://github.com/ahdinosaur/t-ndarray)

for performant iterations, use [`cwise`](https://github.com/scijs/cwise)

### `Ndpixels = require('ndpixels')`

### `ndpixels = Ndpixels(options)`

- `options.data` is a 1D array storage.  It is either an instance of `Array`, a typed array, or an object that implements `get(), set(), .length`
- `options.shape` is the shape of the view (Default: `data.length`)
- `options.stride` is the resulting stride of the new array.  (Default: row major)
- `options.offset` is the offset to start the view (Default: `0`)

### `Ndarray.is(any)`

## example

```js
var Ndpixels = require('ndxpixels')

var rgb = Ndpixels({
  data: [
    0x00, 0xff, 0x00,
    0xff, 0x00, 0xff
  ],
  shape: [2, 3],
  format: 'rgb'
})
Ndpixels.is(rgb)

var hsl = Ndpixels({
  data: [
    0, 50, 50,
    120, 50, 50,
    240, 50, 50
    360, 50, 50
  ],
  shape: [4, 3],
  format: 'hsl'
})
Ndpixels.is(hsl)
```

## license

The Apache License

Copyright &copy; 2016 Michael Williams

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
