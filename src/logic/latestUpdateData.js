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
    totalCasesVariationPercentage: 0,
    currentCasesVariation: 0,
    currentCasesVariationPercentage: 0,
    totalRecovered: 0,
    recoveredVariation: 0,
    recoveredVariationPercentage: 0,
    totalDeaths: 0,
    deathsVariation: 0,
    deathsVariationPercentage: 0,
    swab: 0,
    swabVariation: 0,
    swabVariationPercentage: 0,
    testedCases: 0,
    testedCasesVariation: 0,
    testedCasesVariationPercentage: 0,
    rapidTestCumulative: 0,
    standardTestCumulative: 0,
    rapidTestVariation: 0,
    standardTestVariation: 0,

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
        dataToReturn.totalCases = (d['totale_casi']).toLocaleString('it');
        dataToReturn.newCases = '+ ' + (Math.abs(d['nuovi_positivi'])).toLocaleString('it');
        dataToReturn.totalCasesVariationPercentage = '+' + ((Math.round(Math.abs(d['nuovi_positivi']) / d['totale_casi'] * 100 * 100) / 100).toFixed(2));

        /* Current cases */
        dataToReturn.totalCurrentCases = (d['totale_positivi']).toLocaleString('it');
        dataToReturn.currentCasesVariation = d['variazione_totale_positivi'] >= 0 ?
            '+ ' + (d['variazione_totale_positivi']).toLocaleString('it') : (d['variazione_totale_positivi']).toLocaleString('it');
        dataToReturn.currentCasesVariationPercentage = (Math.round( d['variazione_totale_positivi'] / d['totale_positivi'] * 100 * 100) / 100).toFixed(2);


        /* Recovered */
        dataToReturn.totalRecovered = (d['dimessi_guariti']).toLocaleString('it');
        dataToReturn.recoveredVariation =  '+ '+ (Math.abs(d['dimessi_guariti'] - data[data.length - 2]['dimessi_guariti'])).toLocaleString('it');
        dataToReturn.recoveredVariationPercentage = '+' + Math.round((Math.abs(Math.abs(d['dimessi_guariti'] - data[data.length - 2]['dimessi_guariti']) / d['dimessi_guariti'] * 100) * 100) / 100).toFixed(2);

        /* Deaths */
        dataToReturn.totalDeaths = (d['deceduti']).toLocaleString('it');
        dataToReturn.deathsVariation = '+ ' + (Math.abs( d['deceduti'] - data[data.length - 2]['deceduti'])).toLocaleString('it');
        dataToReturn.deathsVariationPercentage = '+' + Math.round((Math.abs(d['deceduti'] - data[data.length - 2]['deceduti']) /d['deceduti'] * 100 * 100) / 100).toFixed(2);

        /* Swab */
        dataToReturn.swab = (d['tamponi']).toLocaleString('it');
        dataToReturn.swabVariation = '+ ' + (Math.abs( d['tamponi'] - data[data.length - 2]['tamponi'])).toLocaleString('it');
        dataToReturn.swabVariationPercentage =  '+' +  Math.round(Math.abs( d['tamponi'] - data[data.length - 2]['tamponi']) /d['tamponi'] * 100  * 100 / 100).toFixed(2);
        dataToReturn.standardTestCumulative = (d['tamponi_test_molecolare']).toLocaleString('it');
        dataToReturn.rapidTestCumulative = (d['tamponi_test_antigenico_rapido']).toLocaleString('it');
        dataToReturn.standardTestVariation = '+ ' + (Math.abs(d['tamponi_test_molecolare'] - data[data.length - 2]['tamponi_test_molecolare'])).toLocaleString('it');
        dataToReturn.rapidTestVariation = '+ ' + (Math.abs(d['tamponi_test_antigenico_rapido'] - data[data.length - 2]['tamponi_test_antigenico_rapido'])).toLocaleString('it');
        dataToReturn.standardTestVariationPercentage = '+' + Math.round(Math.abs( d['tamponi_test_molecolare'] - data[data.length - 2]['tamponi_test_molecolare']) /d['tamponi_test_molecolare'] * 100  * 100 / 100).toFixed(2);
        dataToReturn.rapidTestVariationPercentage = '+' + Math.round(Math.abs( d['tamponi_test_antigenico_rapido'] - data[data.length - 2]['tamponi_test_antigenico_rapido']) /d['tamponi_test_antigenico_rapido'] * 100  * 100 / 100).toFixed(2);

        /* Tested Cases */
        dataToReturn.testedCases = (d['casi_testati']).toLocaleString('it');
        dataToReturn.testedCasesVariation = '+ ' + (Math.abs(d['casi_testati'] - data[data.length - 2]['casi_testati'])).toLocaleString('it');
        dataToReturn.testedCasesVariationPercentage = '+' + Math.round(Math.abs( d['casi_testati'] - data[data.length - 2]['casi_testati']) /d['casi_testati'] * 100  * 100 / 100).toFixed(2);
    }
    return dataToReturn;
};


export default latestUpdateData;
