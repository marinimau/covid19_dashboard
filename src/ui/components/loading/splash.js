/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 18/07/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import React, {Component} from 'react';
import {View, Text} from "react-native";
import {styles} from "../../theme/style";
import {loadingMessages} from "../../contents/strings";


class LoadingScreen extends Component{

    constructor() {
        super();
    }

    render() {
        return (
            <View style={[{ flex: 1, alignItems: 'center', justifyContent: 'center' }, styles.loading]}>
                <Text>{loadingMessages.loading}</Text>
            </View>
        )
    }
}

export default LoadingScreen;
