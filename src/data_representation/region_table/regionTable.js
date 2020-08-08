/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 07/08/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import {DataTable} from 'react-native-paper';
import {chartTitles} from "../../ui/contents/strings";

export default class RegionTable extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={{marginTop: 10}}>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>{chartTitles.regionsTable}</DataTable.Title>
                        {this.props.data.labels.map((label, index) =>
                            <DataTable.Title  key={index} numeric>{label.title}</DataTable.Title>)}
                    </DataTable.Header>

                    {
                    this.props.data.regions.map((item, index) => (
                        <DataTable.Row key={index}>
                            <DataTable.Cell>{item}</DataTable.Cell>
                            <DataTable.Cell numeric>159</DataTable.Cell>
                            <DataTable.Cell numeric>6.0</DataTable.Cell>
                        </DataTable.Row>
                    ))
                    }
                </DataTable>
            </View>
        );
    }

}

