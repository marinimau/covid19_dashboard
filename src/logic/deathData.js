/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 28/07/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import Records from "./dataset";

let dataToReturn = {
    deathsRatio: 0
};

const DeathsData = (data) => {

    if(data === undefined){
        data = Records.getRecords();
    }

    if(data !== null){
        let d = data[data.length - 1];

        dataToReturn.deathsRatio = (Math.round(d['deceduti'] / d['totale_casi'] * 100 * 100) / 100).toFixed(2);

    }
    return dataToReturn;
};


export default DeathsData;