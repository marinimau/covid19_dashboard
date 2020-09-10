/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 19/07/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import React, {Component} from 'react'
import {styles} from "../theme/style";
import {ScrollView, View} from "react-native";
import NotesComponent from "./latest_updates/notesComponent";
import LocationSelector from "./location_selector/locationSelector";

export default class MainScrollableContents extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <View style={[styles.rootContainer, {position: 'relative'}]}>
                    <ScrollView>
                        <View style={[styles.scrollableContainer]}>
                            <LocationSelector />
                            {this.props.children}
                        </View>
                    </ScrollView>
                    <NotesComponent/>
                </View>
            </>
        );
    }
}

