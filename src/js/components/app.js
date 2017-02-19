import {
    div,
    addId
} from '../builders';
import navbar from './navbar';
import banner from './banner';
import menu from './menu';
import footerBanner from './footerBanner';
import modal from './modal';

export default function app(items) {
    const modalEle = modal(items);
    const navbarEle = navbar();
    const bannerEle = banner();
    const menuEle = menu(items);
    const footerBannerEle = footerBanner();
    const appEle = addId(div(modalEle, navbarEle, bannerEle, menuEle, footerBannerEle), 'app-container');

    return appEle;
}
