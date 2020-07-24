/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 23/07/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import React, {PureComponent} from 'react'
import {Svg, G, Line, Rect, Text} from 'react-native-svg'
import * as d3 from 'd3'
import Colors from "../../ui/theme/colors";
import {getChartFullWidth} from "../../utils/dimensionsUtils";
import {dataset} from "../../logic/GLOBAL";
import Records from "../../logic/dataset";
import retrieveData from "../../logic/retrieveData";

const GRAPH_MARGIN = 40
const GRAPH_BAR_WIDTH = 5
const colors = {
    axis: '#E4E4E4',
    bars: Colors.main
}

export default class NewCasTotalChart extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            records: dataset
        }
    }


    render() {
        // Dimensions
        const SVGHeight = 450
        const SVGWidth = getChartFullWidth()
        const SVGFlex = 1
        const graphHeight = SVGHeight - 2 * GRAPH_MARGIN
        const graphWidth = SVGWidth - 2 * GRAPH_MARGIN
        const data = retrieveData()
        console.log(data);
        const round = 1000

        // X scale point
        const xDomain = data.map(item => item.data)
        const xRange = [0, graphWidth]
        const x = d3.scalePoint()
            .domain(xDomain)
            .range(xRange)
            .padding(1)

        // Y scale linear
        const maxValue = d3.max(data, d => d.totale_positivi)
        const topValue = Math.ceil(maxValue / round) * round
        const yDomain = [0, topValue]
        const yRange = [0, graphHeight]
        const y = d3.scaleLinear()
            .domain(yDomain)
            .range(yRange)

        // top axis and middle axis
        const indices = [0, 1, 2, 3, 4, 5]
        const numLines = indices.length - 1;

        return (
            <Svg width={SVGWidth} height={SVGHeight}>
                <G y={graphHeight + GRAPH_MARGIN}>

                    {/* Horizontal Lines */}
                    {indices.map((i) => (
                        <>
                            <Text
                                x={graphWidth+10}
                                textAnchor="end"
                                y={y(maxValue / numLines * i) * -1 - 5}
                                fontSize={12}
                                fill={Colors.basic}
                                fillOpacity={0.4}>
                                {Math.round(maxValue / numLines * i)}
                            </Text>

                            <Line
                                x1="0"
                                y1={y(maxValue / numLines * i) * -1}
                                x2={graphWidth}
                                y2={y(maxValue / numLines * i) * -1}
                                stroke={Colors.axis}
                                strokeDasharray={[3, 3]}
                                strokeWidth="0.5"
                            />
                        </>
                    ))}


                    {/* bars */}
                    {data.map(item => (
                        <Rect
                            key={'bar' + item.data}
                            x={x(item.data) - (GRAPH_BAR_WIDTH / 2)}
                            y={y(item.totale_positivi) * -1}
                            rx={2.5}
                            width={GRAPH_BAR_WIDTH}
                            height={y(item.totale_positivi)}
                            fill={colors.bars}
                        />
                    ))}

                    {/* labels
                    {data.map(item => (
                        <Text
                            key={'label' + item.data}
                            fontSize="8"
                            x={x(item.data)}
                            y="10"
                            textAnchor="middle">{item.data}</Text>
                    ))} */}
                </G>
            </Svg>
        )
    }
}