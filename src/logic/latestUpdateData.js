/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 19/07/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import Records from "./dataset";

let dataToReturn = {
    lastUpdateDate: 'undefined',
    newCases: 0,
    totalCases: 0,
    totalCurrentCases: 0,
    currentCasesVariation: 0,
    totalRecovered: 0,
    recoveredVariation: 0,
    totalDeaths: 0,
    deathsVariation: 0
};

const latestUpdateData = (data) => {

    if(data === undefined){
        data = Records.getRecords();
    }

    if(data !== null){
        let d = data[data.length - 1];

        /* Date */
        dataToReturn.lastUpdateDate = d['data'].replace('T', ' ');

        /* All Cases */
        dataToReturn.newCases = d['nuovi_positivi'];
        dataToReturn.totalCases = d['totale_casi'];

        /* Current cases */
        dataToReturn.totalCurrentCases = d['totale_positivi'];
        dataToReturn.currentCasesVariation = d['variazione_totale_positivi'];

        /* Recovered */
        dataToReturn.totalRecovered = d['dimessi_guariti'];
        dataToReturn.recoveredVariation =  data[data.length - 2]['dimessi_guariti'] - d['dimessi_guariti'];

        /* Deaths */
        dataToReturn.totalDeaths = d['deceduti'];
        dataToReturn.deathsVariation = data[data.length - 2]['deceduti'] - d['deceduti'];
    }
    return dataToReturn;
};


export default latestUpdateData;
