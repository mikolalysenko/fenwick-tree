"use strict"

function initFenwickTree(data, out) {
  var i, n = data.length
  if(!out) {
    out = new Array(n)
  }
  for(i=0; i<n; ++i) {
    out[i] = 0
  }
  for(i=0; i<n; ++i) {
    updateFenwickTree(out, i, data[i])
  }
  return out
}
module.exports = initFenwickTree

function updateFenwickTree(data, at, by) {
  var n = data.length
  at |= 0
  while(at < n) {
    data[at] += by
    at |= (at + 1)
  }
}
module.exports.update = updateFenwickTree

function queryFenwickTree(data, at) {
  var res = 0
  at |= 0
  while(at >= 0) {
    res += data[at]
    at = (at & (at+1)) - 1
  }
  return res
}
module.exports.query = queryFenwickTree