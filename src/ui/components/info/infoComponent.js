/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 12/08/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import React, {Component} from 'react';
import MainScrollableContents from "../mainScrollableContainer";
import {styles} from "../../theme/style";
import {Text, View} from "react-native";
import {appInfo, infoMenuTitles} from "../../contents/strings";
import {List, Divider} from 'react-native-paper';
import Colors from "../../theme/colors";
import {menuLinks} from "../../contents/infoMenu";
import {openLink} from "../../../utils/linking";
import darkMode from "../../theme/darkModeDetector";

class InfoComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <MainScrollableContents>
                <>
                    <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig, {
                        paddingTop: 0,
                        paddingLeft: 0,
                        paddingRight: 0
                    }]}>
                        <Text style={[styles.infoDescription]}>
                            {appInfo.description}
                        </Text>
                    </View>

                    <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig, {
                        paddingTop: 0,
                        paddingLeft: 0,
                        paddingRight: 0
                    }]}>
                        <List.Section>
                            <List.Subheader style={{color: (darkMode() ? Colors.darkMode_basic : Colors.basic)}}>{infoMenuTitles.sectionLinks}</List.Subheader>
                            {
                                menuLinks.map((item, i) => (
                                    <>
                                        <List.Item
                                            titleStyle={{color: (darkMode() ? Colors.darkMode_basic : Colors.basic)}}
                                            title={item.title}
                                            descriptionStyle={{color: (darkMode() ? Colors.darkMode_basic : Colors.basic)}}
                                            description={item.description}
                                            onPress={() => openLink(item.url)}
                                            left={() => <List.Icon color={(darkMode() ? Colors.darkMode_icons : Colors.icons)} icon={item.icon}/>}
                                            right={() => <List.Icon color={(darkMode() ? Colors.darkMode_icons : Colors.icons)} icon="chevron-right"/>}
                                        />
                                        <Divider inset={true}/>
                                    </>
                                ))
                            }

                        </List.Section>
                        <Text style={[styles.chartDescription, {color: (darkMode() ? Colors.darkMode_icons : Colors.icons)}]}>
                            {appInfo.name + ' - ' + appInfo.version}
                        </Text>
                        <Text style={[styles.chartDescription, {marginTop: 5, color: (darkMode() ? Colors.darkMode_icons : Colors.icons)}]}>
                            {'copyright © 2020 ' + appInfo.author }
                        </Text>
                    </View>
                </>
            </MainScrollableContents>
        )
    }

}

export default InfoComponent;