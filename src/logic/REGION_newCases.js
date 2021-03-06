/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 05/08/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import Records from "./dataset";
import {chartTitles} from "../ui/contents/strings";

let dataToReturn = {
    labels: [{title: chartTitles.totalCasesRegionTable, value: 'total'},
        {title: chartTitles.incrementTable, value: 'incr'}],
    regions: [],
    total: [],
    incr: [],
};

const RegionNewCasesData = (data) => {

    if (data === undefined) {
        data = Records.getRegionRecords();
    }

    if (data !== null) {
        let d = data[data.length - 1];


        if (dataToReturn.total.length === 0) {
            for (let i = 0; i < data.length; i += 1) {
                dataToReturn.regions.push(data[i]['denominazione_regione']);
                dataToReturn.total.push(data[i]['totale_casi']);
                dataToReturn.incr.push(data[i]['nuovi_positivi']);
            }
        }
    }
    console.log(dataToReturn);
    return dataToReturn;
};


export default RegionNewCasesData;