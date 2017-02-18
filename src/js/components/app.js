import {
    div,
    text,
    addId
} from '../builders';

export default function app() {
    const appEle = addId(div(text('Hello World')), 'app-container');

    return appEle;
}
