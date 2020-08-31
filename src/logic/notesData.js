/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 16/08/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import Records from "./dataset";
import {loadingMessages} from "../ui/contents/strings";

let dataToReturn = {
    notes: []
};

const NotesData = (data) => {

    data = Records.getRegionRecords();
    console.log(data)

    if (data !== undefined) {
        if (dataToReturn.notes.length === 0) {
            for (let i = data.length - 21 ; i < data.length; i++) {
                if (data[i]['note'] !== null) {
                    dataToReturn.notes.push('       (' + data[i]['denominazione_regione'].toUpperCase() + ') ' + data[i]['note'].replace(/(\r\n|\n|\r)/gm, ""));
                }
            }
            if (dataToReturn.notes.length === 0) {
                dataToReturn.notes.push(loadingMessages.noNotes);
            }
        }
    }
    return dataToReturn;
};


export default NotesData;