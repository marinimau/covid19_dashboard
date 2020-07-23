/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 18/07/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import {StyleSheet} from "react-native";
import Colors from "./colors";
import {dimens, dynamicDimens} from "./dimens";


export const styles = StyleSheet.create({
    drawerShadow: {
        shadowColor: Colors.basicShadow,
        shadowOffset: {
            width: 10,
            height: 0,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,
        elevation: 20,
    },
    root : {
        backgroundColor: Colors.basicTransparent,
    },
    rootContainer : {
        flex: 1,
        alignItems: 'flex-start',
        alignContent: 'space-around',
        justifyContent: 'flex-start',
        backgroundColor: Colors.basicTransparent,
    },
    scrollableContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
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
        position: 'relative',
        borderRadius: 10,
        width: '100%',
        margin: 7,
        height: 'auto',
        padding: 20,
        backgroundColor: Colors.basicElevation,
        borderColor: Colors.mainTransparent,
        borderWidth: 0.5,
        elevation: 20,
    },
    cardShadow: {
        shadowColor: Colors.basicShadow,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,
        elevation: 20,
    },
    cardBig: {
        maxWidth: dynamicDimens.cardBig
    },
    cardMedium: {
        maxWidth: dimens.cardMedium
    },
    cardSmall: {
        maxWidth: dimens.cardSmall
    },
    /*
     *  Chart
     */
    chartTitle: {
        fontSize: 18,
        fontWeight: "700",
    }
});