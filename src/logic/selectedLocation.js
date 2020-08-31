/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 31/08/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */
import {RegionList} from "../ui/contents/locationsList";


let SelectedLocation ={

    index: 0,

    setLocation(index){
        if(index >= 0 && index <= RegionList.length){
            this.index = index;
        }
    },

    getLocation(){
        return this.index;
    },

};

export default SelectedLocation;