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
import {uiButtons} from "../../contents/strings";
import Colors from "../../theme/colors";
import SelectedLocation from "../../../logic/selectedLocation";


class LocationSelector extends Component {

    constructor(props) {
        super(props);
        this.state = {location: SelectedLocation.getLocation()}
    }

    render() {
        return (
            <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig, {padding: 0}]}>
                <RNPickerSelect
                    items={RegionList}
                    onValueChange={(value) => {
                        this.setState({location: value} );
                        SelectedLocation.setLocation(value);
                    }}
                    doneText={uiButtons.done}
                    style={pickerSelectStyles}
                    useNativeAndroidPickerStyle={true}
                />
            </View>
        );
    }
}

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 0,
        color: Colors.basic,
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0,
        borderRadius: 8,
        color: Colors.basic,
        paddingRight: 30, // to ensure the text is never behind the icon
    },
});

export default LocationSelector;