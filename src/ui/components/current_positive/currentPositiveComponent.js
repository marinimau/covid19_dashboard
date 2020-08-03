/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 19/07/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import React, {Component} from 'react';
import {Text, View} from "react-native";
import {styles} from "../../theme/style";
import MainScrollableContents from "../mainScrollableContainer";
import CardCurrentPositive from "../../../drawings/resume_cards/cardCurrentPositive";
import {chartTitles} from "../../contents/strings";
import MyProgressCircle from "../../../drawings/charts/progressCircle";
import LegendColors from "../../theme/legendColors";
import CurrentPositiveData from "../../../logic/currentPositiveData";
import MyLineChart from "../../../drawings/charts/lineChart";
import PositiveDeltaData from "../../../logic/positiveDeltaData";
import CardHomeQuarantine from "../../../drawings/resume_cards/cardHomeQuarantine";
import CardHospitalizedWithSymptoms from "../../../drawings/resume_cards/cardHospitalizedWithSymptoms";
import CardCritical from "../../../drawings/resume_cards/cardCritical";
import MyStackedBarChart from "../../../drawings/charts/stackedAreaChart";

class CurrentPositiveComponent extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <MainScrollableContents
                content={
                    <>
                        <CardCurrentPositive />

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardSmall]}>
                            <Text style={[styles.chartTitle]}>{chartTitles.currentPositivePercentage}</Text>
                            <MyProgressCircle value={CurrentPositiveData().positiveRatio} color={LegendColors.yellow}/>
                            <Text style={styles.chartDescription}>{chartTitles.positivePercentageDescription}</Text>
                        </View>

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig]}>
                            <Text style={styles.chartTitle}>{chartTitles.positiveTrendAbsolute}</Text>
                            <MyLineChart color={LegendColors.yellow} data={PositiveDeltaData().deltaTrendAbsolute} />
                        </View>

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig]}>
                            <Text style={styles.chartTitle}>{chartTitles.positiveTrendVariation}</Text>
                            <MyLineChart color={LegendColors.yellow} data={PositiveDeltaData().deltaTrendDayVariation} />
                        </View>

                        <CardHomeQuarantine />

                        <CardHospitalizedWithSymptoms />

                        <CardCritical />

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig]}>
                            <Text style={styles.chartTitle}>{chartTitles.positiveRepartition}</Text>
                            <MyStackedBarChart
                                data={[
                                    PositiveDeltaData().criticalPercentage,
                                    PositiveDeltaData().hospitalizedPercentage,
                                    PositiveDeltaData().homeQuarantinePercentage,
                                ]}
                                legend={[chartTitles.critical, chartTitles.hospitalizedWithSymptoms, chartTitles.positiveHomeQuarantine]}
                                color={LegendColors.yellow} />
                        </View>

                    </>
                }
            />
        )
    }

}

export default CurrentPositiveComponent;
