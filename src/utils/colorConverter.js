/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 28/07/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

export function hexToRgb(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

export function reduceOpacity(hex, points) {
    let colorRGB = hexToRgb(hex)
    return `rgba(${colorRGB.r}, ${colorRGB.g}, ${colorRGB.b}, ${1 - points * 0.1})`
}
