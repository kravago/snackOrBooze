function unroll(squareArray) {
    let row = 0;
    let col = 0;
    let rowEnd = squareArray.length;
    let colEnd = squareArray[0].length;
    const result = [];

    while (row < rowEnd && col < colEnd) {
        for (let i = col; i < colEnd; i++) {
            result.push(squareArray[row][i]);
        }
        row++;
    
        for (let i = row; i < rowEnd; ++i) {
            result.push(squareArray[i][rowEnd - 1]);
        }
        colEnd--;
 
        for (let i = colEnd - 1; i >= col; i--) {
            result.push(squareArray[rowEnd - 1][i]);   
        }
        rowEnd--;
    
        for (let i = rowEnd - 1; i >= row; i--) {
            result.push(squareArray[i][col]);
        }
        col++;
    }
    return result;
}


module.exports = unroll;
