/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 16/08/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import React, {Component} from 'react'
import {styles} from "../../theme/style";
import {View, SafeAreaView} from "react-native";
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
                <SafeAreaView>
                    <TextTicker
                        style={{color: Colors.basic}}
                        duration={50000}
                        bounce={false}
                        scroll={true}
                        isInteraction={false}
                        repeatSpacer={50}
                        marqueeDelay={0}
                    >
                        {NotesData().notes}
                    </TextTicker>
                </SafeAreaView>

            </View>
        )
    }

}

export default NotesComponent;