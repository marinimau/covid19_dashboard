/**
 * covid19_dashboard copyright © 2021
 * Created by mauromarini on 26/01/2021
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */
import React from "react";
import {screenTitles} from "../contents/strings";
import ScreenContainer from "../components/screenContainer";
import RepartitionComponent from "../components/repartition/repartitionComponent";


function RepartitionScreen({ navigation }) {

    return (
        <ScreenContainer title={screenTitles.repartition} component={<RepartitionComponent/>}/>
    );
}

export default RepartitionScreen;