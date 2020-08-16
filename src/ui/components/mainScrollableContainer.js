/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 19/07/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import React from 'react'
import {styles} from "../theme/style";
import {ScrollView, View, Platform} from "react-native";
import NotesComponent from "./latest_updates/notesComponent";

function MainScrollableContents(props) {
    return (
        <>
            <View style={[styles.rootContainer, {position: 'relative'}]}>
                <ScrollView>
                    <View style={[styles.scrollableContainer]}>

                        {props.content}

                    </View>
                </ScrollView>
                {Platform.OS !== 'web' ? <NotesComponent/> : <></>}
            </View>
        </>
    )
        ;
}

export default MainScrollableContents;
