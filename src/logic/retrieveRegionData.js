/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 07/08/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import Records from "./dataset";

const retrieveRegionData = () => {
    if(Records.getRegionRecords() === []){
        fetch('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json')
            .then(res => (res.ok ? res : Promise.reject(res)))
            .then(res => res.json());
    }
    else {
        return Records.getRegionRecords();
    }
}

export default retrieveRegionData;

