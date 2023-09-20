const breakChars = "',.!?-_/()*&^#@<> "

function tokenize(text) {
  var ary = [];
  for (let i = 0; i < breakChars.length; i++) {
    ary = text.split(breakChars[i]);
    var amt = ary.length * 2 - 1;
    for (let j = 1; j < amt; j += 2) {
      ary.splice(j , 0, breakChars[i]);
    }
    text = aryToString(ary);
  }
  var last = ary[ary.length - 1];
  while (ary.includes("") || ary.includes(" ")) {
    ary.splice(ary.indexOf(""), 1);
    ary.splice(ary.indexOf(" "), 1);
    if (ary[ary.length - 1] != last) {
      ary.push(last);
    }
  }
  return ary
}

function aryToString(ary) {
  var str = "";
  for (let i = 0; i < ary.length; i++) {
    str += ary[i] + " ";
  }
  return str.trim();
}

module.exports = { tokenize };
