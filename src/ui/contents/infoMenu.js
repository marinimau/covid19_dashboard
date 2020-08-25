/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 12/08/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */
import {infoMenuDescriptions, infoMenuTitles} from "./strings";
import RemoteUrls from "./urls";

export const menuLinks = [
    {
        icon: 'gift-outline',
        title: infoMenuTitles.donate,
        description: infoMenuDescriptions.donate,
        url: RemoteUrls.donate
    },
    {
        icon: 'email-outline',
        title: infoMenuTitles.contact,
        description: infoMenuDescriptions.contact,
        url: RemoteUrls.contact
    },
    {
        icon: 'xml',
        title: infoMenuTitles.repository,
        description: infoMenuDescriptions.repository,
        url: RemoteUrls.repository
    },
    {
        icon: 'trending-down',
        title: infoMenuTitles.data,
        description: infoMenuDescriptions.data,
        url: RemoteUrls.data
    },
]