/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 01/08/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import React from 'react';
import {Dimensions} from 'react-native';
import {dimens} from "../theme/dimens";
import darkMode from "../theme/darkModeDetector";


export function lineChartNumLabels(range) {
    switch (range) {
        case 7:
        case -1:
            return (Dimensions.get('window').width <= dimens.verySmallScreen ? 4 : 7)
        case 30:
            return 4;
    }

}

export const ShadowOpacity = darkMode() ? 0 : 0.2;