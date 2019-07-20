const VISITED = 2

/** Mark island cells
    @function
    @param {number} r - row index of the cell in matrix
    @param {number} c - column index of the cell in matrix
    @param {Array<Array<1|0>>} matrix - binary matrix
*/
function markIsland(r, c, matrix) {
	// mark current cell as visited
	matrix[r][c] = VISITED

	// check 4 neighbours cells
	// up
	if (isSoil(r - 1, c, matrix)) {
		markIsland(r - 1, c, matrix)
	}
	// down
	if (isSoil(r + 1, c, matrix)) {
		markIsland(r + 1, c, matrix)
	}
	// left
	if (isSoil(r, c - 1, matrix)) {
		markIsland(r, c - 1, matrix)
	}
	// right
	if (isSoil(r, c + 1, matrix)) {
		markIsland(r, c + 1, matrix)
	}
}

/** Check if specified cell is within matrix and contains value of 1
    @function
    @param {number} r - row index of the cell in matrix
    @param {number} c - column index of the cell in matrix
    @param {Array<Array<1|0>>} matrix - binary matrix
    @return {boolean}
*/
function isSoil(r, c, matrix) {
	return (
		r >= 0 &&
		c >= 0 &&
		r < matrix.length &&
		c < matrix[r].length &&
		matrix[r][c] === 1
	)
}

/** Calculate islands amount in specified 2D binary matrix
    @function
    @param {Array<Array<1|0>>} matrix - binary matrix
    @return {number}
*/
function findIslandsCount(matrix) {
	let result = 0

	for (let r = 0; r < matrix.length; r++) {
		for (let c = 0; c < matrix[r].length; c++) {
			if (matrix[r][c] === 1) {
				markIsland(r, c, matrix)
				result++
			}
		}
	}

	return result
}

module.exports = findIslandsCount
