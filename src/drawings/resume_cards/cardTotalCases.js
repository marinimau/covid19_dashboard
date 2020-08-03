/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 27/07/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */


import React, {Component} from 'react';
import LegendColors from "../../ui/theme/legendColors";
import {styles} from "../../ui/theme/style";
import {Text} from "react-native";
import {chartTitles} from "../../ui/contents/strings";
import latestUpdateData from "../../logic/latestUpdateData";
import {LinearGradient} from "expo-linear-gradient";

export default class CardTotalCases extends Component{


    render() {
        return (
            <LinearGradient  colors={[LegendColors.red, LegendColors.lightred]}  style={[styles.cardGeneric, styles.cardShadow, styles.cardSmall, {shadowColor: LegendColors.lightred}]}>
                <Text style={[styles.chartTitle, styles.indicatorLight]}>{chartTitles.totalCases}</Text>
                <Text style={[styles.indicatorValue, styles.indicatorValueBold, styles.indicatorLight]}>{latestUpdateData().totalCases}</Text>
                <Text style={[styles.indicatorValue, styles.indicatorValueIncr,  styles.indicatorLight]}>{latestUpdateData().newCases} ({latestUpdateData().totalCasesVariationPercentage}%)</Text>
            </LinearGradient>
        );
    }
}