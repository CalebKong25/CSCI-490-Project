QBHeightParse = nflQBStats.map(player => {
  return {
    ...player,
    HeightInInches: parseHeight(player.Height)
  };
});
