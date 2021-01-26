/**
 * covid19_dashboard copyright © 2021
 * Created by mauromarini on 26/01/2021
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import React, {Component} from 'react';
import {Text, View, Switch} from "react-native";
import {styles} from "../../theme/style";
import MainScrollableContents from "../mainScrollableContainer";
import {chartTitles, dataDescription} from "../../contents/strings";
import LegendColors from "../../theme/legendColors";
import StackedAreaChart from "../../../data_representation/charts/stackedAreaChart";
import TotalCasesRepartitionData from "../../../logic/totalCasesRepartitionData";
import PositiveRepartitionData from "../../../logic/positiveRepartitionData";
import Colors from "../../theme/colors";

class RepartitionComponent extends Component {

    constructor() {
        super();
        this.state = {
            percentageForTotal: false,
            percentageForCurrent: false,
            color: LegendColors.neutral,
            totalChartTitle: chartTitles.totalCasesRepartionAbsolute,
            totalChartDescription: dataDescription.totalCasesRepartitionAbsolute,
            positiveChartTitle: chartTitles.positiveRepartitionAbsolute,
            positiveChartDescription: dataDescription.positiveRepartitionAbsolute
        }
    }

    totalSwitchChange(){
        if(!this.state.percentageForTotal){
            this.setState({
                percentageForTotal: true,
                totalChartTitle: chartTitles.totalCasesRepartionPercentage,
                totalChartDescription: dataDescription.totalCasesRepartitionPercentage
            })
        }
        else {
            this.setState({
                percentageForTotal: false,
                totalChartTitle: chartTitles.totalCasesRepartionAbsolute,
                totalChartDescription: dataDescription.totalCasesRepartitionAbsolute
            })
        }

    }

    positiveSwitchChange(){
        if(!this.state.percentageForCurrent){
            this.setState({
                percentageForCurrent: true,
                positiveChartTitle: chartTitles.positiveRepartitionPercentage,
                positiveChartDescription: dataDescription.positiveRepartitionPercentage
            })
        }
        else {
            this.setState({
                percentageForCurrent: false,
                positiveChartTitle: chartTitles.positiveRepartitionAbsolute,
                positiveChartDescription: dataDescription.totalCasesRepartitionAbsolute
            })
        }

    }

    render() {
        return (
            <MainScrollableContents>

                <>
                    <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig]}>
                        <Text style={styles.chartTitle}>{this.state.totalChartTitle}</Text>
                        <View style={[{flexDirection: "row"}]}>
                            <Text style={[styles.chartManipulationDescription]}>
                                {dataDescription.showPercentage}
                            </Text>
                            <Switch
                                key={3}
                                style={{marginLeft: 6}}
                                onValueChange={() => this.totalSwitchChange()}
                                value={this.state.percentageForTotal}
                            />
                        </View>
                        {
                            this.state.percentageForTotal ?
                                <StackedAreaChart
                                    key={0}
                                    color={LegendColors.neutral}
                                    colors={[LegendColors.grey, LegendColors.yellow, LegendColors.green]}
                                    keyValues={['death', 'current', 'recovered']}
                                    legend={[chartTitles.recovered, chartTitles.currentPositive, chartTitles.died]}
                                    data={TotalCasesRepartitionData().repartitionPercentage}/>
                                :
                                <StackedAreaChart
                                    key={1}
                                    color={LegendColors.neutral}
                                    colors={[LegendColors.grey, LegendColors.yellow, LegendColors.green]}
                                    keyValues={['death', 'current', 'recovered']}
                                    legend={[chartTitles.recovered, chartTitles.currentPositive, chartTitles.died]}
                                    data={TotalCasesRepartitionData().repartition}/>

                        }
                        <Text style={styles.chartDescription}>{this.state.totalChartDescription}</Text>
                    </View>

                    <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig]}>
                        <Text style={styles.chartTitle}>{this.state.positiveChartTitle}</Text>
                        <View style={[{flexDirection: "row"}]}>
                            <Text style={[styles.chartManipulationDescription]}>
                                {dataDescription.showPercentage}
                            </Text>
                            <Switch
                                key={4}
                                style={{marginLeft: 6}}
                                onValueChange={() => this.positiveSwitchChange()}
                                value={this.state.percentageForCurrent}
                            />
                        </View>

                        {
                            this.state.percentageForCurrent ?
                                <StackedAreaChart
                                    key={0}
                                    color={LegendColors.neutral}
                                    colors={[LegendColors.purple, LegendColors.orange, LegendColors.teal]}
                                    keyValues={['critical', 'hospitalized', 'homeQuarantine']}
                                    legend={[chartTitles.positiveHomeQuarantine, chartTitles.hospitalizedWithSymptoms, chartTitles.critical]}
                                    data={PositiveRepartitionData().repartitionPercentage}/>
                                :
                                <StackedAreaChart
                                    key={1}
                                    color={LegendColors.neutral}
                                    colors={[LegendColors.purple, LegendColors.orange, LegendColors.teal]}
                                    keyValues={['critical', 'hospitalized', 'homeQuarantine']}
                                    legend={[chartTitles.positiveHomeQuarantine, chartTitles.hospitalizedWithSymptoms, chartTitles.critical]}
                                    data={PositiveRepartitionData().repartitionAbsolute}/>

                        }
                        <Text style={styles.chartDescription}>{this.state.positiveChartDescription}</Text>
                    </View>
                </>

            </MainScrollableContents>
        )
    }

}

export default RepartitionComponent;