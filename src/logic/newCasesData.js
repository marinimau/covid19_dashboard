/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 02/08/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import Records from "./dataset";

let dataToReturn = {
    percentageOfTotal: 0,
    newCasesTrendAbsolute: [],
    newCasesTrendDayValue: [],
    r0Trend: [],
};

export function cleanData() {
    dataToReturn.newCasesTrendAbsolute = [];
    dataToReturn.newCasesTrendDayValue = [];
    dataToReturn.r0Trend = [];
}

const NewCasesData = (data) => {

    data = Records.getRecords();


    if(data !== null){
        let d = data[data.length - 1];

        dataToReturn.percentageOfTotal = (Math.round(d['totale_casi']/Records.data[Records.data.length -1]['totale_casi'] * 100 * 100).toFixed(2)) / 100;

        if( dataToReturn.newCasesTrendAbsolute.length === 0){
            for (let i=1; i< data.length; i+=1){
                dataToReturn.newCasesTrendAbsolute.push(data[i]['totale_casi']);
                dataToReturn.newCasesTrendDayValue.push(data[i]['nuovi_positivi']);
                dataToReturn.r0Trend.push(data[i]['totale_casi']);
            }
        }
    }
    return dataToReturn;
};


export default NewCasesData;