/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 05/08/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import Records from "../dataset";
import {chartTitles} from "../../ui/contents/strings";

let dataToReturn = {
    labels: [{title: chartTitles.totalCasesRegionTable, value: 'total'},
        {title: chartTitles.totalCasesRegionVariation, value: 'incr'}],
    regions: [],
    total: [],
    incr: [],
};

const PositiveRegionData = (data) => {

    data = Records.getRegionRecords();

    if (data !== undefined) {

        if (dataToReturn.total.length === 0) {
            for (let i = 0; i < data.length; i ++) {
                dataToReturn.regions.push(data[i]['denominazione_regione']);
                dataToReturn.total.push(data[i]['totale_positivi']);
                dataToReturn.incr.push((data[i]['variazione_totale_positivi'] > 0 ? '+' : '')  + data[i]['variazione_totale_positivi']);
            }
        }
    }

    return dataToReturn;
};


export default PositiveRegionData;