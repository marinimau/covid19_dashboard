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
import CardSwab from "../../../data_representation/resume_cards/cardSwab";
import CardTestedCases from "../../../data_representation/resume_cards/cardTestedCases";
import {chartTitles, dataDescription} from "../../contents/strings";
import MyProgressCircle from "../../../data_representation/charts/progressCircle";
import LegendColors from "../../theme/legendColors";
import SwabData from "../../../logic/swabData";
import LineChartCard from "../cards/lineChartCard";

class SwabsComponent extends Component {

    constructor() {
        super();
        this.state = {data: SwabData(), color: LegendColors.blue}
    }

    render() {
        return (
            <MainScrollableContents>

                <>
                    <CardSwab />

                    <CardTestedCases />

                    <View style={[styles.cardGeneric, styles.cardShadow, styles.cardSmall]}>
                        <Text style={[styles.chartTitle]}>{chartTitles.swabPositiveRatio}</Text>
                        <MyProgressCircle value={SwabData().positiveRatio} color={LegendColors.blue}/>
                        <Text style={styles.chartDescription}>{chartTitles.swabPositiveRatioDescription}</Text>
                    </View>


                    <View style={[styles.cardGeneric, styles.cardShadow, styles.cardSmall]}>
                        <Text style={[styles.chartTitle]}>{chartTitles.positiveByScreening}</Text>
                        <MyProgressCircle value={SwabData().positiveByScreening} color={LegendColors.blue}/>
                        <Text style={styles.chartDescription}>{dataDescription.screening}</Text>
                    </View>


                    <LineChartCard
                        title={chartTitles.swabTrend}
                        color={this.state.color}
                        data={this.state.data.swabTrendAbsolute}
                        description={dataDescription.swapTrend} />

                    <LineChartCard
                        title={chartTitles.swabTrendVariation}
                        color={this.state.color}
                        data={this.state.data.swabTrendVariation}
                        description={dataDescription.swabTrendVariation} />

                    <LineChartCard
                        title={chartTitles.testedCaseTrend}
                        color={this.state.color}
                        data={this.state.data.testedCasesTrendAbsolute}
                        description={dataDescription.testedCaseTrend} />

                    <LineChartCard
                        title={chartTitles.testedCasesTrendVariation}
                        color={this.state.color}
                        data={this.state.data.testedCasesTrendVariation}
                        description={dataDescription.testedCasesTrendVariation} />

                    <LineChartCard
                        title={chartTitles.testedAndPositive}
                        color={this.state.color}
                        data={this.state.data.percentagePositiveTrend}
                        description={dataDescription.percentagePositiveTrend} />
                </>
            </MainScrollableContents>
        )
    }

}

export default SwabsComponent;
