const findIslandsCount = require('./index')
const testData = require('./data')

const COLOR = {
	red: '\x1b[31m',
	green: '\x1b[32m',
	reset: '\x1b[0m'
}

function printMatrix(matrix) {
	console.log('[')
	matrix.forEach((item) => console.log('\t', item, ','))
	console.log('],')
}

/** Generate 2D binary matrix
    @param {number} rows - rows number, by default 3
    @param {number} columns - columns number, by default 3
    @return {number[][]} 2D matrix with 0 or 1 in cells
*/
function generateMatrix(rows = 3, columns = 3) {
	const matrix = []
	for (let i = 0; i < rows; i++) {
		const row = []
		for (let j = 0; j < columns; j++) {
			row.push(Math.round(Math.random()))
		}
		matrix.push(row)
	}
	return matrix
}

// Test predefined data
console.log('TESTING PREDEFINED DATA')
let dataPassed = 0
let dataFailed = 0
testData.forEach(({ matrix, count }, index) => {
	computedCount = findIslandsCount(matrix)
	console.log(`---------------\nindex: ${index},\nmatrix:`)
	printMatrix(matrix)
	const passed = count === computedCount
	const text = `count: ${computedCount},\nexpected: ${count},\npassed: ${passed}`
	if (passed) {
		console.log(`${COLOR.green}${text}${COLOR.reset}`)
		dataPassed++
	} else {
		console.log(`${COLOR.red}${text}${COLOR.reset}`)
		dataFailed++
	}
})
console.log(
	`\nPASSED: ${dataPassed}\n${COLOR.red}FAILED: ${dataFailed}${COLOR.reset}`
)

// Test random data
console.log(`Test 5 random matrix (please check manually):`)
for (let i = 0; i < 5; i++) {
	console.log('---')
	const matrix = generateMatrix()
	printMatrix(matrix)
	console.log('count:', findIslandsCount(matrix))
}
