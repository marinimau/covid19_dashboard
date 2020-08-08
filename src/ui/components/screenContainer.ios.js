/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 07/08/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import {Dimensions} from "react-native";
import React, {Component} from "react";
import {dimens} from "../theme/dimens";
import HeaderLeft from "../components/header/headerMenuButton";
import {styles} from "../theme/style";
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

const Stack = createNativeStackNavigator();
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
                        headerLargeTitle: true,
                        headerLargeTitleHideShadow: true,
                        headerStyle: [styles.header, styles.headerShadow, {borderBottomColor: 'transparent'}],
                        stackPresentation: 'transparentModal',
                        headerLeft: dimensions < dimens.largeScreen ? ({}) => <HeaderLeft /> : null
                    }}
                    component={({}) => this.props.component}
                    name={this.props.title}
                />
            </Stack.Navigator>

        );
    }


}