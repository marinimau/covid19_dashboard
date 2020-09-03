/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 03/09/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import {Appearance} from "react-native-appearance";

export default function darkMode() {
    return Appearance.getColorScheme() === 'dark';
}