/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 18/07/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import React, {Component} from 'react';
import {Text, View} from "react-native";
import {styles} from "../../theme/style";

class HomeComponents extends Component{

    constructor() {
        super();
    }

    render() {
        return (
            <View style={[{ flex: 1, alignItems: 'center', justifyContent: 'center' }, styles.root]}>
                <Text>under construction</Text>
            </View>
        )
    }

}

export default HomeComponents;