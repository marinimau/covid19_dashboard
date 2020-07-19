/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 19/07/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import React, {Component} from 'react';
import {Text, View} from "react-native";
import {styles} from "../../theme/style";

class LatestUpdateMainCard extends Component{

    constructor() {
        super();
    }

    render() {
        return (
            <View style={[styles.rootContainer]}>
                <View style={[styles.cardGeneric]}>
                    <Text>Resoconto pagina dati</Text>
                </View>
            </View>
        )
    }

}

export default LatestUpdateMainCard;
