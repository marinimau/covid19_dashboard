/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 07/08/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import RemoteUrls from "../ui/contents/urls";

const retrieveRegionData = () => {
    fetch(RemoteUrls.regions)
        .then(res => (res.ok ? res : Promise.reject(res)))
        .then(res => res.json());
}

export default retrieveRegionData;

