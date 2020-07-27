/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 27/07/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import React, {Component} from 'react';
import {LinearGradient} from "expo-linear-gradient";
import Colors from "../../ui/theme/colors";
import {styles} from "../../ui/theme/style";
import {Text} from "react-native";
import {chartTitles, dataDescription} from "../../ui/contents/strings";
import latestUpdateData from "../../logic/latestUpdateData";

export default class CardDate extends Component{


    render() {
        return (
            <LinearGradient  colors={[Colors.main, Colors.main]} style={[styles.cardGeneric, styles.cardShadow, styles.cardSmall, {shadowColor: Colors.main}]}>
                <Text style={[styles.chartTitle, styles.indicatorLight]}>{chartTitles.lastUpdateDate}</Text>
                <Text style={[styles.indicatorValue, styles.indicatorValueBold, styles.indicatorLight, {fontSize: 15}]}>{latestUpdateData().lastUpdateDate}</Text>
                <Text style={[styles.indicatorValue, styles.chartDescription, styles.indicatorLight]}>{dataDescription.lastUpdate}</Text>
            </LinearGradient>
        );
    }
}