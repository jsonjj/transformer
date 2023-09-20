const { words } = require('./words.js');

function inputIds(ary) {
  var res = [];
  for (let i = 0; i < ary.length; i++) {
    res.push(words.indexOf(ary[i]));
  }
  return res;
}


module.exports = { inputIds };
