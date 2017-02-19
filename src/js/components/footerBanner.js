import {
    addClass,
    div,
    footer,
    text,
    p
} from '../builders';

export default function footerBanner() {
    const name = p(text('Duc Truong'));
    const content = addClass(div(name), 'content', 'is-centered');

    const container = addClass(div(content), 'container');

    return addClass(footer(container), 'footer');
}
