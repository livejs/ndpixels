const test = require('tape')

var Pixels
var toPixels
test('module is require-able', function (t) {
  Pixels = require('./')
  t.equal(typeof Pixels, 'function')
  t.end()
})

test('create white pixel', function (t) {
  const pixels = Pixels({
    data: [0xff, 0xff, 0xff],
    format: 'rgb'
  })
  t.equal(typeof pixels, 'object')
  t.deepEqual(pixels.shape, [3])
  t.deepEqual(pixels.data, [0xff, 0xff, 0xff])
  t.equal(pixels.format, 'rgb')
  t.ok(Pixels.is(pixels))
  t.end()
})

test('create pixels', function (t) {
  const pixels = Pixels({
    data: [
      0xff, 0x00, 0x84,
      0x84, 0xff, 0x00,
      0x00, 0x84, 0xff
    ],
    shape: [3, 3],
    format: 'rgb'
  })
  t.equal(typeof pixels, 'object')
  t.deepEqual(pixels.shape, [3, 3])
  t.equal(pixels.format, 'rgb')
  t.ok(Pixels.is(pixels))
  t.equal(pixels.get(0, 0), 0xff)
  t.equal(pixels.get(0, 1), 0x00)
  t.equal(pixels.get(0, 2), 0x84)
  const pixel = pixels.pick(2)
  t.equal(pixel.get(0), 0x00)
  t.equal(pixel.get(1), 0x84)
  t.equal(pixel.get(2), 0xff)
  t.ok(Pixels.is(pixel))
  t.end()
})
