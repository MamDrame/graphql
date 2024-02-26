/* eslint-disable react/prop-types */

import * as d3 from "d3";
import { useEffect, useRef } from "react";
import { calculateXpByMonth } from "../lib/utils.js";

const BarChart = ({ data }) => {
  data = calculateXpByMonth(data);
  console.log(data);
  const svgRef = useRef();

  useEffect(() => {
    if (data && data.length) {
      const margin = { top: 20, right: 20, bottom: 30, left: 40 };
      const width = 600 - margin.left - margin.right;
      const height = 400 - margin.top - margin.bottom;

      const svg = d3
        .select(svgRef.current)
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

      const x = d3
        .scaleBand()
        .range([0, width])
        .padding(0.1)
        .domain(data.map((d) => d.month + "-" + d.year));

      const y = d3
        .scaleLinear()
        .range([height, 0])
        .domain([0, d3.max(data, (d) => d.xp)]);

      svg
        .append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(d3.axisBottom(x));

      svg.append("g").call(d3.axisLeft(y));

      svg
        .selectAll(".bar")
        .data(data)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", (d) => x(d.month + "-" + d.year))
        .attr("width", x.bandwidth())
        .attr("y", (d) => y(d.xp))
        .attr("height", (d) => height - y(d.xp))
        .attr("fill", "#4F46E5");
    }
  }, [data]);

  return <svg ref={svgRef}></svg>;
};

export default BarChart;
