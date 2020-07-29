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
import CardRecovered from "../../../drawings/resume_cards/cardRecovered";
import {chartTitles} from "../../contents/strings";
import MyProgressCircle from "../../../drawings/example/progressCircle";
import LegendColors from "../../theme/legendColors";
import RecoveredData from "../../../logic/recoveredData";

class RecoveredComponent extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <MainScrollableContents
                content={
                    <>
                        <CardRecovered />

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardSmall]}>
                            <Text style={[styles.chartTitle]}>{chartTitles.recoveredPercentage}</Text>
                            <MyProgressCircle value={RecoveredData().recoveredRatio} color={LegendColors.green}/>
                            <Text style={styles.chartDescription}>{chartTitles.recoveredPercentageDescription}</Text>
                        </View>

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig]}>
                            <Text>Grafico andamento guariti (valore assoluto)</Text>
                        </View>

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig]}>
                            <Text>Grafico andamento guariti (valore giornaliero)</Text>
                        </View>

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig]}>
                            <Text>Grafico andamento percentuale guariti rispetto ai casi totali</Text>
                        </View>
                    </>
                }
            />
        )
    }

}

export default RecoveredComponent;