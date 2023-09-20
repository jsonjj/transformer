function padding(ary) {
  var max = 0;
  for (let i = 0; i < ary.length; i++) {
    max = Math.max(max, ary[i].length);
  }
  for (let i = 0; i < ary.length; i++) {
    if (ary[i].length < max) {
      var index = max - ary[i].length;
      for (let j = 0; j < index; j++) {
        ary[i].push("[PAD]");
      }
    }
  }
  return ary;
}

module.exports = { padding };
