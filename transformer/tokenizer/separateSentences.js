const punctuation = ".?!"

function separateSentences(ary) {
  for (let i = 0; i < ary.length; i++) {
    if (punctuation.includes(ary[i])) {
      ary.splice(i + 1, 0, "[SEP]")
    }
  }
  return ary;
}

module.exports = { separateSentences };
