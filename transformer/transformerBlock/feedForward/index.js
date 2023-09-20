const { feedForward, matrix, randomizeMatrix, round } = require('./feedForward.js');

function forwardFeed(attentionedOutputs) {
  const inputNodes = attentionedOutputs[0].length;
  const hiddenNodes = 5;
  const outputNodes = attentionedOutputs[0].length;

  for (let i = 0; i < attentionedOutputs.length; i++) {
    attentionedOutputs[i] = [attentionedOutputs[i]];
  }

  var weightsIH = randomizeMatrix(matrix(hiddenNodes, inputNodes));

  var weightsHO = randomizeMatrix(matrix(outputNodes, hiddenNodes));

  var biasH = randomizeMatrix(matrix(hiddenNodes, 1));

  var biasO = randomizeMatrix(matrix(outputNodes, 1));

  var fedForwardOutputs = [];
  for (let i = 0; i < attentionedOutputs.length; i++) {
    fedForwardOutputs.push(feedForward(attentionedOutputs[i], [weightsIH, weightsHO], [biasH, biasO]));
  }
  console.log("Feed Forward Outputs: ", fedForwardOutputs);
  return fedForwardOutputs;
}

module.exports = { forwardFeed };
