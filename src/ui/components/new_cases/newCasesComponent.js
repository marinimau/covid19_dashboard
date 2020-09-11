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
                            <Text style={[styles.chartTitle]}>{chartTitles.r0value}</Text>
                            <Text style={[styles.chartTitle, styles.chartBigValue]}>{this.state.data.r0}</Text>
                            <Text style={styles.chartDescription}>{dataDescription.r0}</Text>
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

                        <LineChartCard
                            key={this.state.data}
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
            </MainScrollableContents>
        )
    }

}

export default NewCasesComponent;
