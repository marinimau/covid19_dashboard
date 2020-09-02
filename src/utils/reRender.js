/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 02/09/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 28/07/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import * as React from 'react';


export const componentRef = React.createRef();

export function reRender() {
    componentRef.current?.forceUpdate();
}