/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 18/07/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import {Text, View} from "react-native";
import React from "react";
import {appInfo} from "../../contents/strings";

function DrawerHeader({ navigation }) {
    return (
        <View>
            <Text>{appInfo.name}</Text>
            <Text>{appInfo.version}</Text>
        </View>
    );
}

export default DrawerHeader;
