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
import CardCurrentPositive from "../../../drawings/resume_cards/cardCurrentPositive";

class CurrentPositiveComponent extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <MainScrollableContents
                content={
                    <>
                        <CardCurrentPositive />

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig]}>
                            <Text>Grafico andamento incremento positivi</Text>
                        </View>

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardSmall]}>
                            <Text>Isolamento domiciliare, valore incremento e percentuale</Text>
                        </View>

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardSmall]}>
                            <Text>ricoverati con sintomi, valore, incremento e percentuale</Text>
                        </View>

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardSmall]}>
                            <Text>terapia intensiva, valore incremento e percentuale</Text>
                        </View>

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig]}>
                            <Text>Area sottesa delle 3 categorie (valore assoluto)</Text>
                        </View>

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig]}>
                            <Text>Area sottesa delle 3 categorie (valore percentuale)</Text>
                        </View>
                    </>
                }
            />
        )
    }

}

export default CurrentPositiveComponent;
