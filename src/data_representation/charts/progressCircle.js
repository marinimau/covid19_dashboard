/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 28/07/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */


import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Colors from "../../ui/theme/colors";
import {AnimatedCircularProgress} from "react-native-circular-progress/index";
import LegendColors from "../../ui/theme/legendColors";
import {dimens} from "../../ui/theme/dimens";
import darkMode from "../../ui/theme/darkModeDetector";


export default  class MyProgressCircle extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{width: '100%', alignItems: 'center'}}>
                <AnimatedCircularProgress
                    size={dimens.pieChartRadius}
                    width={8}
                    fill={this.props.value}
                    padding={10}
                    tintColor={this.props.color}
                    onAnimationComplete={() => console.log('onAnimationComplete')}
                    backgroundColor={(darkMode() ? Colors.darkMode_basicTransparent : Colors.basicTransparent)}>
                    {
                        (fill) => (
                            <Text style={{color: (darkMode() ? Colors.darkMode_basic : Colors.basic)}}>
                                {this.props.value}%
                            </Text>
                        )
                    }
                </AnimatedCircularProgress>
            </View>

        );
    }
}
