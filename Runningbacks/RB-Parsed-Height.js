RBHeightParse = nflRBStats.map(player => {
  return {
    ...player,
    HeightInInches: parseHeight(player.Height)
  };
});
