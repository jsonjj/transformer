const { attention } = require('./attention.js');

function calculateAttention(posEncoded) {
  var attentionedOutputs = attention(posEncoded);
  console.log("Attentioned Outputs: ", attentionedOutputs);
  return attentionedOutputs;
}
module.exports = { calculateAttention };
