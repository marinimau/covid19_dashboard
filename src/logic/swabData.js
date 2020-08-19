/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 29/07/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import Records from "./dataset";

let dataToReturn = {
    deathsRatio: [''],
    swabTrendAbsolute: [],
    swabTrendVariation: [],
    testedCasesTrendAbsolute: [],
    testedCasesTrendVariation: [],
    percentagePositiveTrend: [],
    positiveByScreening: 0,
};

const SwabData = (data) => {

    if(data === undefined){
        data = Records.getRecords();
    }

    if(data !== null){
        let d = data[data.length - 1];

        dataToReturn.positiveRatio = (Math.round(d['totale_casi'] / d['casi_testati'] * 100 * 100) / 100).toFixed(2);
        dataToReturn.positiveByScreening = (Math.round(d['casi_da_screening'] / d['totale_casi'] * 100)).toFixed(2);

        if( dataToReturn.swabTrendAbsolute.length === 0){
            for (let i=1; i< data.length; i+=1){
                dataToReturn.swabTrendAbsolute.push(data[i]['tamponi']);
                dataToReturn.swabTrendVariation.push(data[i]['tamponi'] - data[i - 1]['tamponi']);
                dataToReturn.testedCasesTrendAbsolute.push(data[i]['casi_testati']);
                dataToReturn.testedCasesTrendVariation.push(data[i-1]['casi_testati'] === null ? null : data[i]['casi_testati'] - data[i - 1]['casi_testati']);
                dataToReturn.percentagePositiveTrend.push( data[i]['casi_testati'] === null ? null : ((data[i]['totale_casi'] / data[i]['casi_testati']) * 100));
            }
        }

    }
    return dataToReturn;
};


export default SwabData;