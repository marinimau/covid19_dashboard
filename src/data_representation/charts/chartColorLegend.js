/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 05/08/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {styles} from "../../ui/theme/style";

export default class ChartColorLegend extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.legendContainer}>
                <View style={[styles.legendColorSquare, { backgroundColor: this.props.color}]}/>
                <Text style={styles.legendTitle}>{this.props.title}</Text>
            </View>
        );
    }

}