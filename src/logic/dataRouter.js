/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 09/09/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */
import NewCasesData from "./newCasesData";
import {cleanData as cleanDeaths}  from "./deathData";
import {cleanData as cleanNewCases} from "./newCasesData";
import {cleanData as cleanRecovered} from "./recoveredData";
import {cleanData as cleanPositiveDelta} from "./positiveDeltaData";
import {cleanData as cleanPositiveRepartition} from "./positiveRepartitionData";
import {cleanData as cleanTotalCasesRepartion} from "./totalCasesRepartitionData";
import {cleanData as cleanSwab} from "./swabData";


let DataRouter = {
    NewCasesData: () => {return NewCasesData()},

    refreshData(){
        this.NewCasesData = NewCasesData()
    },

    cleanData(){
        cleanDeaths();
        cleanNewCases();
        cleanRecovered();
        cleanPositiveDelta();
        cleanPositiveRepartition();
        cleanTotalCasesRepartion();
        cleanSwab();
    }
}

export default DataRouter;