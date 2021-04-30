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
    let tmp = date.split('T')[0];
    return tmp.split('-')[2] + '/' + tmp.split('-')[1] + '/' +  tmp.split('-')[0];
}