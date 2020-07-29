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
import NewCasTotalChart from "../../../drawings/new_cases_charts/newCaseTotal";
import {chartTitles, dataDescription} from "../../contents/strings";
import CardTotalCases from "../../../drawings/resume_cards/cardTotalCases";
import LineChartExample from "../../../drawings/example/lineChartExample";

class NewCasesComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MainScrollableContents
                content={
                    <>
                        <CardTotalCases />

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig]}>
                            <Text style={styles.chartTitle}>Area sottesa ripartizione casi</Text>
                            <Text style={styles.chartDescription}>Ancora positivi, guariti, deceduti</Text>
                        </View>

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig]}>
                            <Text style={styles.chartTitle}>{chartTitles.totalCasesCurve}</Text>

                            <Text style={styles.chartDescription}>{dataDescription.totalCases}</Text>
                        </View>

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig]}>
                            <Text style={styles.chartTitle}>{chartTitles.newCasesCurve}</Text>
                            <Text style={styles.chartDescription}>{dataDescription.newCases}</Text>
                        </View>
                    </>
                }
            />
        )
    }

}

export default NewCasesComponent;
