/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 23/07/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import {Dimensions} from 'react-native';
import {dimens} from "../ui/theme/dimens";

export function getCardBigWidth() {
    return Dimensions.get('window').width >= dimens.largeScreen ?
        ( Dimensions.get('window').width - dimens.drawerWidth - dimens.cardMargin * 2 ) :
        (Dimensions.get('window').width - dimens.cardMarginSmallScreen)

}

export function getChartFullWidth() {
    return Dimensions.get('window').width > dimens.largeScreen ?
        ( Dimensions.get('window').width - dimens.drawerWidth - dimens.chartMargin ) :
        (Dimensions.get('window').width - dimens.chartMargin)
}

