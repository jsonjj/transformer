const { posEncoded } = require('../positionalEncoding/index.js');
const { calculateAttention } = require('./attention/index.js');
const { forwardFeed } = require('./feedForward/index.js');

var attentionedOutputs = calculateAttention(posEncoded);
var forwardedOutputs = forwardFeed(attentionedOutputs);

for (let i = 0; i < 2; i++) {
  attentionedOutputs = calculateAttention(forwardedOutputs);
  forwardedOutputs = forwardFeed(attentionedOutputs);
}

module.exports = { forwardedOutputs };
