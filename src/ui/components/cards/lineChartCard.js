/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 09/09/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import React, {Component} from 'react';
import {Text, View} from "react-native";
import {styles} from "../../theme/style";
import MyLineChart from "../../../data_representation/charts/lineChart";

export default class LineChartCard extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig]}>
                <Text style={[styles.chartTitle]}>{this.props.title}</Text>
                <MyLineChart color={this.props.color} data={this.props.data} />
                <Text style={styles.chartDescription}>{this.props.description}</Text>
            </View>
        );
    }
}