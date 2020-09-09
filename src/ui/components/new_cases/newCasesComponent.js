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
import {chartTitles, dataDescription} from "../../contents/strings";
import CardTotalCases from "../../../data_representation/resume_cards/cardTotalCases";
import LegendColors from "../../theme/legendColors";
import NewCasesData from "../../../logic/newCasesData";
import StackedAreaChart from "../../../data_representation/charts/stackedAreaChart";
import TotalCasesRepartitionData from "../../../logic/totalCasesRepartitionData";
import LineChartCard from "../cards/lineChartCard";


class NewCasesComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { data: NewCasesData(), color: LegendColors.red}
    }

    render() {
        return (
            <MainScrollableContents
                content={
                    <>
                        <CardTotalCases />

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardSmall]}>
                            <Text style={[styles.chartTitle]}>{chartTitles.r0value}</Text>
                            <Text style={[styles.chartTitle, styles.chartBigValue]}>{this.state.data.r0}</Text>
                            <Text style={styles.chartDescription}>{dataDescription.r0}</Text>
                        </View>

                        <LineChartCard
                            title={chartTitles.totalCasesCurve}
                            color={this.state.color}
                            data={this.state.data.newCasesTrendAbsolute}
                            description={dataDescription.totalCases} />

                        <LineChartCard
                            title={chartTitles.newCasesCurve}
                            color={this.state.color}
                            data={this.state.data.newCasesTrendDayValue}
                            description={dataDescription.newCases} />

                        <LineChartCard
                            title={chartTitles.r0Curve}
                            color={this.state.color}
                            data={this.state.data.r0Trend}
                            description={dataDescription.r0} />

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig]}>
                            <Text style={styles.chartTitle}>{chartTitles.totalCasesRepartion}</Text>
                            <StackedAreaChart
                                color={LegendColors.red}
                                keyValues={['death', 'current', 'recovered']}
                                legend={[chartTitles.recovered, chartTitles.currentPositive, chartTitles.died]}
                                data={TotalCasesRepartitionData().repartition}/>
                            <Text style={styles.chartDescription}>{dataDescription.totalCasesRepartition}</Text>
                        </View>
                    </>
                }
            />
        )
    }

}

export default NewCasesComponent;
