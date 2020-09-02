/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 05/08/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import Records from "./dataset";
import dateToString from "../utils/dateToString";

let dataToReturn = {

    /* repartition */
    repartition: []
};

const TotalCasesRepartitionData = (data) => {

    if(data === undefined){
        data = Records.getRecords();
    }

    if(data !== null && dataToReturn.repartition.length === 0){

        for(let i = 0; i < data.length; i++){
            if(data[i]['dimessi_guariti'] + data[i]['totale_positivi'] + data[i]['deceduti'] > 0){
                dataToReturn.repartition.push(
                    {
                        date: dateToString(data[i]['data']),
                        recovered: Math.abs(data[i]['dimessi_guariti'] / data[i]['totale_casi']) * 100 * 100 / 100,
                        current: Math.abs(data[i]['totale_positivi']  / data[i]['totale_casi']) * 100 * 100 / 100,
                        death: Math.abs(data[i]['deceduti'] / data[i]['totale_casi']) * 100 * 100 / 100
                    }
                )
            }
        }
    }
    return dataToReturn;
};


export default TotalCasesRepartitionData;