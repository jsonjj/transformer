

function feedForward(input, weights, biases) {
  var weightsIH = weights[0];
  var weightsHO = weights[1];
  var biasH = biases[0];
  var biasO = biases[1];

  var hidden = { multipliedMatrix: multiplyMatrices(weightsIH, input) };
  hidden.addedMatrix = addMatrices(hidden.multipliedMatrix, biasH);
  hidden.sigmoidedMatrix = sigmoidMatrix(hidden.addedMatrix);

  var output = { multipliedMatrix: multiplyMatrices(weightsHO, hidden.sigmoidedMatrix) };
  output.addedMatrix = addMatrices(output.multipliedMatrix, biasO);
  output.sigmoidedMatrix = sigmoidMatrix(output.addedMatrix);
  return output.sigmoidedMatrix;
}



function sigmoidMatrix(matrix) {
  var result = [];
  for (let i = 0; i < matrix.length; i++) {
    result.push([sigmoid(matrix[i][0])]);
  }
  return result;
}

function sigmoid(x) {
  return 1 / (1 + Math.exp(-x));
}

function addMatrices(matrix1, matrix2) {
  var result = [];
  if (matrix1.length == matrix2.length) {
    for (let i = 0; i < matrix1.length; i++) {
      result.push([matrix1[i][0] + matrix2[i][0]]);
    }
  } else {
    result = matrix1;
  }
  return result;
}

function multiplyMatrices(a, b) {
  var aNumRows = a.length;
  var aNumCols = a[0].length;
  var bNumRows = b.length;
  var bNumCols;
  if (typeof b[0] === 'undefined') {
    bNumCols = 1
  } else {
    bNumCols = b[0].length;
  }

      m = new Array(aNumRows);  // initialize array of rows
  for (var r = 0; r < aNumRows; ++r) {
    m[r] = new Array(bNumCols); // initialize the current row
    for (var c = 0; c < bNumCols; ++c) {
      m[r][c] = 0;             // initialize the current cell
      for (var i = 0; i < aNumCols; ++i) {
        if (typeof b[i] === 'undefined') {
          m[r][c] += a[r][i]
        } else {
          m[r][c] += a[r][i] * b[i][c];
        }
      }
    }
  }
  return m;
}

function matrix(numRows, numColumns) {
  var matrixAry = [];
  var rowAry = [];
  for (let i = 0; i < numRows; i++) {
    matrixAry.push(new Array(numColumns));
  }
  return matrixAry;
}

function randomizeMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] = round(Math.random(), 2);
    }
  }
  return matrix;
}

function round(num, digits) {
  return Math.round(num * Math.pow(10, digits)) / Math.pow(10, digits);
}

module.exports = { feedForward, matrix, randomizeMatrix, round };
