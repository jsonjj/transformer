const { inputIdsOutputs, tokenTypeIdsOutputs, attentionMaskedOutputs } = require('../tokenizer/index.js');
const { computeEmbedding } = require('./computeEmbedding.js');

var embedding = [];
for (let i = 0; i < inputIdsOutputs.length; i++) {
  embedding.push(computeEmbedding(inputIdsOutputs[i], tokenTypeIdsOutputs[i], attentionMaskedOutputs[i]));
}
console.log("Embedding Outputs: ", embedding);

module.exports = { embedding };
