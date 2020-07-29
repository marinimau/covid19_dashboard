/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 19/07/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import React, {Component} from 'react';
import {TouchableOpacity} from "react-native";
import MainScrollableContents from "../mainScrollableContainer";
import CardTotalCases from "../../../drawings/resume_cards/cardTotalCases";
import CardRecovered from "../../../drawings/resume_cards/cardRecovered";
import CardDied from "../../../drawings/resume_cards/cardDied";
import CardCurrentPositive from "../../../drawings/resume_cards/cardCurrentPositive";
import {navigate} from "../../../utils/rootNavigationRef";
import {screenTitles} from "../../contents/strings";
import CardSwab from "../../../drawings/resume_cards/cardSwab";

class LatestUpdateComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <MainScrollableContents
                content={
                    <>
                        {/*<CardDate />*/}

                        <TouchableOpacity onPress={() => {navigate(screenTitles.newCases);}}>
                            <CardTotalCases/>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {navigate(screenTitles.recovered);}}>
                            <CardRecovered/>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {navigate(screenTitles.died);}}>
                            <CardDied/>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {navigate(screenTitles.currentPositive);}}>
                            <CardCurrentPositive/>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {navigate(screenTitles.swab);}}>
                            <CardSwab/>
                        </TouchableOpacity>
                    </>
                }
            />
        )
    }

}

export default LatestUpdateComponent;
