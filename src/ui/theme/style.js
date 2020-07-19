/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 18/07/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import {StyleSheet} from "react-native";
import Colors from "./colors";


export const styles = StyleSheet.create({
    root : {
        backgroundColor: Colors.basicTransparent,
    },
    rootContainer : {
        flex: 1,
        padding: 20,
        alignItems: 'left',
        justifyContent: 'left',
        backgroundColor: Colors.basicTransparent,
    },
    loading: {
        backgroundColor: Colors.basicElevation,
    },
    container: {
        flex: 1,
        backgroundColor: Colors.basicElevation,
        alignItems: 'center',
        justifyContent: 'center',
    },
    /*
     *  Card items
     *  3 sizes:
     *      - big
     *      - medium
     *      - small
     */
    cardGeneric: {
        borderRadius: 20,
        background: Colors.basicElevation,
        border: Colors.mainTransparent,
        elevation: 20,
    }
});
