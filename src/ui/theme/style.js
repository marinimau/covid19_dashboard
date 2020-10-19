/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 18/07/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import {StyleSheet, Platform} from "react-native";
import Colors from "./colors";
import LegendColors from "./legendColors"
import {dynamicDimens} from "./dimens";
import darkMode from "./darkModeDetector";


export const styles = StyleSheet.create({
    root: {
        backgroundColor: Colors.basicTransparent,
    },
    rootContainer: {
        flex: 1,
        alignItems: 'flex-start',
        alignContent: 'space-around',
        justifyContent: 'flex-start',
        backgroundColor: darkMode() ? Colors.darkMode_background : Colors.background,
    },
    scrollableContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 55,
    },
    loading: {
        backgroundColor:  darkMode() ? Colors.darkMode_background : Colors.background,
    },
    container: {
        flex: 1,
        backgroundColor:  darkMode() ? Colors.darkMode_basicElevation : Colors.basicElevation,
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuItemradius: {
        paddingLeft: 10,
        borderRadius:20,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderColor: 'transparent'
    },
    /*
     *  HeaderStyle
     *
     */
    header: {
        backgroundColor: darkMode() ? Colors.darkMode_basicElevation : Colors.basicElevation,
        borderBottomColor: darkMode() ? Colors.darkMode_basicNotes : Colors.borders,
        borderBottomWidth: 0.5,
        position: Platform.OS === 'android' ? 'absolute': 'fixed',
        top: 0,
        left: 0,
    },
    headerTitle: {
        color: darkMode() ? Colors.darkMode_title : Colors.title,
    },
    headerShadow: {
        shadowColor: darkMode() ? Colors.darkMode_basicShadow : Colors.basicShadow,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.4,
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
        borderRadius: 10,
        margin: 10,
        height: 'auto',
        padding: 20,
        backgroundColor: darkMode() ? Colors.darkMode_basicElevation : Colors.basicElevation,
        borderColor: darkMode() ? Colors.darkMode_basicTransparent : Colors.borders,
        borderWidth: 0.5,
        elevation: 20,
    },
    cardShadow: {
        shadowColor: darkMode() ? Colors.darkMode_basicShadow : Colors.basicShadow,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: darkMode() ? 0 : 0.2,
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
        color: '#fff'
    },
    indicatorValue: {
        textAlign: 'center',
        color:  darkMode() ? Colors.darkMode_basic : Colors.basic
    },
    indicatorValueBold: {
        marginTop:20,
        fontSize: 22,
        fontWeight: "900",
    },
    indicatorValueIncr: {
        marginTop: 5,
        marginBottom: 10,
        fontSize: 14,
        fontStyle: 'italic',
    },
    indicatorLight: {
        color: '#fff'
    },
    indicatorOrange: {
        color: LegendColors.yellow
    },
    indicatorGreen: {
        backgroundColor: LegendColors.green
    },
    indicatorGrey: {
        color: LegendColors.grey
    },
    indicatorRed: {
        color: LegendColors.red
    },
    /*
     *  Chart
     */
    chartTitle: {
        fontSize: 18,
        fontWeight: "700",
        color: darkMode() ? Colors.darkMode_title : Colors.title,
    },
    chartDescription: {
        fontSize: 12,
        fontStyle: 'italic',
        textAlign: 'center',
        marginTop: 20,
        color: darkMode() ? Colors.darkMode_basic : Colors.basic,
    },
    infoDescription: {
        fontSize: 16,
        color: darkMode() ? Colors.darkMode_basic : Colors.basic,
        fontStyle: 'italic',
        textAlign: 'left',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,

    },
    chartBigValue: {
        width: '100%',
        textAlign: 'center',
        fontSize: 30,
        marginTop: 30,
        marginBottom: 30,
        color: darkMode() ? Colors.darkMode_basic : Colors.basic,
    },
    /*
     *  Chart legend
     *
     */
    legendExternalContainer: {
        flex: 1,
        margin: 10,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    legendContainer: {
        margin: 10,
        position: 'relative',
        flexDirection: 'row'
    },
    legendColorSquare: {
        width: 20,
        height:20,
        borderRadius: 5,
    },
    legendTitle: {
        marginLeft: 10,
        color: darkMode() ? Colors.darkMode_basic : Colors.basic,
    },
    /*
     *  Notes
     *
     */
    notesContainer: {
        bottom: 0,
        position: Platform.OS === 'android' ? 'absolute': 'fixed',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 'auto',
        backgroundColor: darkMode() ? Colors.darkMode_basicElevation : Colors.basic,
        paddingTop: 15,
        paddingBottom: 15,
        borderColor: 'transparent',
        borderTopColor: darkMode() ? Colors.darkMode_basicNotes : Colors.borders,
        borderWidth: 0.5,
    },
});
