import {
    div,
    addId
} from '../builders';
import navbar from './navbar';
import banner from './banner';
import menu from './menu';

export default function app(menuJson) {
    const navbarEle = navbar();
    const bannerEle = banner();
    const menuEle = menu(menuJson);
    const appEle = addId(div(navbarEle, bannerEle, menuEle), 'app-container');

    return appEle;
}
