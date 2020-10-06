
// You should implement your task here.

module.exports = function towelSort (matrix) {
  array = []
  if(matrix.length > 0) {
    matrix.forEach((element, index) => {
      if(index % 2 === 0) {
        array = [...matrix];
      }
      else {
        array = [...matrix.reverse()];
      }
    });
  }
  else return [];
  return array;
}
