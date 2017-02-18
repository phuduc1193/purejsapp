(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.text = text;
exports.createElement = createElement;
exports.div = div;
exports.i = i;
exports.span = span;
exports.nav = nav;
exports.section = section;
exports.p = p;
exports.img = img;
exports.addClass = addClass;
exports.addId = addId;
function text(words) {
    return document.createTextNode(words);
}

function createElement(type) {
    var newElement = document.createElement(type);

    for (var _len = arguments.length, children = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        children[_key - 1] = arguments[_key];
    }

    children.forEach(function (child) {
        return newElement.appendChild(child);
    });
    return newElement;
}

function div() {
    for (var _len2 = arguments.length, children = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        children[_key2] = arguments[_key2];
    }

    return createElement.apply(undefined, ['div'].concat(children));
}

function i() {
    for (var _len3 = arguments.length, children = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        children[_key3] = arguments[_key3];
    }

    return createElement.apply(undefined, ['i'].concat(children));
}

function span() {
    for (var _len4 = arguments.length, children = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        children[_key4] = arguments[_key4];
    }

    return createElement.apply(undefined, ['span'].concat(children));
}

function nav() {
    for (var _len5 = arguments.length, children = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        children[_key5] = arguments[_key5];
    }

    return createElement.apply(undefined, ['nav'].concat(children));
}

function section() {
    for (var _len6 = arguments.length, children = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        children[_key6] = arguments[_key6];
    }

    return createElement.apply(undefined, ['section'].concat(children));
}

function p() {
    for (var _len7 = arguments.length, children = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        children[_key7] = arguments[_key7];
    }

    return createElement.apply(undefined, ['p'].concat(children));
}

function img(source) {
    var image = createElement('img');
    image.src = source;
    return image;
}

function addClass(element) {
    var newElement = element.cloneNode(true);

    for (var _len8 = arguments.length, klasses = Array(_len8 > 1 ? _len8 - 1 : 0), _key8 = 1; _key8 < _len8; _key8++) {
        klasses[_key8 - 1] = arguments[_key8];
    }

    klasses.forEach(function (klass) {
        return newElement.classList.add(klass);
    });
    return newElement;
}

function addId(element, id) {
    var newElement = element.cloneNode(true);
    return Object.assign(newElement, {
        id: id
    });
}

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = app;

var _builders = require('../builders');

var _navbar = require('./navbar');

var _navbar2 = _interopRequireDefault(_navbar);

var _banner = require('./banner');

var _banner2 = _interopRequireDefault(_banner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function app() {
    var navbarEle = (0, _navbar2.default)();
    var bannerEle = (0, _banner2.default)();
    var appEle = (0, _builders.addId)((0, _builders.div)(navbarEle, bannerEle, menuEle), 'app-container');

    return appEle;
}

},{"../builders":1,"./banner":3,"./navbar":4}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = banner;

var _builders = require('../builders');

function banner() {
    var logo = (0, _builders.addClass)((0, _builders.img)('assets/logo.png'), 'logo');
    var theText = (0, _builders.addClass)((0, _builders.p)((0, _builders.text)('The')), 'hero-text-light');
    var pureJsText = (0, _builders.addClass)((0, _builders.p)((0, _builders.text)('Pure JavaScript')), 'hero-text-bold');
    var appText = (0, _builders.addClass)((0, _builders.p)((0, _builders.text)('Application')), 'hero-text-light');

    var container = (0, _builders.addClass)((0, _builders.div)(logo, theText, pureJsText, appText), 'container');

    var bannerContent = (0, _builders.addClass)((0, _builders.div)(container), 'hero-content');

    return (0, _builders.addClass)((0, _builders.section)(bannerContent), 'hero', 'splash');
}

},{"../builders":1}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = navbar;

var _builders = require('../builders');

function navbar() {
    var navLeft = (0, _builders.addClass)((0, _builders.div)(), 'navbar-left');

    var cartIcon = (0, _builders.addId)((0, _builders.addClass)((0, _builders.i)(), 'fa', 'fa-shopping-cart'), 'cart-icon');
    var cartItems = (0, _builders.addClass)((0, _builders.span)(), 'cart-items');
    var navbarItem = (0, _builders.addClass)((0, _builders.div)(cartIcon, cartItems), 'navbar-item');
    var navRight = (0, _builders.addClass)((0, _builders.div)(navbarItem), 'navbar-right');

    return (0, _builders.addClass)((0, _builders.nav)(navLeft, navRight), 'navbar');
}

},{"../builders":1}],5:[function(require,module,exports){
'use strict';

var _app = require('./components/app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var body = document.querySelector('body');
body.insertBefore((0, _app2.default)(), body.childNodes[0]);

},{"./components/app":2}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYnVpbGRlcnMuanMiLCJzcmMvanMvY29tcG9uZW50cy9hcHAuanMiLCJzcmMvanMvY29tcG9uZW50cy9iYW5uZXIuanMiLCJzcmMvanMvY29tcG9uZW50cy9uYXZiYXIuanMiLCJzcmMvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztRQ0FnQixJLEdBQUEsSTtRQUlBLGEsR0FBQSxhO1FBTUEsRyxHQUFBLEc7UUFJQSxDLEdBQUEsQztRQUlBLEksR0FBQSxJO1FBSUEsRyxHQUFBLEc7UUFJQSxPLEdBQUEsTztRQUlBLEMsR0FBQSxDO1FBSUEsRyxHQUFBLEc7UUFNQSxRLEdBQUEsUTtRQU1BLEssR0FBQSxLO0FBOUNULFNBQVMsSUFBVCxDQUFjLEtBQWQsRUFBcUI7QUFDeEIsV0FBTyxTQUFTLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBUDtBQUNIOztBQUVNLFNBQVMsYUFBVCxDQUF1QixJQUF2QixFQUEwQztBQUM3QyxRQUFNLGFBQWEsU0FBUyxhQUFULENBQXVCLElBQXZCLENBQW5COztBQUQ2QyxzQ0FBVixRQUFVO0FBQVYsZ0JBQVU7QUFBQTs7QUFFN0MsYUFBUyxPQUFULENBQWlCO0FBQUEsZUFBUyxXQUFXLFdBQVgsQ0FBdUIsS0FBdkIsQ0FBVDtBQUFBLEtBQWpCO0FBQ0EsV0FBTyxVQUFQO0FBQ0g7O0FBRU0sU0FBUyxHQUFULEdBQTBCO0FBQUEsdUNBQVYsUUFBVTtBQUFWLGdCQUFVO0FBQUE7O0FBQzdCLFdBQU8sZ0NBQWMsS0FBZCxTQUF3QixRQUF4QixFQUFQO0FBQ0g7O0FBRU0sU0FBUyxDQUFULEdBQXdCO0FBQUEsdUNBQVYsUUFBVTtBQUFWLGdCQUFVO0FBQUE7O0FBQzNCLFdBQU8sZ0NBQWMsR0FBZCxTQUFzQixRQUF0QixFQUFQO0FBQ0g7O0FBRU0sU0FBUyxJQUFULEdBQTJCO0FBQUEsdUNBQVYsUUFBVTtBQUFWLGdC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LFNBQWQsQ0FBVCxFQUFtQyxhQUFuQyxDQUFuQjtBQUNBLFFBQU0sV0FBVyx3QkFBUyxtQkFBSSxVQUFKLENBQVQsRUFBMEIsY0FBMUIsQ0FBakI7O0FBRUEsV0FBTyx3QkFBUyxtQkFBSSxPQUFKLEVBQWEsUUFBYixDQUFULEVBQWlDLFFBQWpDLENBQVA7QUFDSDs7Ozs7QUNsQkQ7Ozs7OztBQUVBLElBQU0sT0FBTyxTQUFTLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtBQUNBLEtBQUssWUFBTCxDQUFrQixvQkFBbEIsRUFBeUIsS0FBSyxVQUFMLENBQWdCLENBQWhCLENBQXpCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImV4cG9ydCBmdW5jdGlvbiB0ZXh0KHdvcmRzKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHdvcmRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgLi4uY2hpbGRyZW4pIHtcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpKTtcbiAgICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpdiguLi5jaGlsZHJlbikge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdkaXYnLCAuLi5jaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpKC4uLmNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2knLCAuLi5jaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzcGFuKC4uLmNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCAuLi5jaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXYoLi4uY2hpbGRyZW4pIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnbmF2JywgLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VjdGlvbiguLi5jaGlsZHJlbikge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdzZWN0aW9uJywgLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcCguLi5jaGlsZHJlbikge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdwJywgLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW1nKHNvdXJjZSkge1xuICBjb25zdCBpbWFnZSA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWFnZS5zcmMgPSBzb3VyY2U7XG4gIHJldHVybiBpbWFnZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIC4uLmtsYXNzZXMpIHtcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAga2xhc3Nlcy5mb3JFYWNoKGtsYXNzID0+IG5ld0VsZW1lbnQuY2xhc3NMaXN0LmFkZChrbGFzcykpO1xuICAgIHJldHVybiBuZXdFbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkSWQoZWxlbWVudCwgaWQpIHtcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3RWxlbWVudCwge1xuICAgICAgICBpZFxuICAgIH0pO1xufVxuIiwiaW1wb3J0IHtcbiAgICBkaXYsXG4gICAgYWRkSWRcbn0gZnJvbSAnLi4vYnVpbGRlcnMnO1xuaW1wb3J0IG5hdmJhciBmcm9tICcuL25hdmJhcic7XG5pbXBvcnQgYmFubmVyIGZyb20gJy4vYmFubmVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBwKCkge1xuICAgIGNvbnN0IG5hdmJhckVsZSA9IG5hdmJhcigpO1xuICAgIGNvbnN0IGJhbm5lckVsZSA9IGJhbm5lcigpO1xuICAgIGNvbnN0IGFwcEVsZSA9IGFkZElkKGRpdihuYXZiYXJFbGUsIGJhbm5lckVsZSwgbWVudUVsZSksICdhcHAtY29udGFpbmVyJyk7XG5cbiAgICByZXR1cm4gYXBwRWxlO1xufVxuIiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGRpdiwgaW1nLCBwLCBzZWN0aW9uLCB0ZXh0IH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBiYW5uZXIoKSB7XG4gICAgY29uc3QgbG9nbyA9IGFkZENsYXNzKGltZygnYXNzZXRzL2xvZ28ucG5nJyksICdsb2dvJyk7XG4gICAgY29uc3QgdGhlVGV4dCA9IGFkZENsYXNzKHAodGV4dCgnVGhlJykpLCAnaGVyby10ZXh0LWxpZ2h0Jyk7XG4gICAgY29uc3QgcHVyZUpzVGV4dCA9IGFkZENsYXNzKHAodGV4dCgnUHVyZSBKYXZhU2NyaXB0JykpLCAnaGVyby10ZXh0LWJvbGQnKTtcbiAgICBjb25zdCBhcHBUZXh0ID0gYWRkQ2xhc3MocCh0ZXh0KCdBcHBsaWNhdGlvbicpKSwgJ2hlcm8tdGV4dC1saWdodCcpO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gYWRkQ2xhc3MoZGl2KGxvZ28sIHRoZVRleHQsIHB1cmVKc1RleHQsIGFwcFRleHQpLCAnY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBiYW5uZXJDb250ZW50ID0gYWRkQ2xhc3MoZGl2KGNvbnRhaW5lciksICdoZXJvLWNvbnRlbnQnKTtcblxuICAgIHJldHVybiBhZGRDbGFzcyhzZWN0aW9uKGJhbm5lckNvbnRlbnQpLCAnaGVybycsICdzcGxhc2gnKTtcbn1cbiIsImltcG9ydCB7XG4gICAgYWRkQ2xhc3MsXG4gICAgYWRkSWQsXG4gICAgZGl2LFxuICAgIGksXG4gICAgbmF2LFxuICAgIHNwYW5cbn0gZnJvbSAnLi4vYnVpbGRlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuYXZiYXIoKSB7XG4gICAgY29uc3QgbmF2TGVmdCA9IGFkZENsYXNzKGRpdigpLCAnbmF2YmFyLWxlZnQnKTtcblxuICAgIGNvbnN0IGNhcnRJY29uID0gYWRkSWQoYWRkQ2xhc3MoaSgpLCAnZmEnLCAnZmEtc2hvcHBpbmctY2FydCcpLCAnY2FydC1pY29uJyk7XG4gICAgY29uc3QgY2FydEl0ZW1zID0gYWRkQ2xhc3Moc3BhbigpLCAnY2FydC1pdGVtcycpO1xuICAgIGNvbnN0IG5hdmJhckl0ZW0gPSBhZGRDbGFzcyhkaXYoY2FydEljb24sIGNhcnRJdGVtcyksICduYXZiYXItaXRlbScpO1xuICAgIGNvbnN0IG5hdlJpZ2h0ID0gYWRkQ2xhc3MoZGl2KG5hdmJhckl0ZW0pLCAnbmF2YmFyLXJpZ2h0Jyk7XG5cbiAgICByZXR1cm4gYWRkQ2xhc3MobmF2KG5hdkxlZnQsIG5hdlJpZ2h0KSwgJ25hdmJhcicpO1xufVxuIiwiaW1wb3J0IGFwcCBmcm9tICcuL2NvbXBvbmVudHMvYXBwJztcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmJvZHkuaW5zZXJ0QmVmb3JlKGFwcCgpLCBib2R5LmNoaWxkTm9kZXNbMF0pO1xuIl19
