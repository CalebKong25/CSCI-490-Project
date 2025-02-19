wrscatterPlot = {
  const w = 400;
  const h = 300;
  const margin = { top: 20, right: 30, bottom: 40, left: 50 };

  const svg = d3
    .create("svg")
    .attr("width", w)
    .attr("height", h)
    .attr("id", "scatterPlot");

  nflWRStats.forEach(d => {
    d.HeightInches = parseInt(d.Height.split("'")[0]) * 12 + parseInt(d.Height.split("'")[1].replace('"', ''));
  });

  // Define scales
 const x = d3.scaleLinear()
    .domain([66, d3.max(nflWRStats, (d) => d.HeightInches+ 1)]).nice()
    .range([margin.left, w - margin.right]);
  
  const y = d3.scaleLinear()
    .domain([30,105]).nice()
    .range([h - margin.bottom, margin.top]);

  // Axes
  svg.append("g")
    .attr("transform", `translate(0,${h - margin.bottom})`)
    .call(
      d3.axisBottom(x)
        .ticks(6) // Adjust tick count as needed
        .tickFormat(d => {
          const feet = Math.floor(d / 12);
          const inches = d % 12;
          return `${feet}'${inches}"`;
        })
    )
    .call((g) =>
      g.append("text")
        .attr("x", w - margin.right)
        .attr("y", -4)
        .attr("fill", "currentColor")
        .attr("font-weight", "bold")
        .attr("text-anchor", "end")
        .text("Height")
    );

  svg.append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y))
    .call((g) =>
      g.append("text")
        .attr("x", 4)
        .attr("y", margin.top - 10)
        .attr("dy", ".71em")
        .attr("fill", "currentColor")
        .attr("font-weight", "bold")
        .attr("text-anchor", "start")
        .text("Average Yards")
    );


  // Scatterplot points
  const points = svg
    .selectAll("circle.site")
    .data(nflWRStats)
    .join("circle")
    .attr("class", "site")
    .attr("cx", d => x(d.HeightInches))
    .attr("cy", d => y(d.AvgcatchRatio))
    .attr("fill", "steelblue")
    .attr("r", 5);

  return svg.node();
};
