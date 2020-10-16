/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 16/10/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import React from 'react';
import {useNavigation} from "@react-navigation/native";
import {Platform, Button, View} from "react-native";
import Colors from "../../theme/colors";
import {Appearance} from "react-native-appearance";
import darkMode from "../../theme/darkModeDetector";
import LegendColors from "../../theme/legendColors";

let colorScheme = Appearance.getColorScheme();

const HeaderRight = () => {
    const navigation = useNavigation();

    return (
        <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'row', marginRight: 15}}>
                <Button title={'Zona'} color={ Platform.OS === 'ios'? LegendColors.blue : darkMode() ? Colors.darkMode_icons : Colors.background} />
            </View>
        </View>
    );
};

export default HeaderRight;
