


import React, { PureComponent } from "react";
import { Svg, G, Line, Rect, Text } from 'react-native-svg'
import * as d3 from "d3";
import Colors from "../../ui/theme/colors";
import {getChartFullWidth} from "../../utils/dimensionsUtils";

const data = [1, 2, 3, 4];

export default class SimplePieChart extends PureComponent {
    render() {

        const height = 400;
        const width = 400;

        let pie = d3.pie()(data);

        return (
            <svg height={height} width={width}>
                <g transform={`translate(${width / 2},${height / 2})`}>
                    <Slice pie={pie}/>
                </g>
            </svg>
        )
    }
}

const Slice = props => {
    let { pie } = props;

    let arc = d3.arc()
        .innerRadius(0)
        .outerRadius(150);

    let interpolate = d3.interpolateRgb("#eaaf79", "#bc3358");

    return pie.map((slice, index) => {
        let sliceColor = interpolate(index/ (pie.length -1));
        return <path d={arc(slice)} fill={sliceColor} />;
    });
}



/*

chart = {
    const arcs = pie(data);

const svg = d3.create("svg")
    .attr("viewBox", [-width / 2, -height / 2, width, height]);

svg.append("g")
    .attr("stroke", "white")
    .selectAll("path")
    .data(arcs)
    .join("path")
    .attr("fill", d => color(d.data.name))
    .attr("d", arc)
    .append("title")
    .text(d => `${d.data.name}: ${d.data.value.toLocaleString()}`);

svg.append("g")
    .attr("font-family", "sans-serif")
    .attr("font-size", 12)
    .attr("text-anchor", "middle")
    .selectAll("text")
    .data(arcs)
    .join("text")
    .attr("transform", d => `translate(${arcLabel.centroid(d)})`)
    .call(text => text.append("tspan")
        .attr("y", "-0.4em")
        .attr("font-weight", "bold")
        .text(d => d.data.name))
    .call(text => text.filter(d => (d.endAngle - d.startAngle) > 0.25).append("tspan")
        .attr("x", 0)
        .attr("y", "0.7em")
        .attr("fill-opacity", 0.7)
        .text(d => d.data.value.toLocaleString()));

return svg.node();
}

data = d3.csvParse(await FileAttachment("population-by-age.csv").text(), d3.autoType)

color = d3.scaleOrdinal()
    .domain(data.map(d => d.name))
    .range(d3.quantize(t => d3.interpolateSpectral(t * 0.8 + 0.1), data.length).reverse())

height = Math.min(width, 500)

arcLabel = {
    const radius = Math.min(width, height) / 2 * 0.8;
return d3.arc().innerRadius(radius).outerRadius(radius);
}

pie = d3.pie()
    .sort(null)
    .value(d => d.value)

d3 = require("d3@5")


 */