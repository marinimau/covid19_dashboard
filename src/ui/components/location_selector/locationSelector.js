/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 30/08/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import React, {Component} from 'react';
import {RegionList} from "../../contents/locationsList";
import RNPickerSelect from 'react-native-picker-select';
import {styles} from "../../theme/style";
import {View, StyleSheet, Platform} from "react-native";
import {chartTitles, uiButtons} from "../../contents/strings";
import Colors from "../../theme/colors";
import SelectedLocation from "../../../logic/selectedLocation";
import darkMode from "../../theme/darkModeDetector";
import {SYSTEM_FONT_STACK} from "react-native-web/dist/exports/StyleSheet/constants";


class LocationSelector extends Component {

    constructor(props) {
        super(props);
        this.state = {location: SelectedLocation.getLocation()}
    }

    render() {
        return (
            <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig, {
                backgroundColor: darkMode() ? Colors.darkMode_basicNotes : Colors.basicElevation,
                padding: 0
            }]}>
                <RNPickerSelect
                    items={RegionList}
                    placeholder={{value: 0, label: chartTitles.locationSelectorPlaceholder}}
                    onValueChange={(value) => {
                        this.setState({location: value});
                        SelectedLocation.setLocation(value);
                    }}
                    doneText={uiButtons.done}
                    style={pickerSelectStyles}
                    fixAndroidTouchableBug={true}
                    useNativeAndroidPickerStyle={false}
                />
            </View>
        );
    }
}

const pickerSelectStyles = StyleSheet.create({
    inputWeb: {
        fontSize: 16,
        borderWidth: 0,
        backgroundColor: darkMode() ? 'transparent' :Colors.basicElevation,
        fontFamily: SYSTEM_FONT_STACK,
        color: (darkMode() ? Colors.darkMode_basic : Colors.basic),
    },
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 0,
        backgroundColor: 'transparent',
        color: (darkMode() ? Colors.darkMode_basic : Colors.basic),
        paddingRight: 30,
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0,
        borderRadius: 8,
        color: 'transparent',
        paddingRight: 30,
    },
});

export default LocationSelector;