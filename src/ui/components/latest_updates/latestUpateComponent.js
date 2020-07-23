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

class LatestUpdateComponent extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <MainScrollableContents
                content={
                        <>
                            <View style={[styles.cardGeneric, styles.cardShadow, styles.cardSmall]}>
                                <Text>Nuovi Contagi e casi totali</Text>
                            </View>

                            <View style={[styles.cardGeneric, styles.cardShadow, styles.cardSmall]}>
                                <Text>Nuovi guariti e guariti totali</Text>
                            </View>

                            <View style={[styles.cardGeneric, styles.cardShadow, styles.cardSmall]}>
                                <Text>Nuovi decessi e decessi totali</Text>
                            </View>

                            <View style={[styles.cardGeneric, styles.cardShadow, styles.cardSmall]}>
                                <Text>Posivi attuali e incremento</Text>
                            </View>
                        </>
                }
            />
        )
    }

}

export default LatestUpdateComponent;
