/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 23/07/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import React, {Component} from 'react';
import {Text, View} from "react-native";
import {styles} from "../../theme/style";
import MainScrollableContents from "../mainScrollableContainer";
import {chartTitles, dataDescription} from "../../contents/strings";
import SvgExample from "../../../drawings/new_cases_charts/newCaseLine";
import CardTotalCases from "../../../drawings/resume_cards/cardTotalCases";
import CardRecovered from "../../../drawings/resume_cards/cardRecovered";
import CardDied from "../../../drawings/resume_cards/cardDied";
import CardCurrentPositive from "../../../drawings/resume_cards/cardCurrentPositive";

class ExampleComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <MainScrollableContents
                content={
                    <>
                        {/*<CardDate />*/}

                        <CardTotalCases />

                        <CardRecovered />

                        <CardDied />

                        <CardCurrentPositive />

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig]}>
                            <Text>Card torta</Text>
                        </View>

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig]}>
                            <Text>Curve</Text>
                            {/*<LineChartExample />*/}
                        </View>

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig]}>
                            <Text>Aree sottese percentuale</Text>
                        </View>

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig]}>
                            <Text>Aree sottese assoluto</Text>
                        </View>


                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig]}>
                            <Text style={styles.chartTitle}>{chartTitles.totalCasesCurve}</Text>
                            <SvgExample />
                            <Text style={styles.chartDescription}>{dataDescription.totalCases}</Text>
                        </View>
                    </>
                }
            />
        )
    }

}

export default ExampleComponent;