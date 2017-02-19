import {
    div,
    addId
} from '../builders';
import navbar from './navbar';
import banner from './banner';
import menu from './menu';
import footerBanner from './footerBanner';

export default function app(menuJson) {
    const navbarEle = navbar();
    const bannerEle = banner();
    const menuEle = menu(menuJson);
    const footerBannerEle = footerBanner();
    const appEle = addId(div(navbarEle, bannerEle, menuEle, footerBannerEle), 'app-container');

    return appEle;
}
