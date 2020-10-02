/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 05/08/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import Records from "./dataset";
import dateToString from "../utils/dateToString";

let dataToReturn = {
    repartitionPercentage: [],
    repartitionAbsolute: []
};

export function cleanData() {
    dataToReturn.repartitionAbsolute = [];
    dataToReturn.repartitionPercentage = [];
}

const PositiveRepartitionData = (data) => {

    if(data === undefined){
        data = Records.getRecords();
    }

    if(data !== null && dataToReturn.repartitionAbsolute.length === 0){

        for(let i = 0; i < data.length; i++){
            if(data[i]['isolamento_domiciliare'] + data[i]['totale_ospedalizzati'] + data[i]['terapia_intensiva'] > 0){
                dataToReturn.repartitionPercentage.push(
                    {
                        date: dateToString(data[i]['data']),
                        homeQuarantine: Math.abs(data[i]['isolamento_domiciliare'] === 0 ? 0 : data[i]['isolamento_domiciliare'] / data[i]['totale_positivi']) * 100 * 100 / 100,
                        hospitalized: Math.abs((data[i]['totale_ospedalizzati'] - data[i]['terapia_intensiva']) === 0 ? 0 :(data[i]['totale_ospedalizzati'] - data[i]['terapia_intensiva']) / data[i]['totale_positivi']) * 100 * 100 / 100,
                        critical: Math.abs(data[i]['terapia_intensiva'] === 0 ? 0 : data[i]['terapia_intensiva'] / data[i]['totale_positivi']) * 100 * 100 / 100
                    }
                );
                dataToReturn.repartitionAbsolute.push(
                    {
                        date: dateToString(data[i]['data']),
                        homeQuarantine: data[i]['isolamento_domiciliare'],
                        hospitalized:data[i]['totale_ospedalizzati'] - data[i]['terapia_intensiva'],
                        critical: data[i]['terapia_intensiva']
                    }
                )
            }
        }
    }
    return dataToReturn;
};


export default PositiveRepartitionData;