/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 01/08/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 30/07/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import Records from "./dataset";
import dateToString from "../utils/dateToString";
import {lineChartParams} from "../ui/contents/params";

let dataToReturn = {
    dateLabels: [],
};

const DateLabels = (range) => {

    let data = Records.getRecords();


    if(data !== null){

        dataToReturn.dateLabels = [];

        if( dataToReturn){
            let start = range === -1 || range === undefined ? 1 : data.length - range;
            let incr = Math.round(((data.length - start)) / lineChartParams.numLabels);
            for (let i = start; i < data.length; i+=incr){
                i = Math.round(i)
                dataToReturn.dateLabels.push(dateToString(data[i]['data']));
            }
        }

    }
    return dataToReturn;
};


export default DateLabels;