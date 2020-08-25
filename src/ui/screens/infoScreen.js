/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 12/08/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import React from "react";
import {screenTitles} from "../contents/strings";
import ScreenContainer from "../components/screenContainer";
import InfoComponent from "../components/info/infoComponent";

function InfoScreen({navigation}) {

    return (
        <ScreenContainer title={screenTitles.info} component={<InfoComponent/>} />
    );
}

export default InfoScreen;