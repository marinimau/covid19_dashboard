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

    /* Home Quarantine */
    homeQuarantine: 0,
    homeQuarantinePercentage: 0,
    homeQuarantineVariation: 0,
    homeQuarantineVariationPercentage: 0,

    /* Hospitalized with Symptoms */
    hospitalized: 0,
    hospitalizedPercentage: 0,
    hospitalizedVariation: 0,
    hospitalizedVariationPercentage: 0,

    /* Critical */
    critical: 0,
    criticalPercentage: 0,
    criticalVariation: 0,
    criticalVariationPercentage: 0,
};

const PositiveDeltaData = (data) => {

    if(data === undefined){
        data = Records.getRecords();
    }

    if(data !== null){
        let d = data[data.length - 1];

        /* Home Quarantine */
        dataToReturn.homeQuarantine = (d['isolamento_domiciliare']).toLocaleString('it');
        dataToReturn.homeQuarantinePercentage = Math.round(Math.abs(d['isolamento_domiciliare'] / d['totale_positivi'])* 100 * 100 / 100).toFixed(2);
        dataToReturn.homeQuarantineVariation = (d['isolamento_domiciliare'] - data[data.length - 2]['isolamento_domiciliare']).toLocaleString('it');
        dataToReturn.homeQuarantineVariationPercentage = Math.round((data[data.length - 2]['isolamento_domiciliare'] - d['isolamento_domiciliare']) / d['isolamento_domiciliare'] * 100 * 100 / 100).toFixed(2);

        /* Hospitalized with Symptoms */
        dataToReturn.hospitalized = d['totale_ospedalizzati'].toLocaleString('it');
        dataToReturn.hospitalizedPercentage = Math.round(Math.abs(d['totale_ospedalizzati'] / d['totale_positivi'])* 100 * 100 / 100).toFixed(2);
        dataToReturn.hospitalizedVariation = (d['totale_ospedalizzati'] - data[data.length - 2]['totale_ospedalizzati']).toLocaleString('it');
        dataToReturn.hospitalizedVariationPercentage = Math.round((data[data.length - 2]['totale_ospedalizzati'] - d['totale_ospedalizzati']) / d['totale_ospedalizzati'] * 100 * 100 / 100).toFixed(2);

        /* Critical */
        dataToReturn.critical = d['terapia_intensiva'].toLocaleString('it');
        dataToReturn.criticalPercentage = Math.round(Math.abs(d['terapia_intensiva'] / d['totale_positivi'])* 100 * 100 / 100).toFixed(2);
        dataToReturn.criticalVariation = (d['terapia_intensiva'] - data[data.length - 2]['terapia_intensiva']).toLocaleString('it');
        dataToReturn.criticalVariationPercentage = Math.round((data[data.length - 2]['terapia_intensiva'] - d['terapia_intensiva']) === 0 ? 0 : (data[data.length - 2]['terapia_intensiva'] - d['terapia_intensiva']) / d['terapia_intensiva'] * 100 * 100 / 100).toFixed(2);


        if( dataToReturn.deltaTrendAbsolute.length === 0){
            for (let i=1; i< data.length; i+=1){
                dataToReturn.deltaTrendAbsolute.push(data[i]['totale_positivi']);
                dataToReturn.deltaTrendDayVariation.push(data[i]['totale_positivi']-data[i-1]['totale_positivi']);
            }
        }

    }
    return dataToReturn;
};


export default PositiveDeltaData;