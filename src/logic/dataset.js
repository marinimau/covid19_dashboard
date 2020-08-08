/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 24/07/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */


let Records ={

    data: [],
    regionData: [],

    setRecords(records){
        this.records = records;
    },

    getRecords(){
        return this.records;
    },

    setRegionRecords(records){
        console.log('Records'+ records);
        this.regionData = records;
    },

    getRegionRecords(){
        return this.regionData;
    }

};

export default Records;