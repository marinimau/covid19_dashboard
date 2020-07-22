/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 18/07/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import {Dimensions} from "react-native";
import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {screenTitles} from "../contents/strings";
import HomeComponents from "../components/home/homeComponents";
import HeaderLeft from "../components/header/headerMenuButton";
import {dimens} from "../theme/dimens";

const Stack = createStackNavigator();
const dimensions = Dimensions.get('window').width;

function renderContent() {
}

function renderHeader() {

}

function HomeScreen({navigation}) {

    return (

        <Stack.Navigator>
            <Stack.Screen
                options={{
                    headerLeft: dimensions < dimens.largeScreen ? ({}) => <HeaderLeft/> : null
                }}
                component={({}) => <HomeComponents/>}
                name={screenTitles.home}
            />
        </Stack.Navigator>

    );
}

export default HomeScreen;

