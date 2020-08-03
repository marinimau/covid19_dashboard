/**
 * covid19_dashboard copyright © 2020
 * Created by albertopes on 27/07/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Cagliari
 */

import React, { PureComponent } from "react";
import * as d3 from "d3";
import {dimens} from "../../ui/theme/dimens";
import Colors from "../../ui/theme/colors";


const data = [1, 2, 3, 4];

export default class PieChart extends PureComponent {
    render() {

        const height = dimens.pieChartRadius*2;
        const width = dimens.pieChartRadius*2;

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

    let interpolate = d3.interpolateRgb(Colors.accent1, Colors.accent2);

    return pie.map((slice, index) => {
        let sliceColor = interpolate(index/ (pie.length -1));
        return <path d={arc(slice)} fill={sliceColor} />;
    });
}

