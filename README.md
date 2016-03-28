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
- [save-pixels](https://www.npmjs.com/package/save-pixels)
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

## license

ISC
