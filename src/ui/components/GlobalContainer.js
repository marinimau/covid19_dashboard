/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 02/09/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import React, {PureComponent} from 'react';
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
import RepartitionScreen from "../screens/dataRepartitionScreen";
import InfoScreen from "../screens/infoScreen";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {Dimensions} from "react-native";
import {Appearance, AppearanceProvider} from 'react-native-appearance';
import { Updates } from 'expo';

/* Data */
import DataRouter from "../../logic/dataRouter";
import NewCasesData from "../../logic/newCasesData";

const Drawer = createDrawerNavigator();

const dimensions = Dimensions.get('window').width;

const isLargeScreen = dimensions >= dimens.largeScreen;

let colorScheme = Appearance.getColorScheme();

let subscription, screenChange;

export default class GlobalContainer extends PureComponent {


    constructor(props) {
        super(props);
    }

    componentWillMount() {
        subscription = Appearance.addChangeListener(({ colorScheme }) => {
            Updates.reload();
        });
        screenChange = Dimensions.addEventListener("change", ({window, screen})=>{
            Updates.reload();
        });
    }

    componentWillUnmount() {
        subscription.remove();
        screenChange.remove();
    }

    render() {
        return (
            <AppearanceProvider>
                <StatusBar/>
                <NavigationContainer
                    ref={navigationRef}
                    style={styles.root}>
                    <Drawer.Navigator
                        initialRouteName="Resume"
                        drawerContentOptions={{
                            activeTintColor: colorScheme === 'dark' ? Colors.darkMode_drawerSelectedText : Colors.drawerSelectedText,
                            inactiveTintColor: colorScheme === 'dark' ? Colors.darkMode_navigationInactive : Colors.navigationInactive,
                            activeBackgroundColor: colorScheme === 'dark' ? Colors.darkMode_drawerSelectedBackground : Colors.drawerSelectedBackground,
                            drawerBackgroundColor: colorScheme === 'dark' ? Colors.darkMode_basicElevation : Colors.basicElevation,
                        }}
                        drawerType={isLargeScreen ? 'permanent' : 'front'}
                        drawerStyle={[{width: dimens.drawerWidth, borderRightColor: colorScheme === 'dark' ? Colors.darkMode_basicTransparent : Colors.basicTransparent,
                            backgroundColor: colorScheme === 'dark' ? Colors.darkMode_basicElevation : Colors.basicElevation}]}
                        overlayColor={isLargeScreen ? "transparent" : Colors.navigationOverlay}>

                        <Drawer.Screen name={screenTitles.latestUpdateResume}
                                       component={LatestUpdateResumeScreen}/>
                        <Drawer.Screen name={screenTitles.newCases} component={NewCasesScreen}/>
                        <Drawer.Screen name={screenTitles.currentPositive}
                                       component={CurrentPositiveScreen}/>
                        <Drawer.Screen name={screenTitles.recovered} component={RecoveredScreen}/>
                        <Drawer.Screen name={screenTitles.swab} component={SwabsResumeScreen}/>
                        <Drawer.Screen name={screenTitles.died} component={DiedScreen}/>
                        <Drawer.Screen name={screenTitles.repartition} component={RepartitionScreen} />
                        <Drawer.Screen name={screenTitles.info} component={InfoScreen}/>

                    </Drawer.Navigator>
                </NavigationContainer>
            </AppearanceProvider>
        );
    }
}