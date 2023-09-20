const { embedding } = require('../embedding/index.js');
const { positionalEncoding } = require('./posEncoding.js');

var posEncoded = [];
for (let i = 0; i < embedding.length; i++) {
  posEncoded.push(positionalEncoding(5, embedding[i]));
}
console.log("Encoded Position Outputs: ", posEncoded);

module.exports = { posEncoded };
