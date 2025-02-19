nflRBStats = rb.map(stat => {
  const ratio = ((stat.rushingYards / stat.Attempts)).toFixed(2); // Calculate ratio and format to 2 decimals
  return {
    ...stat, // Keep the original properties
    AvgYardsRatio: ratio, // Add the new ratio property
  };
});
