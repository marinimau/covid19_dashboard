/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 19/07/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import MainScrollableContents from "../mainScrollableContainer";
import CardTotalCases from "../../../data_representation/resume_cards/cardTotalCases";
import CardRecovered from "../../../data_representation/resume_cards/cardRecovered";
import CardDied from "../../../data_representation/resume_cards/cardDied";
import CardCurrentPositive from "../../../data_representation/resume_cards/cardCurrentPositive";
import {navigate} from "../../../utils/rootNavigationRef";
import {appInfo, screenTitles} from "../../contents/strings";
import CardSwab from "../../../data_representation/resume_cards/cardSwab";
import CardDate from "../../../data_representation/resume_cards/cardDate";
import {styles} from "../../theme/style";
import Colors from "../../theme/colors";

class LatestUpdateComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (

            <MainScrollableContents
                content={
                    <>
                        <TouchableOpacity onPress={() => {
                            navigate(screenTitles.newCases);
                        }}>
                            <CardTotalCases/>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            navigate(screenTitles.currentPositive);
                        }}>
                            <CardCurrentPositive/>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => {
                            navigate(screenTitles.recovered);
                        }}>
                            <CardRecovered/>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            navigate(screenTitles.swab);
                        }}>
                            <CardSwab/>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            navigate(screenTitles.died);
                        }}>
                            <CardDied/>
                        </TouchableOpacity>

                        <CardDate/>
                    </>
                }
            />
        )
    }
}

export default LatestUpdateComponent;
