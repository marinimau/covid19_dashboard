/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 30/07/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import Records from "./dataset";

let dataToReturn = {
    deltaTrendAbsolute: [],
    deltaTrendDayVariation: [],
};

const PositiveDeltaData = (data) => {

    if(data === undefined){
        data = Records.getRecords();
    }

    if(data !== null){
        let d = data[data.length - 1];


        if( dataToReturn.deltaTrendAbsolute.length === 0){
            for (let i=1; i< data.length; i+=5){
                dataToReturn.deltaTrendAbsolute.push(data[i]['totale_positivi']);
                dataToReturn.deltaTrendDayVariation.push(data[i]['totale_positivi']-data[i-1]['totale_positivi']);
            }
        }

    }
    return dataToReturn;
};


export default PositiveDeltaData;