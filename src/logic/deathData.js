/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 28/07/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import Records from "./dataset";

let dataToReturn = {
    deathsRatio: 0,
    diedTrendAbsolute: [],
    diedTrendDayValue: [],
    diedTrendProportional: [],
};

export function cleanData() {
    dataToReturn.deathsRatio = 0;
    dataToReturn.diedTrendAbsolute = [];
    dataToReturn.diedTrendDayValue = [];
    dataToReturn.diedTrendProportional = [];
}

const DeathsData = (data) => {

    if (data === undefined) {
        data = Records.getRecords();
    }

    if (data !== null) {
        let d = data[data.length - 1];

        dataToReturn.deathsRatio = (Math.round(d['deceduti'] / d['totale_casi'] * 100 * 100) / 100).toFixed(2);

        if (dataToReturn.diedTrendAbsolute.length === 0) {
            for (let i = 1; i < data.length; i += 1) {
                dataToReturn.diedTrendAbsolute.push(data[i]['deceduti']);
                dataToReturn.diedTrendDayValue.push(data[i]['deceduti'] - data[i - 1]['deceduti']);
                dataToReturn.diedTrendProportional.push((data[i]['deceduti'] - data[i - 1]['deceduti']) <= 0 ? 0 : Math.abs((data[i]['deceduti'] - data[i - 1]['deceduti']) / data[i]['totale_positivi'] * 100));
            }
        }

    }
    return dataToReturn;
};


export default DeathsData;