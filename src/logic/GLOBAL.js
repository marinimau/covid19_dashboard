/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 24/07/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

let dataset = [];

const set = (records) => {
    dataset = records;
};

const worker = {
    set,
    dataset
};

module.exports = worker;


