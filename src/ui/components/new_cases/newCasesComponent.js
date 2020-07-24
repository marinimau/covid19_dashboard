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

class NewCasesComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MainScrollableContents
                content={
                    <>
                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardSmall]}>
                            <Text>Nuovi Contagi e casi totali</Text>
                        </View>

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig]}>
                            <Text style={styles.chartTitle}>{chartTitles.totalCasesCurve}</Text>
                            <NewCasTotalChart />
                            <Text style={styles.chartDescription}>{dataDescription.totalCases}</Text>
                        </View>
                    </>
                }
            />
        )
    }

}

export default NewCasesComponent;
