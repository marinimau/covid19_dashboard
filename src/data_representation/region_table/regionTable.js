/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 07/08/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import { DataTable } from 'react-native-paper';
import LoadingScreen from "../../ui/components/loading/splash";
import ErrorScreen from "../../ui/components/loading/error";
import Records from "../../logic/dataset";
import Async from "react-async";
import retrieveRegionData from "../../logic/retrieveRegionData";
import {chartTitles} from "../../ui/contents/strings";

export default class RegionTable extends Component{

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Async promiseFn={retrieveRegionData()}>
                {({data, err, isLoading}) => {
                    if (isLoading) return <LoadingScreen/>
                    if (err) return <ErrorScreen/>
                    if (data) Records.setRegionRecords(data)
                    console.log(Records.getRegionRecords());

                    return (
                        <View style={{marginTop: 10}}>
                            <DataTable>
                                <DataTable.Header>
                                    <DataTable.Title>{chartTitles.regionsTable}</DataTable.Title>
                                    {this.props.data.labels.map(label =>  <DataTable.Title numeric>{label.title}</DataTable.Title>)}
                                </DataTable.Header>

                                {
                                    this.props.data.regions.map((region, index) => (
                                        <DataTable.Row>
                                            <DataTable.Cell>{region}</DataTable.Cell>
                                            <DataTable.Cell numeric>159</DataTable.Cell>
                                            <DataTable.Cell numeric>6.0</DataTable.Cell>
                                        </DataTable.Row>
                                    ))
                                }


                            </DataTable>
                        </View>
                    )
                }
                }
            </Async>
        );
    }

}

