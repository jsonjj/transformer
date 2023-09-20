function attention(pos) {
  var query, key;
  for (let j = 0; j < pos.length; j++) {
    for (let i = 0; i < pos[j].length; i++) {
      query = pos[j][i];
      key = pos[j];
      pos[j][i] = weightSum(similarityVector(key, query), key);
    }
  }
  return pos;
}

function weightSum(vector, key) {
  var res = 0;
  for (let i = 0; i < key.length; i++) {
    res += vector[i] * key[i];
  }
  return res;
}

function similarityVector(key, query) {
  var ary = [];
  var total = 0;
  for (let i = 0; i < key.length; i++) {
    ary.push(5 - Math.abs(query - key[i]));
    total += ary[i];
  }
  for (let i = 0; i < key.length; i++) {
    ary[i] = ary[i] / total
  }
  return ary;
}

module.exports = { attention };
