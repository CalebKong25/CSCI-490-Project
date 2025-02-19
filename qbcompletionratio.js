nflQBStats = qb.map(stat => {
  const ratio = ((stat.Completions / stat.Attempts) * 100).toFixed(2); // Calculate ratio and format to 2 decimals
  return {
    ...stat, // Keep the original properties
    AvgCompletionsRatio: ratio, // Add the new ratio property
  };
});
