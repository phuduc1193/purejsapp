import {
    addClass,
    div,
    img,
    p,
    section,
    text
} from '../builders';

export default function banner() {
    const logo = addClass(img('assets/logo.png'), 'logo');
    const theText = addClass(p(text('The')), 'hero-text-light');
    const pureJsText = addClass(p(text('Pure JavaScript')), 'hero-text-bold');
    const appText = addClass(p(text('Application')), 'hero-text-light');

    const container = addClass(div(logo, theText, pureJsText, appText), 'container');

    const bannerContent = addClass(div(container), 'hero-content');

    return addClass(section(bannerContent), 'hero', 'splash');
}
