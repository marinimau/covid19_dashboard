/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 16/08/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import Records from "./dataset";

let dataToReturn = {
    notes: []
};

const NotesData = (data) => {

    data = Records.getRegionRecords();

    if (data !== undefined) {

        if (dataToReturn.notes.length === 0) {
            for (let i = 0; i < data.length; i++) {
                if (data[i]['note'] !== null) {
                    dataToReturn.notes.push('       (' + data[i]['denominazione_regione'].toUpperCase() + ') ' + data[i]['note'].replace(/(\r\n|\n|\r)/gm, ""));
                }
            }
        }
    }
    return dataToReturn;
};


export default NotesData;