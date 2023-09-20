function positionalEncoding(position, d_model) {
  const angle_rates = [];
  for (let i = 0; i < d_model.length; i++) {
    angle_rates.push(position / Math.pow(10000, (2 * (i % 2)) / d_model[i]));
  }
  return angle_rates;
}

module.exports = { positionalEncoding };
