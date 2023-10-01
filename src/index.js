
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const result = [];
  if (matrix) {
    for (let i = 0; i < matrix.length; i += 1) {
      let arrayLength = matrix[i].length;
      if (i % 2 === 0) {
        for (let j = 0; j < arrayLength; j += 1) {
          result.push(matrix[i][j]);
        }
      } else {
        for (let j = arrayLength - 1; j >= 0; j -= 1) {
          result.push(matrix[i][j]);
        }
      }
    }
  }
  
  return result;
}
