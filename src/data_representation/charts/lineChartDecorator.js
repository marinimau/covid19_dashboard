/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 08/09/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import {Circle, Line, Svg, Text as TextSVG} from "react-native-svg";
import darkMode from "../../ui/theme/darkModeDetector";
import Colors from "../../ui/theme/colors";
import React, {Component, Fragment} from "react";


class LineChartDecorator extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment key={Math.random()}>
                <Svg>
                    <Line
                        x1={this.props.x}
                        y1="0"
                        x2={this.props.x}
                        y2="190"
                        stroke={(darkMode() ? Colors.darkMode_basicTransparent : Colors.basicTransparent)}
                        strokeWidth="1"/>
                    <Circle
                        cx={this.props.x}
                        cy={this.props.y}
                        r="5"
                        fill={this.props.color}/>
                    <TextSVG
                        x={this.props.x}
                        y={10}
                        fill={(darkMode() ? Colors.darkMode_basic : Colors.basic)}
                        fontSize="14"
                        fontWeight="bold"
                        textAnchor="middle">
                        {this.props.value === null ? 'N/D' : this.props.selectedDate + ' - ' + this.props.value.toLocaleString('it')}
                    </TextSVG>
                </Svg>
            </Fragment>
        );
    }
}

export default LineChartDecorator;