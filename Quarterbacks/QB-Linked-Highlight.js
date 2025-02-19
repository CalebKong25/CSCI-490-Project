// Link table rows and scatterplot points
{
  const games = d3.select(qbtable).selectAll("tr.game");
  const points = d3.select(qbscatterPlot).selectAll("circle.site");

  // Highlight corresponding scatterplot point when hovering over a table row
  games.on("pointerover", function (event, d) {
    d3.select(this).classed("highlight", true);

    points
      .filter(point => point.Team === d.Team) // Match row and point using the "Team" key
      .classed("highlight", true); // Add highlight class
  });

  games.on("pointerout", function (event, d) {
    d3.select(this).classed("highlight", false);

    points
      .filter(point => point.Team === d.Team)
      .classed("highlight", false); // Remove highlight class
  });

  // Highlight corresponding table row when hovering over a scatterplot point
  points.on("pointerover", function (event, d) {
    d3.select(this).classed("highlight", true).raise(); // Highlight point and bring it to the front

    games
      .filter(row => row.Team === d.Team) // Match point and row using the "Team" key
      .classed("highlight", true); // Add highlight class to the row
  });

  points.on("pointerout", function (event, d) {
    d3.select(this).classed("highlight", false);

    games
      .filter(row => row.Team === d.Team)
      .classed("highlight", false); // Remove highlight class from the row
  });
}
