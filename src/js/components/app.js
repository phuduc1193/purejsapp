import {
    div,
    addId
} from '../builders';
import navbar from './navbar';
import banner from './banner';
import menu from './menu';
import footerBanner from './footerBanner';
import modal from './modal';

export default function app(store) {
    const modalEle = modal(store);
    const navbarEle = navbar();
    const bannerEle = banner();
    const menuEle = menu(store);
    const footerBannerEle = footerBanner();
    const appEle = addId(div(modalEle, navbarEle, bannerEle, menuEle, footerBannerEle), 'app-container');

    return appEle;
}
