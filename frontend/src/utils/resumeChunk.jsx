export const chunkContent = (content) => {
  const chunks = [];
  let currentChunk = [];
  let currentHeight = 0;
  const maxHeight = 1123; // The height of one page

  content.forEach((item) => {
    const itemHeight = estimateHeight(item); // Estimate the height of the item
    if (currentHeight + itemHeight > maxHeight) {
      chunks.push(currentChunk);
      currentChunk = [];
      currentHeight = 0;
    }
    currentChunk.push(item);
    currentHeight += itemHeight;
  });

  if (currentChunk.length) {
    chunks.push(currentChunk);
  }

  return chunks;
};

export const estimateHeight = (item) => {
  // Estimate the height of the item
  // This can be a fixed value or a calculated value based on item content
  return 50; // Example fixed value
};
