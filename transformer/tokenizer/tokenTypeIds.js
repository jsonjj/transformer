function tokenTypeIds(ary) {
  var res = [];
  var count = 0;
  for (let i = 0; i < ary.length; i++) {
    res.push(count);
    if (ary[i] == "[SEP]") {
      count++;
    }
  }
  return res;
}

module.exports = { tokenTypeIds };
