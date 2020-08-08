/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 05/08/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import Records from "../dataset";
import {chartTitles} from "../../ui/contents/strings";

let dataToReturn = {
    labels: [{title: chartTitles.percetageTestedPositive, value: 'percentagePositive'}],
    regions: [],
    percentagePositive: [],
};

const PositivityRegionData = (data) => {

    data = Records.getRegionRecords();

    if (data !== undefined) {

        if (dataToReturn.percentagePositive.length === 0) {
            for (let i = 0; i < data.length; i ++) {
                dataToReturn.regions.push(data[i]['denominazione_regione']);
                dataToReturn.percentagePositive.push((Math.round(data[i]['totale_casi'] / data[i]['casi_testati'] * 100 * 100) / 100).toFixed(2) + '%');
            }
        }
    }

    return dataToReturn;
};


export default PositivityRegionData;