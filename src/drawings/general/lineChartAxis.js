/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 25/07/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import React, {PureComponent} from 'react'
import {Svg, G, Line, Rect, Text} from 'react-native-svg'
import * as d3 from 'd3'
import Colors from "../../ui/theme/colors";
import {getChartFullWidth} from "../../utils/dimensionsUtils";


export default class LineChartAxis extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {

        return (
            <Svg width={props.params.SVGWidth} height={props.params.SVGHeight}>
                <G y={props.params.graphHeight + props.params.GRAPH_MARGIN}>

                    {/* Horizontal Lines */}
                    {props.params.indices.map((i) => (
                        <>
                            <Text
                                x={props.params.graphWidth + 20}
                                textAnchor="end"
                                y={y(props.params.maxValue / props.params.numLines * i) * -1 - 5}
                                fontSize={12}
                                fill={Colors.basic}
                                fillOpacity={0.4}>
                                {Math.round(props.params.maxValue / props.params.numLines * i)}
                            </Text>

                            <Line
                                x1="0"
                                y1={y(props.params.maxValue / props.params.numLines * i) * -1}
                                x2={props.params.graphWidth}
                                y2={y(props.params.maxValue / props.params.numLines * i) * -1}
                                stroke={Colors.axis}
                                strokeDasharray={[3, 3]}
                                strokeWidth="0.5"
                            />
                        </>
                    ))}

                    {data.map(item => (
                        props.chart
                    ))}

                </G>
            </Svg>
        )
    }
}