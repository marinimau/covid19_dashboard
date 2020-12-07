/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 03/08/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */


import React from 'react'
import {StackedAreaChart, YAxis, XAxis, Grid} from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import {FlatList, View} from 'react-native'
import {hexToRgb} from "../../utils/colorConverter";
import intervalSelectorFilter from "../../ui/contents/intervalSelectorData";
import {Chip} from "react-native-paper";
import Colors from "../../ui/theme/colors";
import DateLabels from "../../logic/retrieveTimeLabels";
import {styles} from "../../ui/theme/style";
import ChartColorLegend from "./chartColorLegend";
import darkMode from "../../ui/theme/darkModeDetector";

class MyStackAreaChart extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            _1W: true,
            _1M: false,
            _MAX: false,
            data: this.props.data.slice(Math.max(this.props.data.length - 7, 0)),
            filter: 7,
            labels: DateLabels(7).dateLabels,
            x: 0,
            y: 0,
            visible: false,
            value: 0
        };
    }

    activateFilter(filter) {
        this.setState({_1W: false, _1M: false, _MAX: false, visible: false});
        this.setState({[filter.state]: true}, function () {

            this.setState({filter: filter.field}, function () {
                if (this.state.filter === -1) {
                    this.setState({data: this.props.data}, function () {
                        this.setState({labels: DateLabels(this.state.filter).dateLabels});
                    });
                } else {
                    this.setState({data: this.props.data.slice(Math.max(this.props.data.length - this.state.filter, 0))}, function () {
                        this.setState({labels: DateLabels(this.state.filter).dateLabels});
                    });
                }
            });
        });
        this.forceUpdate();
    }

    returnState(stateString) {
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
        const colors = this.props.colors === undefined ? [`rgba(${colorRGB.r}, ${colorRGB.g}, ${colorRGB.b}, 0.9)`, `rgba(${colorRGB.r}, ${colorRGB.g}, ${colorRGB.b}, 0.6)`, `rgba(${colorRGB.r}, ${colorRGB.g}, ${colorRGB.b}, 0.3)`] : this.props.colors
        const keys = this.props.keyValues
        const axesSvg = {fontSize: 12, fill: (darkMode() ? Colors.darkMode_basic : Colors.basic)};
        const gridSvg = {
            fill: darkMode() ? Colors.darkMode_basicTransparent : Colors.basicTransparent,
            strokeDasharray: [5, 8],
            strokeOpacity: 0.6
        }

        return (
            <View>
                <View style={{marginTop: 20}}>
                    <FlatList
                        style={{marginBottom: 20}}
                        data={intervalSelectorFilter}
                        renderItem={({item}) => (
                            <Chip
                                onPress={() => this.activateFilter(item)}
                                selected={this.state.filter === item.state.field}
                                textStyle={{
                                    color: this.returnState(item.state) ? '#fff' : darkMode() ? Colors.darkMode_basic : Colors.basic,
                                    fontWeight: this.returnState(item.state) ? '700' : '400'
                                }}
                                style={[
                                    {
                                        backgroundColor: this.returnState(item.state) ? this.props.color : (darkMode() ? Colors.darkMode_basicTransparent : Colors.basicTransparent),
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
                <View style={{flexDirection: 'row', marginTop: 10, height: 220}}>
                    <View style={{flex: 1, marginLeft: 50}}>
                        <StackedAreaChart
                            style={{flex: 1}}
                            verticalContentInset={{top: 20, bottom: 20}}
                            data={this.state.data}
                            keys={keys}
                            colors={colors}
                            curve={shape.curveLinear}
                            animationDuration={200}
                            numberOfTicks={5}
                            svg={gridSvg}
                        >
                            <Grid
                                direction={Grid.Direction.HORIZONTAL}
                                belowChart={true}
                                svg={gridSvg}
                            />
                        </StackedAreaChart>
                    </View>
                    <YAxis
                        style={{position: 'absolute', top: 0, bottom: 0}}
                        data={StackedAreaChart.extractDataPoints(this.state.data, keys)}
                        contentInset={{top: 10, bottom: 10}}
                        numberOfTicks={5}
                        svg={{
                            fontSize: 12,
                            fill: (darkMode() ? Colors.darkMode_basic : Colors.basic),
                            alignmentBaseline: 'baseline',
                            baselineShift: '3',
                        }}
                    />
                </View>
                <XAxis
                    style={{marginLeft: 50, marginTop: 10, height: 10}}
                    data={this.state.data}
                    numberOfTicks={4}
                    formatLabel={(index) => this.state.data[index].date}
                    contentInset={{left: 10, right: 10}}
                    svg={axesSvg}
                />

                {/* Legend */}
                <View style={styles.legendExternalContainer}>
                    <ChartColorLegend
                        title={this.props.legend[2]}
                        color={colors[0]}/>

                    <ChartColorLegend
                        title={this.props.legend[1]}
                        color={colors[1]}/>

                    <ChartColorLegend
                        title={this.props.legend[0]}
                        color={colors[2]}/>

                </View>

            </View>
        )
    }
}

export default MyStackAreaChart;