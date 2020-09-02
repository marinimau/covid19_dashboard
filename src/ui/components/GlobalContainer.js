/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 02/09/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import React, {Component} from 'react';
import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native";
import {navigationRef} from "../../utils/rootNavigationRef";
import {styles} from "../theme/style";
import Colors from "../theme/colors";
import {dimens} from "../theme/dimens";
import {screenTitles} from "../contents/strings";
import LatestUpdateResumeScreen from "../screens/latestUpdateResumeScreen";
import NewCasesScreen from "../screens/newCasesScreen";
import CurrentPositiveScreen from "../screens/currentPositiveScreen";
import RecoveredScreen from "../screens/recoveredScreen";
import SwabsResumeScreen from "../screens/swabsScreen";
import DiedScreen from "../screens/diedScreen";
import InfoScreen from "../screens/infoScreen";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {Dimensions} from "react-native";


const Drawer = createDrawerNavigator();

const dimensions = Dimensions.get('window').width;

const isLargeScreen = dimensions >= dimens.largeScreen;

export default class GlobalContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <StatusBar/>
                <NavigationContainer
                    ref={navigationRef}
                    style={styles.root}>
                    <Drawer.Navigator
                        initialRouteName="Resume"
                        drawerContentOptions={{
                            activeTintColor: Colors.drawerSelectedText,
                            activeBackgroundColor: Colors.drawerSelectedBackground,
                        }}
                        drawerType={isLargeScreen ? 'permanent' : 'front'}
                        drawerStyle={isLargeScreen ? {width: dimens.drawerWidth} : [{width: dimens.drawerWidth}]}
                        overlayColor={isLargeScreen ? "transparent" : Colors.basicTransparent}>

                        <Drawer.Screen name={screenTitles.latestUpdateResume}
                                       component={LatestUpdateResumeScreen}/>
                        <Drawer.Screen name={screenTitles.newCases} component={NewCasesScreen}/>
                        <Drawer.Screen name={screenTitles.currentPositive}
                                       component={CurrentPositiveScreen}/>
                        <Drawer.Screen name={screenTitles.recovered} component={RecoveredScreen}/>
                        <Drawer.Screen name={screenTitles.swab} component={SwabsResumeScreen}/>
                        <Drawer.Screen name={screenTitles.died} component={DiedScreen}/>
                        <Drawer.Screen name={screenTitles.info} component={InfoScreen}/>

                    </Drawer.Navigator>
                </NavigationContainer>
            </>
        );
    }
}