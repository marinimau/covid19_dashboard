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
import CardCurrentPositive from "../../../data_representation/resume_cards/cardCurrentPositive";
import {chartTitles, dataDescription} from "../../contents/strings";
import MyProgressCircle from "../../../data_representation/charts/progressCircle";
import LegendColors from "../../theme/legendColors";
import CurrentPositiveData from "../../../logic/currentPositiveData";
import PositiveDeltaData from "../../../logic/positiveDeltaData";
import CardHomeQuarantine from "../../../data_representation/resume_cards/cardHomeQuarantine";
import CardHospitalizedWithSymptoms from "../../../data_representation/resume_cards/cardHospitalizedWithSymptoms";
import CardCritical from "../../../data_representation/resume_cards/cardCritical";
import StackedAreaChart from "../../../data_representation/charts/stackedAreaChart";
import PositiveRepartitionData from "../../../logic/positiveRepartitionData";
import LineChartCard from "../cards/lineChartCard";

class CurrentPositiveComponent extends Component {

    constructor() {
        super();
        this.state = {data: PositiveDeltaData(), color: LegendColors.yellow}
    }

    render() {
        return (
            <MainScrollableContents>
                <>
                    <CardCurrentPositive />

                    <View style={[styles.cardGeneric, styles.cardShadow, styles.cardSmall]}>
                        <Text style={[styles.chartTitle]}>{chartTitles.currentPositivePercentage}</Text>
                        <MyProgressCircle value={CurrentPositiveData().positiveRatio} color={LegendColors.yellow}/>
                        <Text style={styles.chartDescription}>{chartTitles.positivePercentageDescription}</Text>
                    </View>

                    <View style={[styles.cardGeneric, styles.cardShadow, styles.cardSmall]}>
                        <Text style={[styles.chartTitle]}>{chartTitles.positiveCasesAreaPercentage}</Text>
                        <MyProgressCircle value={this.state.data.percentageOfTotal} color={LegendColors.yellow}/>
                        <Text style={styles.chartDescription}>{chartTitles.positiveCasesAreaPercentage}</Text>
                    </View>

                    <LineChartCard
                        title={chartTitles.positiveTrendAbsolute}
                        color={this.state.color}
                        data={this.state.data.deltaTrendAbsolute}
                        description={dataDescription.positiveTotal} />

                    <LineChartCard
                        title={chartTitles.positiveTrendVariation}
                        color={this.state.color}
                        data={this.state.data.deltaTrendDayVariation}
                        description={dataDescription.positiveVariation} />

                    <CardHomeQuarantine />

                    <CardHospitalizedWithSymptoms />

                    <CardCritical />

                    <LineChartCard
                        title={chartTitles.criticalTrendAbsolute}
                        color={this.state.color}
                        data={this.state.data.criticalTrendAbsolute}
                        description={dataDescription.criticalTrendAbsolute} />

                    <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig]}>
                        <Text style={styles.chartTitle}>{chartTitles.positiveRepartitionAbsolute}</Text>
                        <StackedAreaChart
                            color={LegendColors.yellow}
                            keyValues={['critical', 'hospitalized', 'homeQuarantine']}
                            legend={[chartTitles.positiveHomeQuarantine, chartTitles.hospitalizedWithSymptoms, chartTitles.critical]}
                            data={PositiveRepartitionData().repartitionAbsolute}/>
                        <Text style={styles.chartDescription}>{dataDescription.positiveRepartitionAbsolute}</Text>
                    </View>

                    <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig]}>
                        <Text style={styles.chartTitle}>{chartTitles.positiveRepartitionPercentage}</Text>
                        <StackedAreaChart
                            color={LegendColors.yellow}
                            keyValues={['critical', 'hospitalized', 'homeQuarantine']}
                            legend={[chartTitles.positiveHomeQuarantine, chartTitles.hospitalizedWithSymptoms, chartTitles.critical]}
                            data={PositiveRepartitionData().repartitionPercentage}/>
                        <Text style={styles.chartDescription}>{dataDescription.positiveRepartitionPercentage}</Text>
                    </View>
                </>
            </MainScrollableContents>
        )
    }

}

export default CurrentPositiveComponent;
