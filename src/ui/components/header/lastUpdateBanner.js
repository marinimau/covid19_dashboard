/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 12/08/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import * as React from 'react';
import {Text} from 'react-native';
import { Banner } from 'react-native-paper';
import Colors from "../../theme/colors";
import {styles} from "../../theme/style";
import {chartTitles, dataDescription} from "../../contents/strings";
import latestUpdateData from "../../../logic/latestUpdateData";

const LatestUpdateBanner = () => {
    const [visible, setVisible] = React.useState(true);

    return (
        <Banner
            visible={visible}
            style={{backgroundColor: Colors.mainTransparent, borderBottomWidth: 0.5, borderBottomColor: Colors.mainTransparent}}
            actions={[
                {
                    label: 'OK',
                    color: Colors.main,
                    onPress: () => setVisible(false),
                },
            ]}>
           {chartTitles.lastUpdateDate + latestUpdateData().lastUpdateDate +' '+ dataDescription.lastUpdate}
        </Banner>
    );
};

export default LatestUpdateBanner;