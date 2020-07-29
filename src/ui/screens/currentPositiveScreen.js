/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 18/07/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import React from "react";
import {screenTitles} from "../contents/strings";
import ScreenContainer from "../components/screenContainer";
import CurrentPositiveComponent from "../components/current_positive/currentPositiveComponent";



function CurrentPositiveScreen({ navigation }) {

    return (
        <ScreenContainer title={screenTitles.currentPositive} component={<CurrentPositiveComponent/>} />
    );
}

export default CurrentPositiveScreen;
