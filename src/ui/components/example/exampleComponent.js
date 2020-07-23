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
import BarChart from "../../../drawings/general/axis";

class ExampleComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const data = [
            { label: 'Jan', value: 500 },
            { label: 'Feb', value: 312 },
            { label: 'Mar', value: 424 },
            { label: 'Apr', value: 745 },
            { label: 'May', value: 89 },
            { label: 'Jun', value: 434 },
            { label: 'Jul', value: 650 },
            { label: 'Aug', value: 980 },
            { label: 'Sep', value: 123 },
            { label: 'Oct', value: 186 },
            { label: 'Nov', value: 689 },
            { label: 'Dec', value: 643 }
        ]

        return (
            <MainScrollableContents
                content={
                    <>
                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardSmall]}>
                            <Text>Card numero</Text>
                        </View>

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardSmall]}>
                            <Text>Card torta</Text>
                        </View>

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig]}>
                            <Text>Curve</Text>
                        </View>

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig]}>
                            <Text>Aree sottese percentuale</Text>
                        </View>

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig]}>
                            <Text>Aree sottese assoluto</Text>
                        </View>

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig]}>
                            <Text style={styles.chartTitle}>Bar chart example</Text>
                            <BarChart data={data} round={100} unit="" />
                        </View>
                    </>
                }
            />
        )
    }

}

export default ExampleComponent;