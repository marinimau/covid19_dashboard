/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 16/08/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import React, {PureComponent} from 'react'
import {styles} from "../../theme/style";
import {View, SafeAreaView, Platform} from "react-native";
import NotesData from "../../../logic/notesData";
import Colors from "../../theme/colors";
import TextTicker from "react-native-text-ticker";
import MarqueeText from "react-native-marquee";


class NotesComponent extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <View style={[styles.notesContainer]}>
                <SafeAreaView>
                    {Platform.OS === 'web' ?
                        <MarqueeText
                            style={{color: Colors.basicElevation}}
                            duration={3000}
                            marqueeOnStart
                            loop
                            marqueeDelay={1000}
                            marqueeResetDelay={1000}
                        >
                            {NotesData().notes}
                        </MarqueeText>
                        :
                        <TextTicker
                            style={{color: Colors.basicElevation}}
                            duration={50000}
                            bounce={false}
                            scroll={true}
                            isInteraction={false}
                            repeatSpacer={50}
                            marqueeDelay={0}
                            loop
                        >
                            {NotesData().notes}
                        </TextTicker>
                    }
                </SafeAreaView>

            </View>
        )
    }

}

export default NotesComponent;