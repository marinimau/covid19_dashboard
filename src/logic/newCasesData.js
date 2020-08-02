/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 02/08/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import Records from "./dataset";

let dataToReturn = {
    r0: 0,
    newCasesTrendAbsolute: [],
    newCasesTrendDayValue: [],
    r0Trend: [],
};

const NewCasesData = (data) => {

    if(data === undefined){
        data = Records.getRecords();
    }

    if(data !== null){
        let d = data[data.length - 1];

        dataToReturn.r0 = 0;

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