/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 18/07/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import React from 'react';
import Async from 'react-async';
import Records from "./src/logic/dataset";
import {enableScreens} from 'react-native-screens';
import retrieveData from "./src/logic/retrieveData";
import ErrorScreen from "./src/ui/components/loading/error";
import retrieveRegionData from "./src/logic/retrieveRegionData";
import LoadingComponent from "./src/ui/components/loading/loading";
import GlobalContainer from "./src/ui/components/GlobalContainer";


enableScreens();

export default function App() {

    return (
        <Async promiseFn={retrieveData}>
            {({data, err, isLoading}) => {
                if (isLoading) return <LoadingComponent/>
                if (err) return <ErrorScreen/>
                if (data) Records.setRecords(data)

                return (
                    <Async promiseFn={retrieveRegionData}>
                        {({data, err, isLoading}) => {
                            if (isLoading) return <LoadingComponent/>
                            if (err) return <ErrorScreen/>
                            if (data) Records.setRegionRecords(data)

                            return (
                                <GlobalContainer />
                            )
                        }}
                    </Async>
                )
            }}
        </Async>
    );
}









