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
exports.ul = ul;
exports.li = li;
exports.section = section;
exports.p = p;
exports.h1 = h1;
exports.h3 = h3;
exports.article = article;
exports.button = button;
exports.footer = footer;
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

function ul() {
    for (var _len6 = arguments.length, children = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        children[_key6] = arguments[_key6];
    }

    return createElement.apply(undefined, ['ul'].concat(children));
}

function li() {
    for (var _len7 = arguments.length, children = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        children[_key7] = arguments[_key7];
    }

    return createElement.apply(undefined, ['li'].concat(children));
}

function section() {
    for (var _len8 = arguments.length, children = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        children[_key8] = arguments[_key8];
    }

    return createElement.apply(undefined, ['section'].concat(children));
}

function p() {
    for (var _len9 = arguments.length, children = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        children[_key9] = arguments[_key9];
    }

    return createElement.apply(undefined, ['p'].concat(children));
}

function h1() {
    for (var _len10 = arguments.length, children = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        children[_key10] = arguments[_key10];
    }

    return createElement.apply(undefined, ['h1'].concat(children));
}

function h3() {
    for (var _len11 = arguments.length, children = Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
        children[_key11] = arguments[_key11];
    }

    return createElement.apply(undefined, ['h3'].concat(children));
}

function article() {
    for (var _len12 = arguments.length, children = Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
        children[_key12] = arguments[_key12];
    }

    return createElement.apply(undefined, ['article'].concat(children));
}

function button() {
    for (var _len13 = arguments.length, children = Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
        children[_key13] = arguments[_key13];
    }

    return createElement.apply(undefined, ['button'].concat(children));
}

function footer() {
    for (var _len14 = arguments.length, children = Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
        children[_key14] = arguments[_key14];
    }

    return createElement.apply(undefined, ['footer'].concat(children));
}

function img(source) {
    var image = createElement('img');
    image.src = source;
    return image;
}

function addClass(element) {
    var newElement = element.cloneNode(true);

    for (var _len15 = arguments.length, klasses = Array(_len15 > 1 ? _len15 - 1 : 0), _key15 = 1; _key15 < _len15; _key15++) {
        klasses[_key15 - 1] = arguments[_key15];
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

var _menu = require('./menu');

var _menu2 = _interopRequireDefault(_menu);

var _footerBanner = require('./footerBanner');

var _footerBanner2 = _interopRequireDefault(_footerBanner);

var _modal = require('./modal');

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function app(items) {
    var modalEle = (0, _modal2.default)(items);
    var navbarEle = (0, _navbar2.default)();
    var bannerEle = (0, _banner2.default)();
    var menuEle = (0, _menu2.default)(items);
    var footerBannerEle = (0, _footerBanner2.default)();
    var appEle = (0, _builders.addId)((0, _builders.div)(modalEle, navbarEle, bannerEle, menuEle, footerBannerEle), 'app-container');

    return appEle;
}

},{"../builders":1,"./banner":3,"./footerBanner":4,"./menu":6,"./modal":9,"./navbar":11}],3:[function(require,module,exports){
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
exports.default = footerBanner;

var _builders = require('../builders');

function footerBanner() {
    var name = (0, _builders.p)((0, _builders.text)('Duc Truong'));
    var content = (0, _builders.addClass)((0, _builders.div)(name), 'content', 'is-centered');

    var container = (0, _builders.addClass)((0, _builders.div)(content), 'container');

    return (0, _builders.addClass)((0, _builders.footer)(container), 'footer');
}

},{"../builders":1}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = leftMenu;

var _builders = require('../builders');

var _helpers = require('../helpers');

var _menuList = require('./menuList');

var _menuList2 = _interopRequireDefault(_menuList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function leftMenu() {
    var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    var appetizers = (0, _menuList2.default)('Appetizers', (0, _helpers.filterByType)(items, 'appetizer'));
    var burgers = (0, _menuList2.default)('Burgers', (0, _helpers.filterByType)(items, 'burger'));

    return (0, _builders.addClass)((0, _builders.div)(appetizers, burgers), 'column', 'is-6');
}

},{"../builders":1,"../helpers":13,"./menuList":8}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = menu;

var _builders = require('../builders');

var _leftMenu = require('./leftMenu');

var _leftMenu2 = _interopRequireDefault(_leftMenu);

var _rightMenu = require('./rightMenu');

var _rightMenu2 = _interopRequireDefault(_rightMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function menu() {
    var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    var leftSide = (0, _leftMenu2.default)(items);
    var rightSide = (0, _rightMenu2.default)(items);
    var columns = (0, _builders.addClass)((0, _builders.section)(leftSide, rightSide), 'columns');
    var menuEle = (0, _builders.addId)((0, _builders.addClass)((0, _builders.div)(columns), 'container'), 'menu');

    return menuEle;
}

},{"../builders":1,"./leftMenu":5,"./rightMenu":12}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = menuItem;

var _builders = require('../builders');

var _helpers = require('../helpers');

function menuItem() {
    var itemData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var name = (0, _builders.addClass)((0, _builders.h3)((0, _builders.text)(itemData.name)), 'name');
    var price = (0, _builders.addClass)((0, _builders.span)((0, _builders.text)('$' + (0, _helpers.formatPrice)(itemData.price))), 'price', 'is-pulled-right');
    var description = (0, _builders.addClass)((0, _builders.p)((0, _builders.text)(itemData.description)), 'desc');
    var addToCart = (0, _builders.addClass)((0, _builders.button)((0, _builders.text)('Add to Cart')), 'button', 'is-pulled-right', 'add-to-cart');

    var mediaContent = (0, _builders.addClass)((0, _builders.div)(name, price, description, addToCart), 'media-content');

    var item = (0, _builders.addClass)((0, _builders.article)(mediaContent), 'media', 'menu_item');
    item.dataset.key = itemData.id;

    return item;
}

},{"../builders":1,"../helpers":13}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = menuList;

var _builders = require('../builders');

var _menuItem = require('./menuItem');

var _menuItem2 = _interopRequireDefault(_menuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function menuList(headline) {
    var items = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    var menuItems = items.map(_menuItem2.default);

    var title = (0, _builders.addClass)((0, _builders.h1)((0, _builders.text)(headline)), 'title');

    return (0, _builders.addClass)(_builders.div.apply(undefined, [title].concat(_toConsumableArray(menuItems))), 'collection');
}

},{"../builders":1,"./menuItem":7}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = modal;

var _builders = require('../builders');

var _modalItem = require('./modalItem');

var _modalItem2 = _interopRequireDefault(_modalItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function modal() {
    var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    var close = (0, _builders.addId)((0, _builders.addClass)((0, _builders.i)(), 'fa', 'fa-times', 'close'), 'close');
    var title = (0, _builders.addClass)((0, _builders.h1)((0, _builders.text)('Cart')), 'title');

    var cart = void 0;
    if (items.length === 0) {
        cart = (0, _builders.p)((0, _builders.text)('Your cart is empty.'));
    } else {
        var modalItems = items.map(_modalItem2.default);
        cart = (0, _builders.addClass)(_builders.ul.apply(undefined, _toConsumableArray(modalItems)), 'menu');
    }

    var cartContainer = (0, _builders.addId)((0, _builders.div)(cart), 'cart-items');

    var checkoutButton = (0, _builders.addClass)((0, _builders.button)((0, _builders.text)('Checkout')), 'button', 'is-fullwidth');

    var modalContainer = (0, _builders.addClass)((0, _builders.div)(close, title, cartContainer, checkoutButton), 'modal-container');

    var modalEle = (0, _builders.addId)((0, _builders.addClass)((0, _builders.section)(modalContainer), 'modal'), 'modal');

    return modalEle;
}

},{"../builders":1,"./modalItem":10}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = modalItem;

var _builders = require('../builders');

var _helpers = require('../helpers');

function modalItem(itemData) {
    var name = (0, _builders.addClass)((0, _builders.span)((0, _builders.text)(itemData.name)), 'name');
    var price = (0, _builders.addClass)((0, _builders.span)((0, _builders.text)((0, _helpers.formatPrice)(itemData.price))), 'price', 'is-pulled-right');
    var removeButton = (0, _builders.addClass)((0, _builders.i)(), 'fa', 'fa-times', 'remove');

    var item = (0, _builders.addClass)((0, _builders.li)(name, price, removeButton), 'menu-item');
    item.dataset.key = itemData.id;

    return item;
}

},{"../builders":1,"../helpers":13}],11:[function(require,module,exports){
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

},{"../builders":1}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = rightMenu;

var _builders = require('../builders');

var _helpers = require('../helpers');

var _menuList = require('./menuList');

var _menuList2 = _interopRequireDefault(_menuList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function rightMenu() {
    var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    var appetizers = (0, _menuList2.default)('Soups and Salads', (0, _helpers.filterByType)(items, 'soup_salad'));
    var desserts = (0, _menuList2.default)('Desserts', (0, _helpers.filterByType)(items, 'dessert'));

    return (0, _builders.addClass)((0, _builders.div)(appetizers, desserts), 'column', 'is-6');
}

},{"../builders":1,"../helpers":13,"./menuList":8}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.filterByType = filterByType;
exports.formatPrice = formatPrice;
function filterByType(items, type) {
    return items.filter(function (item) {
        return item.type === type;
    });
}

function formatPrice(price) {
    return parseFloat(price).toFixed(2);
}

},{}],14:[function(require,module,exports){
'use strict';

var _app = require('./components/app');

var _app2 = _interopRequireDefault(_app);

var _state = require('./state');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function reducer(state, event, data) {
    switch (event) {
        case 'FOO':
            return Object.assign({}, state, {
                name: 'alex'
            });
        case 'BAR':
            return Object.assign({}, state, data);
        default:
            return state;
    }
}

var store = (0, _state.createStore)(reducer);

store.on('FOO', function (state) {
    console.log('in FOO callback');
    console.log('state', state);
});

store.on('BAR', function (state) {
    console.log('in BAR callback');
    console.log('state', state);
});

store.on('NOT_REAL', function (state) {
    console.log('in NOT_REAL callback');
    console.log('state', state);
});

store.trigger('BAR', {
    name: 'frank',
    job: 'web developer'
});
store.trigger('FOO');
store.trigger('NOT_REAL');

fetch('food.json').then(function (res) {
    return res.json();
}).then(function (resBody) {
    var body = document.querySelector('body');
    body.insertBefore((0, _app2.default)(resBody), body.childNodes[0]);
});

},{"./components/app":2,"./state":15}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createStore = createStore;
var defaultState = {
    items: {},
    cart: new Set(),
    cartVisible: false
};

function createStore(reducer) {
    var listeners = {};
    var state = Object.assign({}, defaultState);

    function on(event, callback) {
        if (!listeners[event]) {
            listeners[event] = [];
        }

        listeners[event].push(callback);
    }

    function trigger(event) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        state = reducer(state, event, data);

        if (listeners[event]) {
            listeners[event].forEach(function (callback) {
                callback(state);
            });
        }
    }

    return {
        on: on,
        trigger: trigger
    };
}

},{}]},{},[14])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYnVpbGRlcnMuanMiLCJzcmMvanMvY29tcG9uZW50cy9hcHAuanMiLCJzcmMvanMvY29tcG9uZW50cy9iYW5uZXIuanMiLCJzcmMvanMvY29tcG9uZW50cy9mb290ZXJCYW5uZXIuanMiLCJzcmMvanMvY29tcG9uZW50cy9sZWZ0TWVudS5qcyIsInNyYy9qcy9jb21wb25lbnRzL21lbnUuanMiLCJzcmMvanMvY29tcG9uZW50cy9tZW51SXRlbS5qcyIsInNyYy9qcy9jb21wb25lbnRzL21lbnVMaXN0LmpzIiwic3JjL2pzL2NvbXBvbmVudHMvbW9kYWwuanMiLCJzcmMvanMvY29tcG9uZW50cy9tb2RhbEl0ZW0uanMiLCJzcmMvanMvY29tcG9uZW50cy9uYXZiYXIuanMiLCJzcmMvanMvY29tcG9uZW50cy9yaWdodE1lbnUuanMiLCJzcmMvanMvaGVscGVycy5qcyIsInNyYy9qcy9pbmRleC5qcyIsInNyYy9qcy9zdGF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O1FDQWdCLEksR0FBQSxJO1FBSUEsYSxHQUFBLGE7UUFNQSxHLEdBQUEsRztRQUlBLEMsR0FBQSxDO1FBSUEsSSxHQUFBLEk7UUFJQSxHLEdBQUEsRztRQUlBLEUsR0FBQSxFO1FBSUEsRSxHQUFBLEU7UUFJQSxPLEdBQUEsTztRQUlBLEMsR0FBQSxDO1FBSUEsRSxHQUFBLEU7UUFJQSxFLEdBQUEsRTtRQUlBLE8sR0FBQSxPO1FBSUEsTSxHQUFBLE07UUFJQSxNLEdBQUEsTTtRQUlBLEcsR0FBQSxHO1FBTUEsUSxHQUFBLFE7UUFNQSxLLEdBQUEsSztBQTFFVCxTQUFTLElBQVQsQ0FBYyxLQUFkLEVBQXFCO0FBQ3hCLFdBQU8sU0FBUyxjQUFULENBQXdCLEtBQXhCLENBQVA7QUFDSDs7QUFFTSxTQUFTLGFBQVQsQ0FBdUIsSUFBdkIsRUFBMEM7QUFDN0MsUUFBTSxhQUFhLFNBQVMs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RUFBbUM7QUFBQSxZQUFYLElBQVcsdUVBQUosRUFBSTs7QUFDL0IsZ0JBQVEsUUFBUSxLQUFSLEVBQWUsS0FBZixFQUFzQixJQUF0QixDQUFSOztBQUVBLFlBQUksVUFBVSxLQUFWLENBQUosRUFBc0I7QUFDbEIsc0JBQVUsS0FBVixFQUFpQixPQUFqQixDQUF5QixvQkFBWTtBQUNqQyx5QkFBUyxLQUFUO0FBQ0gsYUFGRDtBQUdIO0FBQ0o7O0FBRUQsV0FBTztBQUNILGNBREc7QUFFSDtBQUZHLEtBQVA7QUFJSCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnQgZnVuY3Rpb24gdGV4dCh3b3Jkcykge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh3b3Jkcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIC4uLmNoaWxkcmVuKSB7XG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiBuZXdFbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkKSk7XG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXYoLi4uY2hpbGRyZW4pIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnZGl2JywgLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaSguLi5jaGlsZHJlbikge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdpJywgLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3BhbiguLi5jaGlsZHJlbikge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdzcGFuJywgLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmF2KC4uLmNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ25hdicsIC4uLmNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVsKC4uLmNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ3VsJywgLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGkoLi4uY2hpbGRyZW4pIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnbGknLCAuLi5jaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN0aW9uKC4uLmNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nLCAuLi5jaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwKC4uLmNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ3AnLCAuLi5jaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoMSguLi5jaGlsZHJlbikge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdoMScsIC4uLmNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGgzKC4uLmNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2gzJywgLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJ0aWNsZSguLi5jaGlsZHJlbikge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdhcnRpY2xlJywgLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnV0dG9uKC4uLmNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIC4uLmNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvb3RlciguLi5jaGlsZHJlbikge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdmb290ZXInLCAuLi5jaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbWcoc291cmNlKSB7XG4gIGNvbnN0IGltYWdlID0gY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltYWdlLnNyYyA9IHNvdXJjZTtcbiAgcmV0dXJuIGltYWdlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbWVudCwgLi4ua2xhc3Nlcykge1xuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBlbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICBrbGFzc2VzLmZvckVhY2goa2xhc3MgPT4gbmV3RWxlbWVudC5jbGFzc0xpc3QuYWRkKGtsYXNzKSk7XG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRJZChlbGVtZW50LCBpZCkge1xuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBlbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXdFbGVtZW50LCB7XG4gICAgICAgIGlkXG4gICAgfSk7XG59XG4iLCJpbXBvcnQge1xuICAgIGRpdixcbiAgICBhZGRJZFxufSBmcm9tICcuLi9idWlsZGVycyc7XG5pbXBvcnQgbmF2YmFyIGZyb20gJy4vbmF2YmFyJztcbmltcG9ydCBiYW5uZXIgZnJvbSAnLi9iYW5uZXInO1xuaW1wb3J0IG1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCBmb290ZXJCYW5uZXIgZnJvbSAnLi9mb290ZXJCYW5uZXInO1xuaW1wb3J0IG1vZGFsIGZyb20gJy4vbW9kYWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcHAoaXRlbXMpIHtcbiAgICBjb25zdCBtb2RhbEVsZSA9IG1vZGFsKGl0ZW1zKTtcbiAgICBjb25zdCBuYXZiYXJFbGUgPSBuYXZiYXIoKTtcbiAgICBjb25zdCBiYW5uZXJFbGUgPSBiYW5uZXIoKTtcbiAgICBjb25zdCBtZW51RWxlID0gbWVudShpdGVtcyk7XG4gICAgY29uc3QgZm9vdGVyQmFubmVyRWxlID0gZm9vdGVyQmFubmVyKCk7XG4gICAgY29uc3QgYXBwRWxlID0gYWRkSWQoZGl2KG1vZGFsRWxlLCBuYXZiYXJFbGUsIGJhbm5lckVsZSwgbWVudUVsZSwgZm9vdGVyQmFubmVyRWxlKSwgJ2FwcC1jb250YWluZXInKTtcblxuICAgIHJldHVybiBhcHBFbGU7XG59XG4iLCJpbXBvcnQge1xuICAgIGFkZENsYXNzLFxuICAgIGRpdixcbiAgICBpbWcsXG4gICAgcCxcbiAgICBzZWN0aW9uLFxuICAgIHRleHRcbn0gZnJvbSAnLi4vYnVpbGRlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBiYW5uZXIoKSB7XG4gICAgY29uc3QgbG9nbyA9IGFkZENsYXNzKGltZygnYXNzZXRzL2xvZ28ucG5nJyksICdsb2dvJyk7XG4gICAgY29uc3QgdGhlVGV4dCA9IGFkZENsYXNzKHAodGV4dCgnVGhlJykpLCAnaGVyby10ZXh0LWxpZ2h0Jyk7XG4gICAgY29uc3QgcHVyZUpzVGV4dCA9IGFkZENsYXNzKHAodGV4dCgnUHVyZSBKYXZhU2NyaXB0JykpLCAnaGVyby10ZXh0LWJvbGQnKTtcbiAgICBjb25zdCBhcHBUZXh0ID0gYWRkQ2xhc3MocCh0ZXh0KCdBcHBsaWNhdGlvbicpKSwgJ2hlcm8tdGV4dC1saWdodCcpO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gYWRkQ2xhc3MoZGl2KGxvZ28sIHRoZVRleHQsIHB1cmVKc1RleHQsIGFwcFRleHQpLCAnY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBiYW5uZXJDb250ZW50ID0gYWRkQ2xhc3MoZGl2KGNvbnRhaW5lciksICdoZXJvLWNvbnRlbnQnKTtcblxuICAgIHJldHVybiBhZGRDbGFzcyhzZWN0aW9uKGJhbm5lckNvbnRlbnQpLCAnaGVybycsICdzcGxhc2gnKTtcbn1cbiIsImltcG9ydCB7XG4gICAgYWRkQ2xhc3MsXG4gICAgZGl2LFxuICAgIGZvb3RlcixcbiAgICB0ZXh0LFxuICAgIHBcbn0gZnJvbSAnLi4vYnVpbGRlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb290ZXJCYW5uZXIoKSB7XG4gICAgY29uc3QgbmFtZSA9IHAodGV4dCgnRHVjIFRydW9uZycpKTtcbiAgICBjb25zdCBjb250ZW50ID0gYWRkQ2xhc3MoZGl2KG5hbWUpLCAnY29udGVudCcsICdpcy1jZW50ZXJlZCcpO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gYWRkQ2xhc3MoZGl2KGNvbnRlbnQpLCAnY29udGFpbmVyJyk7XG5cbiAgICByZXR1cm4gYWRkQ2xhc3MoZm9vdGVyKGNvbnRhaW5lciksICdmb290ZXInKTtcbn1cbiIsImltcG9ydCB7XG4gICAgYWRkQ2xhc3MsXG4gICAgZGl2XG59IGZyb20gJy4uL2J1aWxkZXJzJztcbmltcG9ydCB7XG4gICAgZmlsdGVyQnlUeXBlXG59IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IG1lbnVMaXN0IGZyb20gJy4vbWVudUxpc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsZWZ0TWVudShpdGVtcyA9IFtdKSB7XG4gICAgY29uc3QgYXBwZXRpemVycyA9IG1lbnVMaXN0KCdBcHBldGl6ZXJzJywgZmlsdGVyQnlUeXBlKGl0ZW1zLCAnYXBwZXRpemVyJykpO1xuICAgIGNvbnN0IGJ1cmdlcnMgPSBtZW51TGlzdCgnQnVyZ2VycycsIGZpbHRlckJ5VHlwZShpdGVtcywgJ2J1cmdlcicpKTtcblxuICAgIHJldHVybiBhZGRDbGFzcyhkaXYoYXBwZXRpemVycywgYnVyZ2VycyksICdjb2x1bW4nLCAnaXMtNicpO1xufVxuIiwiaW1wb3J0IHtcbiAgICBhZGRDbGFzcyxcbiAgICBhZGRJZCxcbiAgICBkaXYsXG4gICAgc2VjdGlvblxufSBmcm9tICcuLi9idWlsZGVycyc7XG5pbXBvcnQgbGVmdE1lbnUgZnJvbSAnLi9sZWZ0TWVudSc7XG5pbXBvcnQgcmlnaHRNZW51IGZyb20gJy4vcmlnaHRNZW51JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudShpdGVtcyA9IFtdKSB7XG4gICAgY29uc3QgbGVmdFNpZGUgPSBsZWZ0TWVudShpdGVtcyk7XG4gICAgY29uc3QgcmlnaHRTaWRlID0gcmlnaHRNZW51KGl0ZW1zKTtcbiAgICBjb25zdCBjb2x1bW5zID0gYWRkQ2xhc3Moc2VjdGlvbihsZWZ0U2lkZSwgcmlnaHRTaWRlKSwgJ2NvbHVtbnMnKTtcbiAgICBjb25zdCBtZW51RWxlID0gYWRkSWQoYWRkQ2xhc3MoZGl2KGNvbHVtbnMpLCAnY29udGFpbmVyJyksICdtZW51Jyk7XG5cbiAgICByZXR1cm4gbWVudUVsZTtcbn1cbiIsImltcG9ydCB7XG4gICAgYWRkQ2xhc3MsXG4gICAgYXJ0aWNsZSxcbiAgICBidXR0b24sXG4gICAgZGl2LFxuICAgIGgzLFxuICAgIHAsXG4gICAgc3BhbixcbiAgICB0ZXh0XG59IGZyb20gJy4uL2J1aWxkZXJzJztcbmltcG9ydCB7XG4gICAgZm9ybWF0UHJpY2Vcbn0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnVJdGVtKGl0ZW1EYXRhID0ge30pIHtcbiAgICBjb25zdCBuYW1lID0gYWRkQ2xhc3MoaDModGV4dChpdGVtRGF0YS5uYW1lKSksICduYW1lJyk7XG4gICAgY29uc3QgcHJpY2UgPSBhZGRDbGFzcyhzcGFuKHRleHQoYCQke2Zvcm1hdFByaWNlKGl0ZW1EYXRhLnByaWNlKX1gKSksICdwcmljZScsICdpcy1wdWxsZWQtcmlnaHQnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGFkZENsYXNzKHAodGV4dChpdGVtRGF0YS5kZXNjcmlwdGlvbikpLCAnZGVzYycpO1xuICAgIGNvbnN0IGFkZFRvQ2FydCA9IGFkZENsYXNzKGJ1dHRvbih0ZXh0KCdBZGQgdG8gQ2FydCcpKSwgJ2J1dHRvbicsICdpcy1wdWxsZWQtcmlnaHQnLCAnYWRkLXRvLWNhcnQnKTtcblxuICAgIGNvbnN0IG1lZGlhQ29udGVudCA9IGFkZENsYXNzKGRpdihuYW1lLCBwcmljZSwgZGVzY3JpcHRpb24sIGFkZFRvQ2FydCksICdtZWRpYS1jb250ZW50Jyk7XG5cbiAgICBjb25zdCBpdGVtID0gYWRkQ2xhc3MoYXJ0aWNsZShtZWRpYUNvbnRlbnQpLCAnbWVkaWEnLCAnbWVudV9pdGVtJyk7XG4gICAgaXRlbS5kYXRhc2V0LmtleSA9IGl0ZW1EYXRhLmlkO1xuXG4gICAgcmV0dXJuIGl0ZW07XG59XG4iLCJpbXBvcnQge1xuICAgIGFkZENsYXNzLFxuICAgIGRpdixcbiAgICBoMSxcbiAgICB0ZXh0XG59IGZyb20gJy4uL2J1aWxkZXJzJztcbmltcG9ydCBtZW51SXRlbSBmcm9tICcuL21lbnVJdGVtJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudUxpc3QoaGVhZGxpbmUsIGl0ZW1zID0gW10pIHtcbiAgICBjb25zdCBtZW51SXRlbXMgPSBpdGVtcy5tYXAobWVudUl0ZW0pO1xuXG4gICAgY29uc3QgdGl0bGUgPSBhZGRDbGFzcyhoMSh0ZXh0KGhlYWRsaW5lKSksICd0aXRsZScpO1xuXG4gICAgcmV0dXJuIGFkZENsYXNzKGRpdih0aXRsZSwgLi4ubWVudUl0ZW1zKSwgJ2NvbGxlY3Rpb24nKTtcbn1cbiIsImltcG9ydCB7XG4gICAgYWRkQ2xhc3MsXG4gICAgYWRkSWQsXG4gICAgYnV0dG9uLFxuICAgIGRpdixcbiAgICBoMSxcbiAgICBpLFxuICAgIHAsXG4gICAgc2VjdGlvbixcbiAgICB0ZXh0LFxuICAgIHVsXG59IGZyb20gJy4uL2J1aWxkZXJzJztcbmltcG9ydCBtb2RhbEl0ZW0gZnJvbSAnLi9tb2RhbEl0ZW0nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb2RhbChpdGVtcyA9IFtdKSB7XG4gICAgY29uc3QgY2xvc2UgPSBhZGRJZChhZGRDbGFzcyhpKCksICdmYScsICdmYS10aW1lcycsICdjbG9zZScpLCAnY2xvc2UnKTtcbiAgICBjb25zdCB0aXRsZSA9IGFkZENsYXNzKGgxKHRleHQoJ0NhcnQnKSksICd0aXRsZScpO1xuXG4gICAgbGV0IGNhcnQ7XG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjYXJ0ID0gcCh0ZXh0KCdZb3VyIGNhcnQgaXMgZW1wdHkuJykpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1vZGFsSXRlbXMgPSBpdGVtcy5tYXAobW9kYWxJdGVtKTtcbiAgICAgICAgY2FydCA9IGFkZENsYXNzKHVsKC4uLm1vZGFsSXRlbXMpLCAnbWVudScpO1xuICAgIH1cblxuICAgIGNvbnN0IGNhcnRDb250YWluZXIgPSBhZGRJZChkaXYoY2FydCksICdjYXJ0LWl0ZW1zJyk7XG5cbiAgICBjb25zdCBjaGVja291dEJ1dHRvbiA9IGFkZENsYXNzKGJ1dHRvbih0ZXh0KCdDaGVja291dCcpKSwgJ2J1dHRvbicsICdpcy1mdWxsd2lkdGgnKTtcblxuICAgIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gYWRkQ2xhc3MoZGl2KGNsb3NlLCB0aXRsZSwgY2FydENvbnRhaW5lciwgY2hlY2tvdXRCdXR0b24pLCAnbW9kYWwtY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBtb2RhbEVsZSA9IGFkZElkKGFkZENsYXNzKHNlY3Rpb24obW9kYWxDb250YWluZXIpLCAnbW9kYWwnKSwgJ21vZGFsJyk7XG5cbiAgICByZXR1cm4gbW9kYWxFbGU7XG59XG4iLCJpbXBvcnQge1xuICAgIGFkZENsYXNzLFxuICAgIGksXG4gICAgbGksXG4gICAgc3BhbixcbiAgICB0ZXh0XG59IGZyb20gJy4uL2J1aWxkZXJzJztcbmltcG9ydCB7XG4gICAgZm9ybWF0UHJpY2Vcbn0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vZGFsSXRlbShpdGVtRGF0YSkge1xuICAgIGNvbnN0IG5hbWUgPSBhZGRDbGFzcyhzcGFuKHRleHQoaXRlbURhdGEubmFtZSkpLCAnbmFtZScpO1xuICAgIGNvbnN0IHByaWNlID0gYWRkQ2xhc3Moc3Bhbih0ZXh0KGZvcm1hdFByaWNlKGl0ZW1EYXRhLnByaWNlKSkpLCAncHJpY2UnLCAnaXMtcHVsbGVkLXJpZ2h0Jyk7XG4gICAgY29uc3QgcmVtb3ZlQnV0dG9uID0gYWRkQ2xhc3MoaSgpLCAnZmEnLCAnZmEtdGltZXMnLCAncmVtb3ZlJyk7XG5cbiAgICBjb25zdCBpdGVtID0gYWRkQ2xhc3MobGkobmFtZSwgcHJpY2UsIHJlbW92ZUJ1dHRvbiksICdtZW51LWl0ZW0nKTtcbiAgICBpdGVtLmRhdGFzZXQua2V5ID0gaXRlbURhdGEuaWQ7XG5cbiAgICByZXR1cm4gaXRlbTtcbn1cbiIsImltcG9ydCB7XG4gICAgYWRkQ2xhc3MsXG4gICAgYWRkSWQsXG4gICAgZGl2LFxuICAgIGksXG4gICAgbmF2LFxuICAgIHNwYW5cbn0gZnJvbSAnLi4vYnVpbGRlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuYXZiYXIoKSB7XG4gICAgY29uc3QgbmF2TGVmdCA9IGFkZENsYXNzKGRpdigpLCAnbmF2YmFyLWxlZnQnKTtcblxuICAgIGNvbnN0IGNhcnRJY29uID0gYWRkSWQoYWRkQ2xhc3MoaSgpLCAnZmEnLCAnZmEtc2hvcHBpbmctY2FydCcpLCAnY2FydC1pY29uJyk7XG4gICAgY29uc3QgY2FydEl0ZW1zID0gYWRkQ2xhc3Moc3BhbigpLCAnY2FydC1pdGVtcycpO1xuICAgIGNvbnN0IG5hdmJhckl0ZW0gPSBhZGRDbGFzcyhkaXYoY2FydEljb24sIGNhcnRJdGVtcyksICduYXZiYXItaXRlbScpO1xuICAgIGNvbnN0IG5hdlJpZ2h0ID0gYWRkQ2xhc3MoZGl2KG5hdmJhckl0ZW0pLCAnbmF2YmFyLXJpZ2h0Jyk7XG5cbiAgICByZXR1cm4gYWRkQ2xhc3MobmF2KG5hdkxlZnQsIG5hdlJpZ2h0KSwgJ25hdmJhcicpO1xufVxuIiwiaW1wb3J0IHtcbiAgICBhZGRDbGFzcyxcbiAgICBkaXZcbn0gZnJvbSAnLi4vYnVpbGRlcnMnO1xuaW1wb3J0IHtcbiAgICBmaWx0ZXJCeVR5cGVcbn0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgbWVudUxpc3QgZnJvbSAnLi9tZW51TGlzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJpZ2h0TWVudShpdGVtcyA9IFtdKSB7XG4gICAgY29uc3QgYXBwZXRpemVycyA9IG1lbnVMaXN0KCdTb3VwcyBhbmQgU2FsYWRzJywgZmlsdGVyQnlUeXBlKGl0ZW1zLCAnc291cF9zYWxhZCcpKTtcbiAgICBjb25zdCBkZXNzZXJ0cyA9IG1lbnVMaXN0KCdEZXNzZXJ0cycsIGZpbHRlckJ5VHlwZShpdGVtcywgJ2Rlc3NlcnQnKSk7XG5cbiAgICByZXR1cm4gYWRkQ2xhc3MoZGl2KGFwcGV0aXplcnMsIGRlc3NlcnRzKSwgJ2NvbHVtbicsICdpcy02Jyk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZmlsdGVyQnlUeXBlKGl0ZW1zLCB0eXBlKSB7XG4gICAgcmV0dXJuIGl0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0udHlwZSA9PT0gdHlwZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRQcmljZShwcmljZSkge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHByaWNlKS50b0ZpeGVkKDIpO1xufVxuIiwiaW1wb3J0IGFwcCBmcm9tICcuL2NvbXBvbmVudHMvYXBwJztcbmltcG9ydCB7XG4gICAgY3JlYXRlU3RvcmVcbn0gZnJvbSAnLi9zdGF0ZSc7XG5cbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIGV2ZW50LCBkYXRhKSB7XG4gICAgc3dpdGNoIChldmVudCkge1xuICAgICAgICBjYXNlICdGT08nOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2FsZXgnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIGNhc2UgJ0JBUic6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIGRhdGEpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyKTtcblxuc3RvcmUub24oJ0ZPTycsIHN0YXRlID0+IHtcbiAgICBjb25zb2xlLmxvZygnaW4gRk9PIGNhbGxiYWNrJyk7XG4gICAgY29uc29sZS5sb2coJ3N0YXRlJywgc3RhdGUpO1xufSk7XG5cbnN0b3JlLm9uKCdCQVInLCBzdGF0ZSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2luIEJBUiBjYWxsYmFjaycpO1xuICAgIGNvbnNvbGUubG9nKCdzdGF0ZScsIHN0YXRlKTtcbn0pO1xuXG5zdG9yZS5vbignTk9UX1JFQUwnLCBzdGF0ZSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2luIE5PVF9SRUFMIGNhbGxiYWNrJyk7XG4gICAgY29uc29sZS5sb2coJ3N0YXRlJywgc3RhdGUpO1xufSk7XG5cbnN0b3JlLnRyaWdnZXIoJ0JBUicsIHtcbiAgICBuYW1lOiAnZnJhbmsnLFxuICAgIGpvYjogJ3dlYiBkZXZlbG9wZXInLFxufSk7XG5zdG9yZS50cmlnZ2VyKCdGT08nKTtcbnN0b3JlLnRyaWdnZXIoJ05PVF9SRUFMJyk7XG5cbmZldGNoKCdmb29kLmpzb24nKVxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgIC50aGVuKHJlc0JvZHkgPT4ge1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgICAgICBib2R5Lmluc2VydEJlZm9yZShhcHAocmVzQm9keSksIGJvZHkuY2hpbGROb2Rlc1swXSk7XG4gICAgfSk7XG4iLCJjb25zdCBkZWZhdWx0U3RhdGUgPSB7XG4gICAgaXRlbXM6IHt9LFxuICAgIGNhcnQ6IChuZXcgU2V0KCkpLFxuICAgIGNhcnRWaXNpYmxlOiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RvcmUocmVkdWNlcikge1xuICAgIGNvbnN0IGxpc3RlbmVycyA9IHt9O1xuICAgIGxldCBzdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRTdGF0ZSk7XG5cbiAgICBmdW5jdGlvbiBvbihldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnNbZXZlbnRdKSB7XG4gICAgICAgICAgICBsaXN0ZW5lcnNbZXZlbnRdID0gW107XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0ZW5lcnNbZXZlbnRdLnB1c2goY2FsbGJhY2spO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyaWdnZXIoZXZlbnQsIGRhdGEgPSB7fSkge1xuICAgICAgICBzdGF0ZSA9IHJlZHVjZXIoc3RhdGUsIGV2ZW50LCBkYXRhKTtcblxuICAgICAgICBpZiAobGlzdGVuZXJzW2V2ZW50XSkge1xuICAgICAgICAgICAgbGlzdGVuZXJzW2V2ZW50XS5mb3JFYWNoKGNhbGxiYWNrID0+IHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhzdGF0ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG9uLFxuICAgICAgICB0cmlnZ2VyXG4gICAgfTtcbn1cbiJdfQ==
