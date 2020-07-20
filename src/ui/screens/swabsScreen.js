/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 18/07/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */


import {Dimensions} from "react-native";
import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {dimens} from "../theme/dimens";
import HeaderLeft from "../components/header/headerMenuButton";
import HomeComponents from "../components/home/homeComponents";
import {screenTitles} from "../contents/strings";
import SwabsComponent from "../components/swabs/swabsComponent";

const Stack = createStackNavigator();
const dimensions = Dimensions.get('window').width;

function SwabsResumeScreen({ navigation }) {

    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{
                    headerLeft: dimensions < dimens.largeScreen ? ({}) => <HeaderLeft /> : null
                }}
                component={({}) => <SwabsComponent />}
                name={screenTitles.swab}
            />
        </Stack.Navigator>
    );
}

export default SwabsResumeScreen;
