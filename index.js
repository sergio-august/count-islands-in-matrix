const VISITED = 2

/** Mark island cells
    @function
    @param {Number} r - row index of the cell in matrix
    @param {Number} c - column index of the cell in matrix
    @return {undefined}
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
    @param {Number} r - row index of the cell in matrix
    @param {Number} c - column index of the cell in matrix
    @return {undefined}
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

/** Calculate islands amount in specified 2D matrix
    @function
    @param {Array<Array<1|0>>} matrix - row index of the cell in matrix
    @return {Number} - islandsCount
*/
function findIslandsCount(matrix) {
	let islandsCount = 0

	for (let r = 0; r < matrix.length; r++) {
		for (let c = 0; c < matrix[r].length; c++) {
			if (matrix[r][c] !== VISITED && matrix[r][c] === 1) {
				markIsland(r, c, matrix)
				islandsCount++
			}
		}
	}

	return islandsCount
}

module.exports = findIslandsCount
