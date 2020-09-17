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
import {EventRegister} from "react-native-event-listeners";
import MyProgressCircle from "../../../data_representation/charts/progressCircle";

let dataChangedListener;

class NewCasesComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { data: NewCasesData(), color: LegendColors.red, value: 0}
    }

    componentDidMount() {
        dataChangedListener = EventRegister.addEventListener('locationChanged', (data) => {
            this.updateData();
        });
    }

    componentWillUnmount() {
        EventRegister.removeEventListener(dataChangedListener)
    }

    updateData(){
        this.setState({data: NewCasesData()});
    }

    render() {
        return (
            <MainScrollableContents>
                    <>
                        <CardTotalCases />

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardSmall]}>
                            <Text style={[styles.chartTitle]}>{chartTitles.totalCasesPercentage}</Text>
                            <MyProgressCircle value={this.state.data.percentageOfTotal} color={LegendColors.red}/>
                            <Text style={styles.chartDescription}>{dataDescription.totalCasesPercentage}</Text>
                        </View>

                        <LineChartCard
                            key={this.state.data}
                            title={chartTitles.totalCasesCurve}
                            color={this.state.color}
                            data={this.state.data.newCasesTrendAbsolute}
                            description={dataDescription.totalCases} />

                        <LineChartCard
                            key={this.state.data}
                            title={chartTitles.newCasesCurve}
                            color={this.state.color}
                            data={this.state.data.newCasesTrendDayValue}
                            description={dataDescription.newCases} />


                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig]}>
                            <Text style={styles.chartTitle}>{chartTitles.totalCasesRepartionAbsolute}</Text>
                            <StackedAreaChart
                                color={LegendColors.red}
                                keyValues={['death', 'current', 'recovered']}
                                legend={[chartTitles.recovered, chartTitles.currentPositive, chartTitles.died]}
                                data={TotalCasesRepartitionData().repartition}/>
                            <Text style={styles.chartDescription}>{dataDescription.totalCasesRepartitionAbsolute}</Text>
                        </View>

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig]}>
                            <Text style={styles.chartTitle}>{chartTitles.totalCasesRepartionPercentage}</Text>
                            <StackedAreaChart
                                color={LegendColors.red}
                                keyValues={['death', 'current', 'recovered']}
                                legend={[chartTitles.recovered, chartTitles.currentPositive, chartTitles.died]}
                                data={TotalCasesRepartitionData().repartitionPercentage}/>
                            <Text style={styles.chartDescription}>{dataDescription.totalCasesRepartitionPercentage}</Text>
                        </View>
                    </>
            </MainScrollableContents>
        )
    }

}

export default NewCasesComponent;
