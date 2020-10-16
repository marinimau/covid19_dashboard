/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 27/07/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */
import darkMode from "./darkModeDetector";

let LegendColors = {
    lightgreen: '#64DD17',
    green: '#30d158',
    lightyellow: '#ffb700',
    yellow: darkMode() ? '#ffd60a' : '#ffcc00',
    lightred: '#DD2C00',
    red: darkMode() ? '#ff453a' : '#ff3a30',
    lightgrey: '#455A64',
    grey: '#616161',
    lightblue: '#00B8D4',
    blue: darkMode() ? '#0a84ff' : '#007bff',
}

export default LegendColors;