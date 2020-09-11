/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 28/07/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import Records from "./dataset";

let dataToReturn = {
    recoveredRatio: 0,
    recoveredTrendAbsolute: [],
    recoveredTrendDayValue: [],
    recoveredTrendProportional: [],
};

export function cleanData() {
    dataToReturn.recoveredTrendAbsolute = [];
    dataToReturn.recoveredTrendDayValue = [];
    dataToReturn.recoveredTrendProportional = [];
}

const RecoveredData = (data) => {

    if(data === undefined){
        data = Records.getRecords();
    }

    if(data !== null){
        let d = data[data.length - 1];

        dataToReturn.recoveredRatio = (Math.round(d['dimessi_guariti'] / d['totale_casi'] * 100 * 100) / 100).toFixed(2);

        if( dataToReturn.recoveredTrendAbsolute.length === 0){
            for (let i=1; i< data.length; i+=1){
                dataToReturn.recoveredTrendAbsolute.push(data[i]['dimessi_guariti']);
                dataToReturn.recoveredTrendDayValue.push(data[i]['dimessi_guariti'] - data[i - 1]['dimessi_guariti']);
                dataToReturn.recoveredTrendProportional.push(data[i]['dimessi_guariti'] - data[i - 1]['dimessi_guariti'] <= 0 ? 0 : Math.abs((data[i]['dimessi_guariti'] - data[i - 1]['dimessi_guariti']) / data[i]['totale_positivi'] * 100));
            }
        }
    }
    return dataToReturn;
};


export default RecoveredData;