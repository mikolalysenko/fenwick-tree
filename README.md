fenwick-tree
============
A [Fenwick tree](http://en.wikipedia.org/wiki/Fenwick_tree) is a data structure for maintaining [prefix sums](http://en.wikipedia.org/wiki/Prefix_sums) under incremental updates.  This module is a simple array based implementation of this concept.

## Example

```javascript
var fenwick = require("fenwick-tree")

//Build tree:
var tree = fenwick([1, 5, -1, 0, 5])

for(var i=0; i<5; ++i) {
  console.log(fenwick.query(tree, i))
}

//Prints out:
//   1
//   6
//   5
//   5
//   10


//Add 3 to the element at index 2
fenwick.update(tree, 2, 3)

//Prints out:
//   1
//   6
//   8
//   8
//   13
```

## API

```javascript
var fenwick = require("fenwick-tree")
```

### `fenwick(array[, out])`
Initializes a Fenwick tree in `O(array.length log(array.length))` time.

* `array` is an array of numbers
* `out` is an optional array that gets the resulting Fenwick tree. Can be any array like data structure, such as a typed array or native array.  If not specified an `Array` is allocated

**Returns** `out` or the allocated `Array`

### `fenwick.query(tree, at)`
Compute the prefix sum up to `at`

* `tree` is the Fenwick tree array
* `at` is the index we are querying at

**Returns** The sum of all elements in the tree with index `<= at`

### `fenwick.update(tree, at, by)`
Adds an offset to the Fenwick tree of `by` at index `at`.

* `tree` is the Fenwick tree array
* `at` is the index to update
* `by` is the amount to add to the tree


## Credits
Based on the first part of the following blog post by Petr Mitrichev:

http://petr-mitrichev.blogspot.com/2013/05/fenwick-tree-range-updates.html

JS implementation by Mikola Lysenko. MIT License
