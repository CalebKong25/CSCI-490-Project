nflWRStats = wr.map(stat => {
  const ratio = ((stat.Receptions / stat.Targetedreceiver)*100).toFixed(2); // Calculate ratio and format to 2 decimals
  return {
    ...stat, // Keep the original properties
    AvgcatchRatio: ratio, // Add the new ratio property
  };
});
