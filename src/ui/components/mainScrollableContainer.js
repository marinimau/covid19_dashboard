/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 19/07/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import React from 'react'
import {styles} from "../theme/style";
import {ScrollView, View} from "react-native";
import NotesComponent from "./latest_updates/notesComponent";
import LocationSelector from "./location_selector/locationSelector";

function MainScrollableContents(props) {
    return (
        <>
            <View style={[styles.rootContainer, {position: 'relative'}]}>
                <ScrollView>
                    <View style={[styles.scrollableContainer]}>
                        <LocationSelector />
                        {props.content}

                    </View>
                </ScrollView>
                <NotesComponent/>
            </View>
        </>
    )
        ;
}

export default MainScrollableContents;
