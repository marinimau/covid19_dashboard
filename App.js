/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 18/07/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Dimensions} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {dimens} from "./src/ui/theme/dimens";
import {styles} from "./src/ui/theme/style";
import Colors from "./src/ui/theme/colors";
import {screenTitles} from "./src/ui/contents/strings";
import Async from 'react-async';
import {navigationRef} from './src/utils/rootNavigationRef';

/* Screens Import */
import HomeScreen from "./src/ui/screens/homeScreen";
import LatestUpdateResumeScreen from "./src/ui/screens/latestUpdateResumeScreen";
import NewCasesScreen from "./src/ui/screens/newCasesScreen";
import RecoveredScreen from "./src/ui/screens/recoveredScreen";
import DiedScreen from "./src/ui/screens/diedScreen";
import CurrentPositiveScreen from "./src/ui/screens/currentPositiveScreen";
import SwabsResumeScreen from "./src/ui/screens/swabsScreen";
import retrieveData from "./src/logic/retrieveData";
import LoadingScreen from "./src/ui/components/loading/splash";
import ErrorScreen from "./src/ui/components/loading/error";
import Records from "./src/logic/dataset";
import { enableScreens } from 'react-native-screens';
import {Platform} from "react-native-web";

enableScreens();


const Drawer = createDrawerNavigator();

export default function App() {

    const dimensions = Dimensions.get('window').width;

    const isLargeScreen = dimensions >= dimens.largeScreen;

    return (
        <Async promiseFn={retrieveData}>
            {({ data, err, isLoading }) => {
                if (isLoading) return <LoadingScreen />
                if (err) return <ErrorScreen />

                if (data)
                    Records.setRecords(data)
                    return (
                        <>
                        <StatusBar/>
                        <NavigationContainer
                            ref={navigationRef}
                            style={styles.root}>
                            <Drawer.Navigator
                                initialRouteName="Resume"
                                openByDefault
                                drawerContentOptions={{
                                    activeTintColor: Colors.drawerSelectedText,
                                    activeBackgroundColor: Colors.drawerSelectedBackground,

                                }}
                                drawerType={isLargeScreen ? 'permanent' : 'front'}
                                drawerStyle={isLargeScreen ? {width: dimens.drawerWidth} : [{width: dimens.drawerWidth}]}
                                overlayColor={isLargeScreen ? "transparent" : Colors.basicTransparent}>

                                <Drawer.Screen name={screenTitles.latestUpdateResume} component={LatestUpdateResumeScreen}/>
                                <Drawer.Screen name={screenTitles.newCases}  component={NewCasesScreen}/>
                                <Drawer.Screen name={screenTitles.recovered} component={RecoveredScreen}/>
                                <Drawer.Screen name={screenTitles.died} component={DiedScreen} />
                                <Drawer.Screen name={screenTitles.currentPositive} component={CurrentPositiveScreen}/>
                                <Drawer.Screen name={screenTitles.swab} component={SwabsResumeScreen} />

                            </Drawer.Navigator>
                        </NavigationContainer>
                        </>
                    )
            }}
        </Async>
    );
}









