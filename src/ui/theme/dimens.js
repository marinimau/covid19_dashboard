/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 18/07/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */


import {getCardBigWidth, getChartFullWidth} from "../../utils/dimensionsUtils";

export const dimens = {
    largeScreen: 768,
    drawerWidth: 250,
    chartMargin: 70,
    headerHeight: 74,
    cardMargin: 30,
    cardMarginSmallScreen: 20,
    cardMedium: 768,
    cardSmall: 250,

};

export const dynamicDimens = {
    cardBig: getCardBigWidth(),
    chartFullWidth: getChartFullWidth(),
}
