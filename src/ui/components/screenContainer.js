/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 29/07/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import {Dimensions, Platform} from "react-native";
import React, {Component} from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {dimens} from "../theme/dimens";
import HeaderLeft from "../components/header/headerMenuButton";
import {styles} from "../theme/style";
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import {RegionList} from "../contents/locationsList";
import SelectedLocation from "../../logic/selectedLocation";

const Stack = createStackNavigator();
const dimensions = Dimensions.get('window').width;

export default class ScreenContainer extends Component  {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    options={{
                        headerStyle: [styles.header, styles.headerShadow, {borderBottomColor: 'transparent'}],
                        headerLeft: dimensions < dimens.largeScreen ? ({}) => <HeaderLeft /> : null
                    }}
                    component={({}) => this.props.component}
                    name={this.props.title + ' > ' + RegionList[SelectedLocation.getLocation()].label}
                />
            </Stack.Navigator>

        );
    }


}


