"use strict"

var fenwick = require("../fenwick.js")

require("tape")("fenwick-tree", function(t) {

  var tree = fenwick([1, 5, -1, 0, 5])

  t.equals(fenwick.query(tree, 0), 1)
  t.equals(fenwick.query(tree, 1), 6)
  t.equals(fenwick.query(tree, 2), 5)
  t.equals(fenwick.query(tree, 3), 5)
  t.equals(fenwick.query(tree, 4), 10)
  
  fenwick.update(tree, 2, 3)
  t.equals(fenwick.query(tree, 0), 1)
  t.equals(fenwick.query(tree, 1), 6)
  t.equals(fenwick.query(tree, 2), 8)
  t.equals(fenwick.query(tree, 3), 8)
  t.equals(fenwick.query(tree, 4), 13)
  
  t.end()
})