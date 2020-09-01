/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 31/08/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import {RegionList} from "../ui/contents/locationsList";
import Records from "./dataset";


let SelectedLocation ={

    index: 0,

    setLocation(index){
        if(index >= 0 && index <= RegionList.length){
            this.index = index;
            Records.clearSingleRegionData();
        }
    },

    getLocation(){
        return this.index;
    },

};

export default SelectedLocation;