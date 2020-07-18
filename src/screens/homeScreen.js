/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 18/07/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import {Button, Text, View} from "react-native";
import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {DrawerActions, useNavigation} from "@react-navigation/native";
import {TouchableOpacity} from "react-native-gesture-handler";
import {screenTitles} from "../contents/strings";
import HomeComponents from "../components/home/homeComponents";

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {


    const HeaderLeft = () => {
        const navigation = useNavigation();
        return (
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.dispatch(DrawerActions.openDrawer());
                    }}>
                    <Text>Open</Text>
                    {/* <Image source={require('./assets/images/icons/drawer.png')} /> */}
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{
                    headerLeft: ({}) => <HeaderLeft />
                }}
                component={({}) => <HomeComponents />}
                name={screenTitles.home}
            />
        </Stack.Navigator>
    );
}

export default HomeScreen;

