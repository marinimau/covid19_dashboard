/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 09/09/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */
import NewCasesData from "./newCasesData";


let DataRouter = {
    NewCasesData: () => {return NewCasesData()},

    refreshData(){
        this.NewCasesData = NewCasesData()
    }
}

export default DataRouter;