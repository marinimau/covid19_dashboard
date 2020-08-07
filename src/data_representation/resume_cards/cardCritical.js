/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 03/08/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import React, {Component} from 'react';
import {Text, View} from "react-native";
import {styles} from "../../ui/theme/style";
import {chartTitles} from "../../ui/contents/strings";
import PositiveDeltaData from "../../logic/positiveDeltaData";

export default class CardCritical extends Component{

    render() {
        return (
            <View  style={[styles.cardGeneric, styles.cardShadow, styles.cardSmall]}>
                <Text style={[styles.chartTitle]}>{chartTitles.critical}</Text>
                <Text style={[styles.indicatorValue, styles.indicatorValueBold]}>{PositiveDeltaData().critical} ({PositiveDeltaData().criticalPercentage}%)</Text>
                <Text style={[styles.indicatorValue, styles.indicatorValueIncr]}>{PositiveDeltaData().criticalVariation} ({PositiveDeltaData().criticalVariationPercentage}%)</Text>
            </View>
        );
    }
}