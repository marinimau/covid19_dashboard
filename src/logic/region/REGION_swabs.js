/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 05/08/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import Records from "../dataset";
import {chartTitles} from "../../ui/contents/strings";

let dataToReturn = {
    labels: [{title: chartTitles.swabRegionTotal, value: 'swab'}, {title: chartTitles.testedCasesRegionTotal, value: 'tested'}],
    regions: [],
    swab: [],
    tested: []
};

const SwabRegionData = (data) => {

    data = Records.getRegionRecords();

    if (data !== undefined) {

        if (dataToReturn.swab.length === 0) {
            for (let i = 0; i < data.length; i ++) {
                dataToReturn.regions.push(data[i]['denominazione_regione']);
                dataToReturn.swab.push(data[i]['tamponi']);
                dataToReturn.tested.push(data[i]['casi_testati']);
            }
        }
    }

    return dataToReturn;
};


export default SwabRegionData;