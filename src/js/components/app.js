import {
    div,
    addId
} from '../builders';
import navbar from './navbar';
import banner from './banner';

export default function app() {
    const navbarEle = navbar();
    const bannerEle = banner();
    const appEle = addId(div(navbarEle, bannerEle, menuEle), 'app-container');

    return appEle;
}
