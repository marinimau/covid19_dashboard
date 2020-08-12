/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 12/08/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import React from 'react';
import {Linking} from 'react-native';


export function openLink(url){
    Linking.openURL(url).then(r => function () {});
    return false
}
