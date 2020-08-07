/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 29/07/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */



import React, {Component} from 'react';
import {styles} from "../../ui/theme/style";
import {Text, View} from "react-native";
import {chartTitles} from "../../ui/contents/strings";
import latestUpdateData from "../../logic/latestUpdateData";
import Colors from "../../ui/theme/colors";

export default class CardTestedCases extends Component{

    render() {
        return (
            <View  style={[styles.cardGeneric, styles.cardShadow, styles.cardSmall]}>
                <Text style={[styles.chartTitle]}>{chartTitles.testedCases}</Text>
                <Text style={[styles.indicatorValue, styles.indicatorValueBold]}>{latestUpdateData().testedCases}</Text>
                <Text style={[styles.indicatorValue, styles.indicatorValueIncr]}>{latestUpdateData().testedCasesVariation} ({latestUpdateData().testedCasesVariationPercentage}%)</Text>
            </View>
        );
    }
}