/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 16/08/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import React, {Component} from 'react'
import {styles} from "../../theme/style";
import {View} from "react-native";
import NotesData from "../../../logic/notesData";
import Colors from "../../theme/colors";
import TextTicker from "react-native-text-ticker";


class NotesComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <View style={[styles.notesContainer]}>
                <TextTicker
                    style={{color: Colors.basicElevation}}
                    duration={11000}
                    bounce={true}
                    scroll={true}
                    isInteraction={false}
                    repeatSpacer={150}
                    marqueeDelay={100}
                >
                    {NotesData().notes}
                </TextTicker>
            </View>
        )
    }

}

export default NotesComponent;