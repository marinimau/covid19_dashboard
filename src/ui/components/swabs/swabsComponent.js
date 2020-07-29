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
import CardSwab from "../../../drawings/resume_cards/cardSwab";
import CardTestedCases from "../../../drawings/swabs/cardTestedCases";
import {chartTitles} from "../../contents/strings";
import MyProgressCircle from "../../../drawings/example/progressCircle";
import LegendColors from "../../theme/legendColors";
import SwabData from "../../../logic/swabData";

class SwabsComponent extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <MainScrollableContents
                content={
                    <>
                        <CardSwab />

                        <CardTestedCases />

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardSmall]}>
                            <Text style={[styles.chartTitle]}>{chartTitles.swabPositiveRatio}</Text>
                            <MyProgressCircle value={SwabData().positiveRatio} color={LegendColors.blue}/>
                            <Text style={styles.chartDescription}>{chartTitles.swabPositiveRatioDescription}</Text>
                        </View>


                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardSmall]}>
                            <Text>Percentuale positivi individuati per sospetto vs screening</Text>
                        </View>


                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig]}>
                            <Text>Grafico andamento tamponi</Text>
                        </View>

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig]}>
                            <Text>Grafico andamento casi testati</Text>
                        </View>

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig]}>
                            <Text>Grafico andamento percentuale positivi</Text>
                        </View>
                    </>
                }
            />
        )
    }

}

export default SwabsComponent;
