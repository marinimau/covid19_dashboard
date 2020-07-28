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
import MyProgressCircle from "../../../drawings/example/progressCircle";
import LegendColors from "../../theme/legendColors";
import {chartTitles} from "../../contents/strings";
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Colors from "../../theme/colors";
import DeathsData from "../../../logic/deathData";

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
                        </View>

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig]}>
                            <Text>Grafico andamento morti (valore assoluto)</Text>
                        </View>

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig]}>
                            <Text>Grafico andamento morti (valore giornaliero)</Text>
                        </View>

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig]}>
                            <Text>Grafico andamento percentuale morti rispetto ai casi totali</Text>
                        </View>
                    </>
                }
            />
        )
    }

}

export default DiedComponent;