const findIslandsCount = require('./index')
const testData = require('./data')

const COLOR = {
	red: '\x1b[31m',
	yellow: '\x1b[33m',
	green: '\x1b[32m',
	reset: '\x1b[0m'
}

function printMatrix(matrix) {
	console.log('[')
	matrix.forEach((item) => console.log('\t', item, ','))
	console.log('],')
}

/** Generate 2D binary matrix
    @param {number} [rows=3] - rows number
    @param {number} [columns=3] - columns number
    @return {Array<Array<(0|1)>>} 2D matrix with 0 or 1 in cells
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
	console.log(`---------------\nindex: ${index},\nmatrix:`)
	printMatrix(matrix)
	computedCount = findIslandsCount(matrix)
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

console.log(`
PASSED: ${dataPassed}
${dataFailed ? COLOR.red : ''}FAILED: ${dataFailed}${COLOR.reset}
`)

// Test random data
console.log(`\nTest 5 random matrix (please check manually):`)
for (let i = 0; i < 5; i++) {
	console.log('---\nmatrix:')
	const matrix = generateMatrix()
	printMatrix(matrix)
	console.log(
		`${COLOR.yellow}count: ${findIslandsCount(matrix)}${COLOR.reset}`
	)
}
