/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 24/07/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import SelectedLocation from "./selectedLocation";

let Records ={

    data: [],
    regionData: [],
    singleRegionData: [],

    setRecords(records){
        this.data = records;
    },

    getRecords(){
        if(SelectedLocation.getLocation() === 0){
            return this.data;
        }
        else {
            if(this.singleRegionData.length === 0){
                for(let i = SelectedLocation.getLocation() - 1; i < this.regionData.length; i+=21){
                    this.singleRegionData.push(this.regionData[i]);
                }
            }
            return this.singleRegionData;
        }
    },

    setRegionRecords(records){
        this.regionData = records;
    },

    getRegionRecords(){
        return this.regionData;
    },

    clearSingleRegionData(){
        this.singleRegionData = [];
    }

};

export default Records;