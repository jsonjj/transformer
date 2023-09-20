const prompt = require('prompt-sync')();
const { tokenize } = require('./tokenize.js');
const { padding } = require('./padding.js');
const { attentionMask } = require('./attentionMask.js');
const { words } = require('./words.js');
const { inputIds } = require('./inputIds.js');
const { tokenTypeIds } = require('./tokenTypeIds.js');
const { separateSentences } = require('./separateSentences.js');
const input1 = prompt('Input text 1: ');
const input2 = prompt('Input text 2: ');
const input3 = prompt('Input text 3: ');

var tokenizedInput1 = tokenize(input1);
// console.log("Tokenized Output 1: ", tokenizedInput1);

var tokenizedInput2 = tokenize(input2);
// console.log("Tokenized Output 2: ", tokenizedInput2);

var tokenizedInput3 = tokenize(input3);
// console.log("Tokenized Output 3: ", tokenizedInput3);

var tokenizedInputs = [tokenizedInput1, tokenizedInput2, tokenizedInput3];

var separatedSentences = [];
for (let i = 0; i < tokenizedInputs.length; i++) {
  separatedSentences.push(separateSentences(tokenizedInputs[i]));
}
// console.log("Separated Outputs: ", separatedSentences);

var paddedOutputs = padding(separatedSentences);
// console.log("Padded Outputs: ", paddedOutputs);

var inputIdsOutputs = [];
for (let i = 0; i < paddedOutputs.length; i++) {
  inputIdsOutputs.push(inputIds(paddedOutputs[i]));
}
console.log("Input Ids Outputs: ", inputIdsOutputs);

var tokenTypeIdsOutputs = [];
for (let i = 0; i < paddedOutputs.length; i++) {
  tokenTypeIdsOutputs.push(tokenTypeIds(paddedOutputs[i]));
}
console.log("Token Type Ids Outputs: ", tokenTypeIdsOutputs);

var attentionMaskedOutputs = [];
for (let i = 0; i < paddedOutputs.length; i++) {
  attentionMaskedOutputs.push(attentionMask(paddedOutputs[i]));
}
console.log("Attention Masked Outputs: ", attentionMaskedOutputs);

module.exports = { inputIdsOutputs, tokenTypeIdsOutputs, attentionMaskedOutputs };
