const { forwardedOutputs } = require('../transformerBlock/index.js');

function softmax(logits) {
    // Calculate the exponential of each logit
    const expLogits = [];
    let sumExpLogits = 0;
    const e = 2.718;

    for (let i = 0; i < logits.length; i++) {
        const expLogit = Math.exp(logits[i][0]);
        expLogits.push(expLogit);
        sumExpLogits += expLogit;
    }

    // Calculate the softmax values by dividing each exponential logit by the sum
    const softmaxValues = [];

    for (let i = 0; i < expLogits.length; i++) {
        const softmaxValue = expLogits[i] / sumExpLogits;
        softmaxValues.push(softmaxValue);
    }

    return softmaxValues;
}
var softmaxValues = [];
for (let i = 0; i < forwardedOutputs.length; i++) {
  softmaxValues.push(softmax(forwardedOutputs[i]));
}
console.log("SoftMax Outputs: ", softmaxValues);

module.exports = { softmaxValues };
