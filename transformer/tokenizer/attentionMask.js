function attentionMask(ary) {
  var res = [];
  for (let i = 0; i < ary.length; i++) {
    if (ary[i] == "[PAD]" || ary[i] == "[SEP]") {
      res.push(0);
    } else {
      res.push(1);
    }
  }
  return res;
}

module.exports = { attentionMask };
