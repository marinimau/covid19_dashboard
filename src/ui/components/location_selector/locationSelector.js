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
import {View, StyleSheet} from "react-native";
import {chartTitles, uiButtons} from "../../contents/strings";


class LocationSelector extends Component {

    constructor(props) {
        super(props);
        this.state = {location: 0}
    }

    render() {
        return (
            <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig, {padding: 0}]}>
                <RNPickerSelect
                    placeholder={{value: 0, label: chartTitles.allItaly}}
                    items={RegionList}
                    onValueChange={(value) => this.setState({location: value})}
                    doneText={uiButtons.done}
                    style={[
                        pickerSelectStyles,
                        {iconContainer: {
                            top: 10,
                            right: 12,
                        }}
                    ]}
                    useNativeAndroidPickerStyle={false}
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
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
});

export default LocationSelector;