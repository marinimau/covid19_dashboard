/**
 * covid19_dashboard copyright © 2021
 * Created by mauromarini on 06/05/21
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import React, {Component} from 'react';
import {styles} from "../../ui/theme/style";
import {Text, View} from "react-native";
import {chartTitles} from "../../ui/contents/strings";
import latestUpdateData from "../../logic/latestUpdateData";
import Colors from "../../ui/theme/colors";

export default class CardRapidSwabsSwabs extends Component{

    render() {
        return (
            <View  style={[styles.cardGeneric, styles.cardShadow, styles.cardSmall]}>
                <Text style={[styles.chartTitle]}>{chartTitles.rapidSwabs}</Text>
                <Text style={[styles.indicatorValue, styles.indicatorValueBold]}>{latestUpdateData().rapidTestCumulative}</Text>
                <Text style={[styles.indicatorValue, styles.indicatorValueIncr]}>{latestUpdateData().rapidTestVariation} ({latestUpdateData().rapidTestVariationPercentage}%)</Text>
            </View>
        );
    }
}