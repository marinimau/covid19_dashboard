/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 25/07/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */


import React, {Component} from "react";
import LineChartAxis from "../general/lineChartAxis";
import Records from "../../logic/dataset";
import Colors from "../../ui/theme/colors";
import {Rect} from "react-native-svg";
import * as d3 from "d3";
import {getChartFullWidth} from "../../utils/dimensionsUtils";
import {max} from "react-native-reanimated";


class SvgExample extends Component {
    render () {
        const GRAPH_MARGIN = 10;
        const GRAPH_BAR_WIDTH = 10;

        const SVGHeight = 450;
        const SVGWidth = getChartFullWidth();
        const SVGFlex =1;
        const graphHeight = SVGHeight - 2 * GRAPH_MARGIN;
        const graphWidth = SVGWidth - 2 * GRAPH_MARGIN;
        const round = 1000;
        const dataset = Records.getRecords();
        const xDomain = dataset.map(item => item.data);
        const xRange = [0, graphWidth];
        const x = d3.scalePoint()
            .domain(xDomain)
            .range(xRange)
            .padding(1);
        const maxValue = d3.max(dataset, d => d.totale_casi);
        const topValue = Math.ceil(maxValue / round) * round;
        const yDomain = [0, topValue];
        const yRange = [0, graphHeight];
        const y = d3.scaleLinear()
            .domain(yDomain)
            .range(yRange);
        const indices = [0, 1, 2, 3, 4, 5];
        const numLines =  indices.length - 1;

        const params = {
            GRAPH_MARGIN: GRAPH_MARGIN,
            GRAPH_BAR_WIDTH: GRAPH_BAR_WIDTH,
            SVGHeight: SVGHeight,
            SVGWidth: SVGWidth,
            SVGFlex: SVGFlex,
            graphHeight: graphHeight,
            graphWidth: graphWidth,
            records: dataset,
            round: round,
            xDomain: xDomain,
            xRange: xRange,
            x: x,
            maxValue: maxValue,
            topValue: topValue,
            yDomain: yDomain,
            yRange: yRange,
            y: y,
            indices: indices,
            numLines: numLines,
        }


        return (
            <LineChartAxis
                params={params}
                chart={
                    dataset.map(item => (
                        <Rect
                            key={'bar' + item.data}
                            x={x(item.data) - (10 / 2)}
                            y={y(item.totale_casi) * -1}
                            rx={2.5}
                            width={10}
                            height={y(item.totale_casi)}
                            fill={Colors.bars}
                        />
                    ))

                }

                />
        )
    }
}

export default SvgExample