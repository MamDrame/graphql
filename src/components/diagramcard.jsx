/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import * as d3 from "d3";
import { useEffect, useRef } from "react";
import { calculateXpByMonth, convertXP } from "../lib/utils.js";

const BarChart = ({ data }) => {
  data = calculateXpByMonth(data);
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
        .attr("fill", "#4F46E5")
        //add interactivity and color change and add text on hover
        .on("mouseover", (event, d) => {
          d3.select(event.target)
            .transition()
            .duration(300)
            .attr("fill", "#9333ea");
          svg
            .append("text")
            .attr("class", "text")
            .attr("style", `fill:#9333ea ; font-size: 14px; font-weight: bold;`)
            .attr("x", x(d.month + "-" + d.year))
            .attr("y", y(d.xp) - 10)
            .text(convertXP(d.xp));
        })
        .on("mouseout", (event) => {
          d3.select(event.target)
            .transition()
            .duration(300)
            .attr("fill", "#4F46E5");
          svg.select(".text").remove();
        });
    }
    return () => {
      d3.select(svgRef.current).selectAll("*").remove();
    };
  }, [data]);

  return (
    <>
      <div className="text-center text-xl font-bold text-white">
        <h1>XP by Month</h1>
        <p>This chart represents the number of XP earned per month.</p>
      </div>
      <svg ref={svgRef} className="text-white"></svg>
    </>
  );
};

export default BarChart;
