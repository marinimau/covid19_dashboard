/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 19/07/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */
import retrieveData from "./retrieveData";

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

    if(data === null){
        data = retrieveData;
    }

    if(data !== null){
        let d = data[data.length - 1];

        /* Date */
        dataToReturn.lastUpdateDate = d.get('data').replace('T', ' ');

        /* All Cases */
        dataToReturn.newCases = d.get('nuovi_positivi');
        dataToReturn.totalCases = d.get('totale_casi');

        /* Current cases */
        dataToReturn.totalCurrentCases = d.get('totale_positivi');
        dataToReturn.currentCasesVariation = d.get('variazione_totale_positivi');

        /* Recovered */
        dataToReturn.totalRecovered = d.get('dimessi_guariti');
        dataToReturn.recoveredVariation =  data[data.length - 2].get('dimessi_guariti') - d.get('dimessi_guariti');

        /* Deaths */
        dataToReturn.totalDeaths = d.get('deceduti');
        dataToReturn.deathsVariation = data[data.length - 2].get('deceduti') - d.get('deceduti');
    }
    return dataToReturn;
};


export default latestUpdateData;
