/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 29/07/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import {Dimensions, Platform} from "react-native";
import React, {Component} from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {dimens} from "../theme/dimens";
import HeaderLeft from "../components/header/headerMenuButton";
import {styles} from "../theme/style";
import {RegionList} from "../contents/locationsList";
import SelectedLocation from "../../logic/selectedLocation";
import {EventRegister} from "react-native-event-listeners";

const Stack = createStackNavigator();
const dimensions = Dimensions.get('window').width;
let dataChangedListener;


export default class ScreenContainer extends Component  {

    constructor(props) {
        super(props);
        this.state = {location: RegionList[SelectedLocation.getLocation()].label}
    }

    componentWillMount() {
        dataChangedListener = EventRegister.addEventListener('locationChanged', (data) => {
            this.setState({location: RegionList[SelectedLocation.getLocation()].label});
        });
    }

    componentWillUnmount() {
        EventRegister.removeEventListener(dataChangedListener)
    }

    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    options={{
                        headerStyle: [styles.header, styles.headerShadow, {borderBottomColor: 'transparent'}],
                        headerTitleStyle: [styles.headerTitle],
                        headerLeft: dimensions < dimens.largeScreen ? ({}) => <HeaderLeft /> : null,
                        animationEnabled: false,
                        title: this.props.title + ' > ' + this.state.location
                    }}
                    component={() => this.props.component}
                    name={this.props.title + ' > ' + this.state.location}
                />
            </Stack.Navigator>

        );
    }


}


