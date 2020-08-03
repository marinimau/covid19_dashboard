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
import CardDied from "../../../drawings/resume_cards/cardDied";
import MyProgressCircle from "../../../drawings/charts/progressCircle";
import LegendColors from "../../theme/legendColors";
import {chartTitles} from "../../contents/strings";
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Colors from "../../theme/colors";
import DeathsData from "../../../logic/deathData";
import RecoveredData from "../../../logic/recoveredData";
import MyLineChart from "../../../drawings/charts/lineChart";

class DiedComponent extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <MainScrollableContents
                content={
                    <>
                        <CardDied />

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardSmall]}>
                            <Text style={[styles.chartTitle]}>{chartTitles.deathsRatio}</Text>
                            <MyProgressCircle value={DeathsData().deathsRatio} color={LegendColors.grey}/>
                            <Text style={styles.chartDescription}>{chartTitles.deathRatioDescription}</Text>
                        </View>

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig]}>
                            <Text style={[styles.chartTitle]}>{chartTitles.deathTrend}</Text>
                            <MyLineChart color={LegendColors.grey} data={DeathsData().diedTrendAbsolute} />
                        </View>

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig]}>
                            <Text style={[styles.chartTitle]}>{chartTitles.deathTrendDay}</Text>
                            <MyLineChart color={LegendColors.grey} data={DeathsData().diedTrendDayValue} />
                        </View>

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig]}>
                            <Text style={[styles.chartTitle]}>{chartTitles.deathTrendProportional}</Text>
                            <MyLineChart color={LegendColors.grey} decimalPlaces={2} data={DeathsData().diedTrendProportional} />
                        </View>
                    </>
                }
            />
        )
    }

}

export default DiedComponent;