# ndpixels

ndpixels are [ndarrays](https://npmjs.org/ndarray) in a format for pixels.

[![unstable](http://badges.github.io/stability-badges/dist/unstable.svg)](http://github.com/badges/stability-badges)

## format

### frame

ndpixels are ndarrays in raster order, such as:

```
[width, channels]
[width, height, channels]
[width, height, depth, channels]
```

### pixel

each pixel is described by channels, such as:

```
[keyword]
[red, green, blue]
[hue, saturation, value]
[hue, saturation, lightness]
[hue, whiteness, blackness]
[x, y, z]
[lightness, a, b]
[l, c, h]
[cyan, magenta, yellow, key]
```

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
- [ndpixels-convert](https://www.npmjs.com/ndpixels-convert)
- [ndpixels-opc](https://www.npmjs.com/ndpixels-opc)
- [2dpixels-terminal](https://www.npmjs.com/2dpixels-terminal)

feel free to add what's missing. :)

## license

ISC
