## Find islands count in binary 2D matrix
Given a boolean 2D matrix, count the number of islands.

A group of connected 1s forms is an island. Diagonal connections are not counted.

For example:

```
1 0 1
1 0 0
1 1 1
```

The above matrix contains 2 islands.

```
1 0 1
0 1 0
1 0 1
```

The above matrix contains 4 islands.

## Approach

- Initialize result (islands count) as 0
- Iterate through each cell of the 2D matrix.
- Increment result if the cell value is 1 and mark cell with value of 2 and recursively check cell neighbours up/down/left/right. If a neighbour is also equal to 1, mark it as well.

## How to use
```
const findIslandsCount = require('./')

const matrix = [
	[ 0, 1, 0 ],
	[ 0, 0, 1 ],
	[ 0, 1, 0 ]
]
console.log('The result is:', findIslandsCount(matrix)) // The result is 3
```

## How to run test
```
node index.test.js
```

## Sample test output
```
$node index.test.js
TESTING PREDEFINED DATA
---------------
index: 0,
matrix:
[
         [ 0, 0, 0 ] ,
         [ 0, 0, 0 ] ,
         [ 0, 0, 0 ] ,
],
count: 0,
expected: 0,
passed: true
---------------
index: 1,
matrix:
[
         [ 1, 1, 1 ] ,
         [ 1, 1, 1 ] ,
         [ 1, 1, 1 ] ,
],
count: 1,
expected: 1,
passed: true
---------------
index: 2,
matrix:
[
         [ 0, 1, 0 ] ,
         [ 1, 0, 1 ] ,
         [ 0, 1, 0 ] ,
],
count: 4,
expected: 4,
passed: true
---------------
index: 3,
matrix:
[
         [ 0, 1, 0 ] ,
         [ 0, 0, 1 ] ,
         [ 0, 1, 0 ] ,
],
count: 3,
expected: 3,
passed: true
---------------
index: 4,
matrix:
[
         [ 0, 1, 0 ] ,
         [ 1, 0, 0 ] ,
         [ 0, 0, 0 ] ,
],
count: 2,
expected: 2,
passed: true
---------------
index: 5,
matrix:
[
         [ 0, 1, 0 ] ,
         [ 1, 1, 1 ] ,
         [ 0, 1, 0 ] ,
],
count: 1,
expected: 1,
passed: true
---------------
index: 6,
matrix:
[
         [ 1, 0, 1 ] ,
         [ 1, 1, 0 ] ,
         [ 0, 0, 1 ] ,
],
count: 3,
expected: 3,
passed: true
---------------
index: 7,
matrix:
[
         [ 1, 0, 1 ] ,
         [ 0, 0, 0 ] ,
         [ 1, 0, 0 ] ,
],
count: 3,
expected: 3,
passed: true
---------------
index: 8,
matrix:
[
         [ 0, 1, 1 ] ,
         [ 0, 1, 1 ] ,
         [ 1, 0, 1 ] ,
],
count: 2,
expected: 2,
passed: true
---------------
index: 9,
matrix:
[
         [ 1, 1, 1 ] ,
         [ 1, 0, 0 ] ,
         [ 1, 1, 0 ] ,
],
count: 1,
expected: 1,
passed: true

PASSED: 10
FAILED: 0


Test 5 random matrix (please check manually):
---
matrix:
[
         [ 1, 0, 1 ] ,
         [ 1, 0, 0 ] ,
         [ 0, 1, 0 ] ,
],
count: 3
---
matrix:
[
         [ 0, 1, 0 ] ,
         [ 1, 1, 1 ] ,
         [ 1, 1, 0 ] ,
],
count: 1
---
matrix:
[
         [ 0, 1, 1 ] ,
         [ 1, 0, 0 ] ,
         [ 0, 1, 1 ] ,
],
count: 3
---
matrix:
[
         [ 1, 0, 1 ] ,
         [ 1, 1, 0 ] ,
         [ 0, 0, 1 ] ,
],
count: 3
---
matrix:
[
         [ 1, 0, 1 ] ,
         [ 1, 1, 0 ] ,
         [ 0, 1, 1 ] ,
],
count: 2
```

## Credits
- [Finding Islands In a Binary Matrix (Java)](http://www.huristic.co/blog/2016/10/14/finding-islands-in-an-adjacency-matrix)
- [Supported JSDoc directives in VSCode](https://www.typescriptlang.org/docs/handbook/type-checking-javascript-files.html#supported-jsdoc)
- [Principles of Writing Consistent, Idiomatic JavaScript](https://github.com/rwaldron/idiomatic.js)

## License
MIT © Sergio Gromov

