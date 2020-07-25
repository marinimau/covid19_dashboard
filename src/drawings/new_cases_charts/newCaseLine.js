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


class SvgExample extends Component {
    render () {

        const dataset = Records.getRecords();

        const params = {
            GRAPH_MARGIN: 10,
            GRAPH_BAR_WIDTH: 10,
            SVGHeight: 450,
            SVGWidth: getChartFullWidth(),
            SVGFlex: 1,
            graphHeight: this.SVGHeight - 2 * this.GRAPH_MARGIN,
            graphWidth: this.SVGWidth - 2 * this.GRAPH_MARGIN,
            data: dataset,
            round: 1000,
            xDomain: dataset.map(item => item.data),
            xRange: [0, this.graphWidth],
            x: d3.scalePoint()
                .domain(this.xDomain)
                .range(this.xRange)
                .padding(1),
            maxValue: d3.max(dataset, d => d.totale_casi),
            topValue: Math.ceil(this.maxValue / this.round) * this.round,
            yDomain: [0, this.topValue],
            yRange: [0, this.graphHeight],
            y: d3.scaleLinear()
                .domain(this.yDomain)
                .range(this.yRange),
            indices: [0, 1, 2, 3, 4, 5],
            numLines: this.indices.length - 1,
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