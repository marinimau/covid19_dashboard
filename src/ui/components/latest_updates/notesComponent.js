/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 16/08/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import React, {PureComponent} from 'react'
import {styles} from "../../theme/style";
import {View, SafeAreaView, Platform, Dimensions} from "react-native";
import NotesData from "../../../logic/notesData";
import Colors from "../../theme/colors";
import TextTicker from "react-native-text-ticker";
import {dimens} from "../../theme/dimens";

let windowWidth = Dimensions.get("window").width;

class NotesComponent extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <View style={[styles.notesContainer]}>
                    {Platform.OS === 'web' ?
                        <TextTicker
                            style={{width: (windowWidth > dimens.largeScreen ? windowWidth - dimens.drawerWidth : windowWidth), color: Colors.basicElevation}}
                            duration={50000}
                            bounce={false}
                            scroll={true}
                            isInteraction={false}
                            useNativeDriver={false}
                            repeatSpacer={50}
                            marqueeDelay={0}
                            loop
                        >
                            {NotesData().notes}
                        </TextTicker>
                        :
                        <SafeAreaView>
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
                        </SafeAreaView>
                    }
            </View>
        )
    }

}

export default NotesComponent;