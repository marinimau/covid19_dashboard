/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 05/08/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import Records from "../dataset";
import {chartTitles} from "../../ui/contents/strings";

let dataToReturn = {
    labels: [{title: chartTitles.hospitalizedWithSymptoms, value: 'hospitalized'},
        {title: chartTitles.critical, value: 'critical'}],
    regions: [],
    hospitalized: [],
    critical: [],
};

const HospitalRegionData = (data) => {

    data = Records.getRegionRecords();

    if (data !== undefined) {

        if (dataToReturn.hospitalized.length === 0) {
            for (let i = 0; i < data.length; i ++) {
                dataToReturn.regions.push(data[i]['denominazione_regione']);
                dataToReturn.hospitalized.push(data[i]['totale_ospedalizzati']);
                dataToReturn.critical.push(data[i]['terapia_intensiva']);
            }
        }
    }

    return dataToReturn;
};


export default HospitalRegionData;