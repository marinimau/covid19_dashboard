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
    deathsVariation: 0,
    swab: 0,
    swabVariation: 0,
    testedCases: 0,
    testedCasesVariation: 0,
};

const latestUpdateData = (data) => {

    if(data === undefined){
        data = Records.getRecords();
    }

    if(data !== null){
        let d = data[data.length - 1];

        /* Date - do not use replaceAll, it make issues on android */
        dataToReturn.lastUpdateDate = d['data'].replace('T', ' ').split(' ')[0].replace('-','/',).replace('-','/',);

        /* All Cases */
        dataToReturn.newCases = '+ ' + Math.abs(d['nuovi_positivi']);
        dataToReturn.totalCases = d['totale_casi'];

        /* Current cases */
        dataToReturn.totalCurrentCases = d['totale_positivi'];
        dataToReturn.currentCasesVariation = d['variazione_totale_positivi'] > 0 ?
            '+ ' + d['variazione_totale_positivi'] :
            '- ' + d['variazione_totale_positivi'];

        /* Recovered */
        dataToReturn.totalRecovered = d['dimessi_guariti'];
        dataToReturn.recoveredVariation =  '+ '+Math.abs(data[data.length - 2]['dimessi_guariti'] - d['dimessi_guariti']);

        /* Deaths */
        dataToReturn.totalDeaths = d['deceduti'];
        dataToReturn.deathsVariation = '+ ' + Math.abs(data[data.length - 2]['deceduti'] - d['deceduti']);

        /* Swab */
        dataToReturn.swab = d['tamponi'];
        dataToReturn.swabVariation = '+ ' + Math.abs(data[data.length - 2]['tamponi'] - d['tamponi']);

        /* Tested Cases */
        dataToReturn.testedCases = d['casi_testati'];
        dataToReturn.testedCasesVariation = '+ ' + Math.abs(data[data.length - 2]['casi_testati'] - d['casi_testati']);
    }
    return dataToReturn;
};


export default latestUpdateData;
