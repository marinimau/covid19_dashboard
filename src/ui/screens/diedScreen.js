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
import {screenTitles} from "../contents/strings";
import DiedComponent from "../components/died/diedComponent";
import {styles} from "../theme/style";

const Stack = createStackNavigator();
const dimensions = Dimensions.get('window').width;

function DiedScreen({ navigation }) {

    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{
                    headerStyle: [styles.header, styles.headerShadow],
                    headerLeft: dimensions < dimens.largeScreen ? ({}) => <HeaderLeft /> : null
                }}
                component={({}) => <DiedComponent />}
                name={screenTitles.died}
            />
        </Stack.Navigator>
    );
}

export default DiedScreen;
