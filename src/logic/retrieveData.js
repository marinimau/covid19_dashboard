/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 18/07/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */
import RemoteUrls from "../ui/contents/urls";


const retrieveData = () =>
    fetch(RemoteUrls.national)
        .then(res => (res.ok ? res : Promise.reject(res)))
        .then(res => res.json());

export default retrieveData;

