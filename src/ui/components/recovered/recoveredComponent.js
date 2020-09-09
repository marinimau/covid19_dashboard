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
import CardRecovered from "../../../data_representation/resume_cards/cardRecovered";
import {chartTitles, dataDescription} from "../../contents/strings";
import MyProgressCircle from "../../../data_representation/charts/progressCircle";
import LegendColors from "../../theme/legendColors";
import RecoveredData from "../../../logic/recoveredData";
import MyLineChart from "../../../data_representation/charts/lineChart";
import RegionTable from "../../../data_representation/region_table/regionTable";
import RecoveredRegionData from "../../../logic/region/REGION_recovered";
import LineChartCard from "../cards/lineChartCard";

class RecoveredComponent extends Component {

    constructor() {
        super();
        this.state = {data: RecoveredData(), color: LegendColors.green}
    }

    render() {
        return (
            <MainScrollableContents
                content={
                    <>
                        <CardRecovered light={true} />

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardSmall]}>
                            <Text style={[styles.chartTitle]}>{chartTitles.recoveredPercentage}</Text>
                            <MyProgressCircle value={this.state.data.recoveredRatio} color={LegendColors.green}/>
                            <Text style={styles.chartDescription}>{chartTitles.recoveredPercentageDescription}</Text>
                        </View>

                        <LineChartCard
                            title={chartTitles.recoveredTrend}
                            color={this.state.color}
                            data={this.state.data.recoveredTrendAbsolute}
                            description={dataDescription.recoveredTotal} />

                        <LineChartCard
                            title={chartTitles.recoveredTrendDay}
                            color={this.state.color}
                            data={this.state.data.recoveredTrendDayValue}
                            description={dataDescription.recoveredVariation} />

                        <LineChartCard
                            title={chartTitles.recoveredTrendProportional}
                            color={this.state.color}
                            data={this.state.data.recoveredTrendProportional}
                            description={dataDescription.recoveredTrendProportional} />
                    </>
                }
            />
        )
    }

}

export default RecoveredComponent;