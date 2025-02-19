WRHeightParse = nflWRStats.map(player => {
  return {
    ...player,
    HeightInInches: parseHeight(player.Height)
  };
});
