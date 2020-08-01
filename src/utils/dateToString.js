/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 25/07/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

export default function dateToString(date) {
    if(date === undefined){
        return ''
    }
    let tmp = date.split('T')[0].slice(Math.max(5, 0));//.splitText(4)[1].replace('-','/');
    return tmp.split('-')[1] + '/' + tmp.split('-')[0]
}