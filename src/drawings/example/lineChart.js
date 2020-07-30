/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 23/07/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import {LineChart} from "react-native-chart-kit";
import {dynamicDimens} from "../../ui/theme/dimens";
import Colors from "../../ui/theme/colors";
import {hexToRgb} from "../../utils/colorConverter";

export default class MyLineChart extends Component{

    constructor(props) {
        super(props);
    }


    render() {

        const colorRGB = hexToRgb(this.props.color);
        return (
            <View style={{marginTop: 20}}>
                <LineChart
                    data={{
                        labels: [],
                        datasets: [
                            {
                                data: this.props.data
                            }
                        ]
                    }}
                    width={dynamicDimens.chartFullWidth} // from react-native
                    height={220}
                    yAxisLabel=""
                    yAxisSuffix=""
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                        backgroundColor: Colors.basicElevation,
                        backgroundGradientFrom: Colors.basicElevation,
                        backgroundGradientTo: Colors.basicElevation,
                        decimalPlaces: 0, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(${colorRGB.r}, ${colorRGB.g}, ${colorRGB.b}, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "4",
                            strokeWidth: "2",
                            stroke: Colors.basicElevation
                        }
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
                    }}
                />

            </View>

        );
    }
}