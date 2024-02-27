import * as d3 from "d3";
import { useEffect, useRef } from "react";
import { filterAndAddColor } from "../lib/utils.js";

/* eslint-disable react/prop-types */

export const DonutChart = ({ data }) => {
  const width = 300;
  const height = 300;
  data = filterAndAddColor(data);
  const ref = useRef();

  useEffect(() => {
    const svg = d3
      .select(ref.current)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    const arc = d3
      .arc()
      .innerRadius(100) // rayon intérieur
      .outerRadius(Math.min(width, height) / 2); // rayon extérieur

    const pie = d3.pie().value((d) => d.amount);

    const arcs = pie(data);

    const tooltip = d3
      .select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);

    svg
      .selectAll("path")
      .data(arcs)
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", (d, i) => data[i].couleur)
      .on("mouseover", (e, d) => {
        const total = d3.sum(data.map((item) => item.amount));
        const percent = Math.round((1000 * d.data.amount) / total) / 10;
        tooltip.transition().duration(200).style("opacity", 0.9);
        tooltip
          .html(`${d.data.type}: ${percent}%`)
          .style("left", e.pageX + "px")
          .style("top", e.pageY - 28 + "px");
      })
      .on("mouseout", () => {
        tooltip.transition().duration(500).style("opacity", 0);
      });
  }, [data, width, height]);

  return (
    <>
      <svg ref={ref}></svg>
      <div>
        {data.map((d) => (
          <Legend key={d.type} d={d} />
        ))}
      </div>
    </>
  );
};

function Legend({ d }) {
  return (
    <div className="inline-flex items-center p-1" key={d.type}>
      <span
        className="size-2 inline-block rounded-full me-2"
        style={{ backgroundColor: `${d.couleur}` }}
      />
      <span className="text-gray-600 dark:text-gray-400">{d.type}</span>
    </div>
  );
}
