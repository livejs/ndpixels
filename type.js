var t = require('tcomb')
var Ndarray = require('t-ndarray')
var setDefaults = require('tcomb-defaults')
var dp = require('describe-property')

var Ndpixels = Ndarray.extend({
  // TODO hmm, should we do enums from `color-space`?
  // format: t.enums.of()
  format: t.String
})

Object.defineProperties(Ndpixels.prototype, {
  type: dp.gs(function () { return Ndpixels })
})

module.exports = setDefaults(Ndpixels, Ndarray.defaults)
