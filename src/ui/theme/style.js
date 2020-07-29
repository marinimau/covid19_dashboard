/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 18/07/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import {StyleSheet} from "react-native";
import Colors from "./colors";
import {dimens, dynamicDimens} from "./dimens";
import {Dimensions} from "react-native-web";


export const styles = StyleSheet.create({
    root : {
        backgroundColor: Colors.basicTransparent,
    },
    rootContainer : {
        flex: 1,
        alignItems: 'flex-start',
        alignContent: 'space-around',
        justifyContent: 'flex-start',
        backgroundColor: Colors.basicElevation,
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
     *  HeaderStyle
     *
     */
    header: {
        borderBottomColor: 'transparent',
        height: Dimensions.get('window').width > dimens.largeScreen ? dimens.headerLargeHeight : dimens.headerHeight,
    },

    headerTitle: {
        fontSize: Dimensions.get('window').width > dimens.largeScreen ? 35 : 18,
        marginVertical:  Dimensions.get('window').width > dimens.largeScreen ? dimens.headerLargeHeight + 40 : dimens.headerHeight,
        fontWeight: Dimensions.get('window').width > dimens.largeScreen ? '800' : null,
    },
    headerShadow: {
        shadowColor: Colors.basicShadow,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: Dimensions.get('window').width > dimens.largeScreen ? 0 : 0.4,
        shadowRadius: 13.16,
        elevation: 20,
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
        borderRadius:20,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
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
        width: dynamicDimens.cardBig
    },
    cardMedium: {
        width: dynamicDimens.cardMedium
    },
    cardSmall: {
        width: dynamicDimens.cardSmall
    },
    /*
     *  Indicators
     */
    indicatorTitle: {
        fontSize: 22,
        fontWeight: "700",
    },
    indicatorValue: {
        fontSize: 32,
        fontWeight: "700",
    },
    indicatorOrange: {
        color: '#ffaa00'
    },
    indicatorGreen: {
        color: '#4ce600'
    },
    indicatorGrey: {
        color: '#c2c2c2'
    },
    indicatorRed: {
        color: '#ff0000'
    },
    /*
     *  Chart
     */
    chartTitle: {
        fontSize: 18,
        fontWeight: "700",
    },
});
