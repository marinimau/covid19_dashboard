/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 23/07/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import React, { PureComponent } from 'react'
import { Svg, G, Line, Rect, Text } from 'react-native-svg'
import * as d3 from 'd3'
import Colors from "../../ui/theme/colors";
import {getChartFullWidth} from "../../utils/dimensionsUtils";

const GRAPH_MARGIN = 20
const GRAPH_BAR_WIDTH = 10
const colors = {
    axis: '#E4E4E4',
    bars: Colors.main
}

export default class NewCasTotalChart extends PureComponent {
    render() {
        // Dimensions
        const SVGHeight = 450
        const SVGWidth = getChartFullWidth()
        const SVGFlex = 1
        const graphHeight = SVGHeight - 2 * GRAPH_MARGIN
        const graphWidth = SVGWidth - 2 * GRAPH_MARGIN
        const data = [
            { label: 'Jan', value: 500 },
            { label: 'Feb', value: 312 },
            { label: 'Mar', value: 424 },
            { label: 'Apr', value: 745 },
            { label: 'May', value: 89 },
            { label: 'Jun', value: 434 },
            { label: 'Jul', value: 650 },
            { label: 'Aug', value: 980 },
            { label: 'Sep', value: 123 },
            { label: 'Oct', value: 186 },
            { label: 'Nov', value: 689 },
            { label: 'Dec', value: 643 }
        ]
        const round = 1000

        // X scale point
        const xDomain = data.map(item => item.label)
        const xRange = [0, graphWidth]
        const x = d3.scalePoint()
            .domain(xDomain)
            .range(xRange)
            .padding(1)

        // Y scale linear
        const maxValue = d3.max(data, d => d.value)
        const topValue = Math.ceil(maxValue / round) * round
        const yDomain = [0, topValue]
        const yRange = [0, graphHeight]
        const y = d3.scaleLinear()
            .domain(yDomain)
            .range(yRange)

        // top axis and middle axis
        const oneOfFive = topValue/5
        const middleValue = topValue / 2

        return (
            <Svg width={SVGWidth} height={SVGHeight}>
                <G y={graphHeight + GRAPH_MARGIN}>
                    {/* Top value label */}
                    <Text
                        x={graphWidth}
                        textAnchor="end"
                        y={y(topValue) * -1 - 5}
                        fontSize={12}
                        fill={Colors.basic}
                        fillOpacity={0.4}>
                        {topValue}
                    </Text>

                    {/* top axis */}
                    <Line
                        x1="0"
                        y1={y(topValue) * -1}
                        x2={graphWidth}
                        y2={y(topValue) * -1}
                        stroke={colors.axis}
                        strokeDasharray={[3, 3]}
                        strokeWidth="0.5"
                    />

                    {/* 4/5 */}
                    <Text
                        x={graphWidth}
                        textAnchor="end"
                        y={y(oneOfFive*4) * -1 - 5}
                        fontSize={12}
                        fill={Colors.basic}
                        fillOpacity={0.4}>
                        {oneOfFive*4}
                    </Text>

                    <Line
                        x1="0"
                        y1={y(oneOfFive*4) * -1}
                        x2={graphWidth}
                        y2={y(oneOfFive*4) * -1}
                        stroke={colors.axis}
                        strokeDasharray={[3, 3]}
                        strokeWidth="0.5"
                    />

                    {/* 3/5 */}
                    <Line
                        x1="0"
                        y1={y(oneOfFive*3) * -1}
                        x2={graphWidth}
                        y2={y(oneOfFive*3) * -1}
                        stroke={colors.axis}
                        strokeDasharray={[3, 3]}
                        strokeWidth="0.5"
                    />

                    <Text
                        x={graphWidth}
                        textAnchor="end"
                        y={y(oneOfFive*3) * -1 - 5}
                        fontSize={12}
                        fill={Colors.basic}
                        fillOpacity={0.4}>
                        {oneOfFive*3}
                    </Text>

                    {/* 2/5 */}
                    <Line
                        x1="0"
                        y1={y(oneOfFive*2) * -1}
                        x2={graphWidth}
                        y2={y(oneOfFive*2) * -1}
                        stroke={colors.axis}
                        strokeDasharray={[3, 3]}
                        strokeWidth="0.5"
                    />

                    <Text
                        x={graphWidth}
                        textAnchor="end"
                        y={y(oneOfFive*2) * -1 - 5}
                        fontSize={12}
                        fill={Colors.basic}
                        fillOpacity={0.4}>
                        {oneOfFive*2}
                    </Text>

                    {/* 1/5 */}
                    <Line
                        x1="0"
                        y1={y(oneOfFive) * -1}
                        x2={graphWidth}
                        y2={y(oneOfFive) * -1}
                        stroke={colors.axis}
                        strokeDasharray={[3, 3]}
                        strokeWidth="0.5"
                    />

                    <Text
                        x={graphWidth}
                        textAnchor="end"
                        y={y(oneOfFive) * -1 - 5}
                        fontSize={12}
                        fill={Colors.basic}
                        fillOpacity={0.4}>
                        {oneOfFive}
                    </Text>

                    {/* bottom axis */}
                    <Line
                        x1="0"
                        y1="2"
                        x2={graphWidth}
                        y2="2"
                        stroke={colors.axis}
                        strokeWidth="0.5"
                    />

                    <Text
                        x={graphWidth}
                        textAnchor="end"
                        y={y(2) * -1 - 5}
                        fontSize={12}
                        fill={Colors.basic}
                        fillOpacity={0.4}>
                        {0}
                    </Text>

                    {/* bars */}
                    {data.map(item => (
                        <Rect
                            key={'bar' + item.label}
                            x={x(item.label) - (GRAPH_BAR_WIDTH / 2)}
                            y={y(item.value) * -1}
                            rx={2.5}
                            width={GRAPH_BAR_WIDTH}
                            height={y(item.value)}
                            fill={colors.bars}
                        />
                    ))}

                    {/* labels */}
                    {data.map(item => (
                        <Text
                            key={'label' + item.label}
                            fontSize="8"
                            x={x(item.label)}
                            y="10"
                            textAnchor="middle">{item.label}</Text>
                    ))}
                </G>
            </Svg>
        )
    }
}