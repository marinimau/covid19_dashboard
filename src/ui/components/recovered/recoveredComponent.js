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

class RecoveredComponent extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <MainScrollableContents
                content={
                    <>
                        <CardRecovered light={true} />

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardSmall]}>
                            <Text style={[styles.chartTitle]}>{chartTitles.recoveredPercentage}</Text>
                            <MyProgressCircle value={RecoveredData().recoveredRatio} color={LegendColors.green}/>
                            <Text style={styles.chartDescription}>{chartTitles.recoveredPercentageDescription}</Text>
                        </View>

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig]}>
                            <Text style={[styles.chartTitle]}>{chartTitles.recoveredTrend}</Text>
                            <MyLineChart color={LegendColors.green} data={RecoveredData().recoveredTrendAbsolute} />
                            <Text style={styles.chartDescription}>{dataDescription.recoveredTotal}</Text>
                        </View>

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig]}>
                            <Text style={[styles.chartTitle]}>{chartTitles.recoveredTrendDay}</Text>
                            <MyLineChart color={LegendColors.green} data={RecoveredData().recoveredTrendDayValue} />
                            <Text style={styles.chartDescription}>{dataDescription.recoveredVariation}</Text>
                        </View>

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig]}>
                            <Text style={[styles.chartTitle]}>{chartTitles.recoveredTrendProportional}</Text>
                            <MyLineChart color={LegendColors.green} data={RecoveredData().recoveredTrendProportional} />
                            <Text style={styles.chartDescription}>{dataDescription.recoveredTrendProportional}</Text>
                        </View>

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig]}>
                            <Text style={styles.chartTitle}>{chartTitles.totalCasesRegion}</Text>
                            <RegionTable
                                data={RecoveredRegionData()}
                            />
                        </View>
                    </>
                }
            />
        )
    }

}

export default RecoveredComponent;