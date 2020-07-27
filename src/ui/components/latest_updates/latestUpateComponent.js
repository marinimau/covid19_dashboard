/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 19/07/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import React, {Component} from 'react';
import {Text, View} from "react-native";
import {styles} from "../../theme/style";
import MainScrollableContents from "../mainScrollableContainer";
import CardTotalCases from "../../../drawings/resume_cards/cardTotalCases";
import CardRecovered from "../../../drawings/resume_cards/cardRecovered";
import CardDied from "../../../drawings/resume_cards/cardDied";
import CardCurrentPositive from "../../../drawings/resume_cards/cardCurrentPositive";

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

                            <CardTotalCases />

                            <CardRecovered />

                            <CardDied />

                            <CardCurrentPositive />
                        </>
                }
            />
        )
    }

}

export default LatestUpdateComponent;
