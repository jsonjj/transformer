function computeEmbedding(input_ids, token_type_ids, attention_masks) {
  // Perform element-wise addition of the embeddings
  const embedding = new Array(input_ids.length);
  for (let i = 0; i < input_ids.length; i++) {
    embedding[i] = input_ids[i] + token_type_ids[i] + attention_masks[i];
  }

  // Normalize the embedding
  var sum = 0;
  for (let i = 0; i < embedding.length; i++) {
    sum += Math.pow(embedding[i], 2);
  }
  const norm = Math.sqrt(sum);
  for (let i = 0; i < input_ids.length; i++) {
    embedding[i] /= norm;
  }
  return embedding;
}

module.exports = { computeEmbedding };
