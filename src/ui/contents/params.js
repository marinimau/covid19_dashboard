/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 01/08/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import React from 'react';
import {Dimensions} from 'react-native';
import {dimens} from "../theme/dimens";


export const lineChartParams = {
    numLabels:  Dimensions.get('window').width <= dimens.verySmallScreen ? 4 : 7,
}