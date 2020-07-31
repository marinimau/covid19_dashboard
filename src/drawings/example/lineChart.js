/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 23/07/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import { Chip } from 'react-native-paper';
import {LineChart} from "react-native-chart-kit";
import {dimens, dynamicDimens} from "../../ui/theme/dimens";
import Colors from "../../ui/theme/colors";
import {hexToRgb} from "../../utils/colorConverter";
import intervalSelectorFilter from "../../ui/contents/intervalSelectorData";

export default class MyLineChart extends Component{

    constructor(props) {
        super(props);
        this.state = {
            _1W: false,
            _1M: false,
            _MAX: true,
        };
    }

    activateFilter(filter){
        this.setState({_1W: false, _1M: false, _MAX: false});
        this.setState({[filter]: true});
    }

    returnState(stateString){
        switch (stateString) {
            case '_1W':
                return this.state._1W;
            case '_1M':
                return this.state._1M;
            case '_MAX':
                return this.state._MAX;
        }
    }



    render() {

        const colorRGB = hexToRgb(this.props.color);
        return (
            <View style={{marginTop: 20}}>

                <View style={{marginTop: 8}}>
                    <FlatList
                        data={intervalSelectorFilter}
                        renderItem={({item}) => (
                            <Chip
                                onPress={() => this.activateFilter(item.state)}
                                selected={this.returnState(item.state)}
                                textStyle={{
                                    color: this.returnState(item.state) ? '#fff' : Colors.basic,
                                    fontWeight:  this.returnState(item.state) ? '700' :'400'
                                }}
                                style={[
                                    {
                                        backgroundColor: this.returnState(item.state) ? this.props.color : this.props.color.basicTransparent,
                                        marginRight: 5,
                                    }]}>
                                {item.name}
                            </Chip>
                        )}
                        numColumns={1}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>

                <LineChart
                    data={{
                        labels: [0,1,2,3,4],
                        datasets: [
                            {
                                data: this.props.data
                            }
                        ]
                    }}
                    width={dynamicDimens.chartFullWidth} // from react-native
                    height={dimens.lineChartHeight}
                    yAxisLabel=""
                    yAxisSuffix=""
                    withVerticalLines={false}
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                        backgroundColor: Colors.basicElevation,
                        backgroundGradientFrom: Colors.basicElevation,
                        backgroundGradientTo: Colors.basicElevation,
                        decimalPlaces: 0, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(${colorRGB.r}, ${colorRGB.g}, ${colorRGB.b}, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "0",
                            strokeWidth: "0",
                            stroke: Colors.basicElevation
                        }
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
                    }}
                />

            </View>

        );
    }
}