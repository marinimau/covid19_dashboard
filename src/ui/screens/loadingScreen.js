/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 09/08/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 18/07/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import React from "react";
import {screenTitles} from "../contents/strings";
import ScreenContainer from "../components/screenContainer";
import LoadingComponent from "../components/loading/loading";


function LoadingScreen() {

    return (
        <ScreenContainer title={screenTitles.latestUpdateResume} component={<LoadingComponent/>} />
    );
}

export default LoadingScreen;