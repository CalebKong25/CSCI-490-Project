qbtable = {

  const tableContainer = d3.create("div").attr("class", "table-container");

  // Add a search input
  const searchInput = tableContainer.append("input")
    .attr("type", "text")
    .attr("placeholder", "Search by Team or Quarterback...")
    .attr("class", "search-input");

  // Create table structure
  const table = tableContainer.append('table').attr("class", "scores");
  const thead = table.append("thead");
  const tbody = table.append("tbody");


  // Add table headers
  thead.append("tr")
    .selectAll("th")
    .data(qbkeys)
    .join("th")
    .text(d => d);

  // Add rows to the table
  let games = tbody.selectAll('tr.game')
    .data(QBHeightParse)
    .join('tr')
    .attr('class', 'game');

  // Add cells to each row
  games.selectAll('td')
    .data(d => qbkeys.map(k => d[k]))
    .join('td')
    .text(d => d);

  // Filter functionality
  searchInput.on("input", function () {
    const searchTerm = this.value.toLowerCase();
    tbody.selectAll('tr.game')
      .style("display", d => 
             d.Team.toLowerCase().includes(searchTerm)  || 
             d.Quarterback.toLowerCase().includes(searchTerm) 
            ? null : "none");
  });

  return tableContainer.node();
};
