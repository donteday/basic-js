let q = [
[0, 1, 1, 2],
[0, 5, 0, 0],
[2, 0, 3, 3]];

function getMatrixElementsSum(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix[0].length; i++) {
    sum += matrix[0][i];
  }
  for (let i = 1; i < matrix.length; i++) { 
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i-1][j] !== 0 ) sum += matrix[i][j];
    }
  }
  return sum;

}


console.log(getMatrixElementsSum(q));

// function getDNSStats(domains) {
//     let domens = {};
//     domains[0] = domains[0].split('.');
//     //     for (let j = 0; j < domains[i].length; j++) {
//     //         domens['.'+domains[i][j]] = 0;
//     //     }
//     // }
    
//     return domains;


// }

 


