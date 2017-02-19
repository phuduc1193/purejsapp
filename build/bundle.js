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

function app(store) {
    var modalEle = (0, _modal2.default)();
    var navbarEle = (0, _navbar2.default)();
    var bannerEle = (0, _banner2.default)();
    var menuEle = (0, _menu2.default)(store);
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

var _helpers = require('../helpers');

var _leftMenu = require('./leftMenu');

var _leftMenu2 = _interopRequireDefault(_leftMenu);

var _rightMenu = require('./rightMenu');

var _rightMenu2 = _interopRequireDefault(_rightMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function menu(store) {
    var menuEle = (0, _builders.addId)((0, _builders.addClass)((0, _builders.div)(), 'container'), 'menu');

    store.on('SET_ITEMS', function (_ref) {
        var items = _ref.items;

        var leftSide = (0, _leftMenu2.default)(items);
        var rightSide = (0, _rightMenu2.default)(items);
        var columns = (0, _builders.addClass)((0, _builders.section)(leftSide, rightSide), 'columns');
        (0, _helpers.$)('#menu').children(columns);
    });

    return menuEle;
}

},{"../builders":1,"../helpers":13,"./leftMenu":5,"./rightMenu":12}],7:[function(require,module,exports){
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
exports.$ = $;
function filterByType(map, type) {
    return Object.keys(map).filter(function (key) {
        return map[key].type === type;
    }).map(function (key) {
        return map[key];
    });
}

function formatPrice(price) {
    return parseFloat(price).toFixed(2);
}

function $(query) {
    var elements = Array.prototype.slice.call(document.querySelectorAll(query));

    function children(toAdd) {
        elements.forEach(function (ele) {
            while (ele.firstChild) {
                ele.removeChild(ele.firstChild);
            }

            ele.appendChild(toAdd);
        });
    }

    return {
        children: children
    };
}

},{}],14:[function(require,module,exports){
'use strict';

var _app = require('./components/app');

var _app2 = _interopRequireDefault(_app);

var _state = require('./state');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function reducer(state, event, data) {
    switch (event) {
        case 'SET_ITEMS':
            return Object.assign({}, state, {
                items: data.items.reduce(function (total, item) {
                    return Object.assign({}, total, _defineProperty({}, item.id, item));
                }, {})
            });
        default:
            return state;
    }
}

var store = (0, _state.createStore)(reducer);

fetch('food.json').then(function (res) {
    return res.json();
}).then(function (resBody) {
    var body = document.querySelector('body');
    body.insertBefore((0, _app2.default)(store), body.childNodes[0]);
    store.trigger('SET_ITEMS', {
        items: resBody
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYnVpbGRlcnMuanMiLCJzcmMvanMvY29tcG9uZW50cy9hcHAuanMiLCJzcmMvanMvY29tcG9uZW50cy9iYW5uZXIuanMiLCJzcmMvanMvY29tcG9uZW50cy9mb290ZXJCYW5uZXIuanMiLCJzcmMvanMvY29tcG9uZW50cy9sZWZ0TWVudS5qcyIsInNyYy9qcy9jb21wb25lbnRzL21lbnUuanMiLCJzcmMvanMvY29tcG9uZW50cy9tZW51SXRlbS5qcyIsInNyYy9qcy9jb21wb25lbnRzL21lbnVMaXN0LmpzIiwic3JjL2pzL2NvbXBvbmVudHMvbW9kYWwuanMiLCJzcmMvanMvY29tcG9uZW50cy9tb2RhbEl0ZW0uanMiLCJzcmMvanMvY29tcG9uZW50cy9uYXZiYXIuanMiLCJzcmMvanMvY29tcG9uZW50cy9yaWdodE1lbnUuanMiLCJzcmMvanMvaGVscGVycy5qcyIsInNyYy9qcy9pbmRleC5qcyIsInNyYy9qcy9zdGF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O1FDQWdCLEksR0FBQSxJO1FBSUEsYSxHQUFBLGE7UUFNQSxHLEdBQUEsRztRQUlBLEMsR0FBQSxDO1FBSUEsSSxHQUFBLEk7UUFJQSxHLEdBQUEsRztRQUlBLEUsR0FBQSxFO1FBSUEsRSxHQUFBLEU7UUFJQSxPLEdBQUEsTztRQUlBLEMsR0FBQSxDO1FBSUEsRSxHQUFBLEU7UUFJQSxFLEdBQUEsRTtRQUlBLE8sR0FBQSxPO1FBSUEsTSxHQUFBLE07UUFJQSxNLEdBQUEsTTtRQUlBLEcsR0FBQSxHO1FBTUEsUSxHQUFBLFE7UUFNQSxLLEdBQUEsSztBQTFFVCxTQUFTLElBQVQsQ0FBYyxLQUFkLEVBQXFCO0FBQ3hCLFdBQU8sU0FBUyxjQUFULENBQXdCLEtBQXhCLENBQVA7QUFDSDs7QUFFTSxTQUFTLGFBQVQsQ0FBdUIsSUFBdkIsRUFBMEM7QUFDN0MsUUFBTSxhQUFhLFNBQVMs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Q0FBWSxLQUFaLEVBQW1CLFFBQW5CLEVBQTZCO0FBQ3pCLFlBQUksQ0FBQyxVQUFVLEtBQVYsQ0FBTCxFQUF1QjtBQUNuQixzQkFBVSxLQUFWLElBQW1CLEVBQW5CO0FBQ0g7O0FBRUQsa0JBQVUsS0FBVixFQUFpQixJQUFqQixDQUFzQixRQUF0QjtBQUNIOztBQUVELGFBQVMsT0FBVCxDQUFpQixLQUFqQixFQUFtQztBQUFBLFlBQVgsSUFBVyx1RUFBSixFQUFJOztBQUMvQixnQkFBUSxRQUFRLEtBQVIsRUFBZSxLQUFmLEVBQXNCLElBQXRCLENBQVI7O0FBRUEsWUFBSSxVQUFVLEtBQVYsQ0FBSixFQUFzQjtBQUNsQixzQkFBVSxLQUFWLEVBQWlCLE9BQWpCLENBQXlCLG9CQUFZO0FBQ2pDLHlCQUFTLEtBQVQ7QUFDSCxhQUZEO0FBR0g7QUFDSjs7QUFFRCxXQUFPO0FBQ0gsY0FERztBQUVIO0FBRkcsS0FBUDtBQUlIIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImV4cG9ydCBmdW5jdGlvbiB0ZXh0KHdvcmRzKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHdvcmRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgLi4uY2hpbGRyZW4pIHtcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpKTtcbiAgICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpdiguLi5jaGlsZHJlbikge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdkaXYnLCAuLi5jaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpKC4uLmNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2knLCAuLi5jaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzcGFuKC4uLmNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCAuLi5jaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXYoLi4uY2hpbGRyZW4pIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnbmF2JywgLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdWwoLi4uY2hpbGRyZW4pIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgndWwnLCAuLi5jaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaSguLi5jaGlsZHJlbikge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdsaScsIC4uLmNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY3Rpb24oLi4uY2hpbGRyZW4pIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnc2VjdGlvbicsIC4uLmNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHAoLi4uY2hpbGRyZW4pIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgncCcsIC4uLmNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGgxKC4uLmNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2gxJywgLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaDMoLi4uY2hpbGRyZW4pIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnaDMnLCAuLi5jaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnRpY2xlKC4uLmNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnLCAuLi5jaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidXR0b24oLi4uY2hpbGRyZW4pIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9vdGVyKC4uLmNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicsIC4uLmNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGltZyhzb3VyY2UpIHtcbiAgY29uc3QgaW1hZ2UgPSBjcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1hZ2Uuc3JjID0gc291cmNlO1xuICByZXR1cm4gaW1hZ2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCAuLi5rbGFzc2VzKSB7XG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgIGtsYXNzZXMuZm9yRWFjaChrbGFzcyA9PiBuZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQoa2xhc3MpKTtcbiAgICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZElkKGVsZW1lbnQsIGlkKSB7XG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKG5ld0VsZW1lbnQsIHtcbiAgICAgICAgaWRcbiAgICB9KTtcbn1cbiIsImltcG9ydCB7XG4gICAgZGl2LFxuICAgIGFkZElkXG59IGZyb20gJy4uL2J1aWxkZXJzJztcbmltcG9ydCBuYXZiYXIgZnJvbSAnLi9uYXZiYXInO1xuaW1wb3J0IGJhbm5lciBmcm9tICcuL2Jhbm5lcic7XG5pbXBvcnQgbWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IGZvb3RlckJhbm5lciBmcm9tICcuL2Zvb3RlckJhbm5lcic7XG5pbXBvcnQgbW9kYWwgZnJvbSAnLi9tb2RhbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcChzdG9yZSkge1xuICAgIGNvbnN0IG1vZGFsRWxlID0gbW9kYWwoKTtcbiAgICBjb25zdCBuYXZiYXJFbGUgPSBuYXZiYXIoKTtcbiAgICBjb25zdCBiYW5uZXJFbGUgPSBiYW5uZXIoKTtcbiAgICBjb25zdCBtZW51RWxlID0gbWVudShzdG9yZSk7XG4gICAgY29uc3QgZm9vdGVyQmFubmVyRWxlID0gZm9vdGVyQmFubmVyKCk7XG4gICAgY29uc3QgYXBwRWxlID0gYWRkSWQoZGl2KG1vZGFsRWxlLCBuYXZiYXJFbGUsIGJhbm5lckVsZSwgbWVudUVsZSwgZm9vdGVyQmFubmVyRWxlKSwgJ2FwcC1jb250YWluZXInKTtcblxuICAgIHJldHVybiBhcHBFbGU7XG59XG4iLCJpbXBvcnQge1xuICAgIGFkZENsYXNzLFxuICAgIGRpdixcbiAgICBpbWcsXG4gICAgcCxcbiAgICBzZWN0aW9uLFxuICAgIHRleHRcbn0gZnJvbSAnLi4vYnVpbGRlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBiYW5uZXIoKSB7XG4gICAgY29uc3QgbG9nbyA9IGFkZENsYXNzKGltZygnYXNzZXRzL2xvZ28ucG5nJyksICdsb2dvJyk7XG4gICAgY29uc3QgdGhlVGV4dCA9IGFkZENsYXNzKHAodGV4dCgnVGhlJykpLCAnaGVyby10ZXh0LWxpZ2h0Jyk7XG4gICAgY29uc3QgcHVyZUpzVGV4dCA9IGFkZENsYXNzKHAodGV4dCgnUHVyZSBKYXZhU2NyaXB0JykpLCAnaGVyby10ZXh0LWJvbGQnKTtcbiAgICBjb25zdCBhcHBUZXh0ID0gYWRkQ2xhc3MocCh0ZXh0KCdBcHBsaWNhdGlvbicpKSwgJ2hlcm8tdGV4dC1saWdodCcpO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gYWRkQ2xhc3MoZGl2KGxvZ28sIHRoZVRleHQsIHB1cmVKc1RleHQsIGFwcFRleHQpLCAnY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBiYW5uZXJDb250ZW50ID0gYWRkQ2xhc3MoZGl2KGNvbnRhaW5lciksICdoZXJvLWNvbnRlbnQnKTtcblxuICAgIHJldHVybiBhZGRDbGFzcyhzZWN0aW9uKGJhbm5lckNvbnRlbnQpLCAnaGVybycsICdzcGxhc2gnKTtcbn1cbiIsImltcG9ydCB7XG4gICAgYWRkQ2xhc3MsXG4gICAgZGl2LFxuICAgIGZvb3RlcixcbiAgICB0ZXh0LFxuICAgIHBcbn0gZnJvbSAnLi4vYnVpbGRlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb290ZXJCYW5uZXIoKSB7XG4gICAgY29uc3QgbmFtZSA9IHAodGV4dCgnRHVjIFRydW9uZycpKTtcbiAgICBjb25zdCBjb250ZW50ID0gYWRkQ2xhc3MoZGl2KG5hbWUpLCAnY29udGVudCcsICdpcy1jZW50ZXJlZCcpO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gYWRkQ2xhc3MoZGl2KGNvbnRlbnQpLCAnY29udGFpbmVyJyk7XG5cbiAgICByZXR1cm4gYWRkQ2xhc3MoZm9vdGVyKGNvbnRhaW5lciksICdmb290ZXInKTtcbn1cbiIsImltcG9ydCB7XG4gICAgYWRkQ2xhc3MsXG4gICAgZGl2XG59IGZyb20gJy4uL2J1aWxkZXJzJztcbmltcG9ydCB7XG4gICAgZmlsdGVyQnlUeXBlXG59IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IG1lbnVMaXN0IGZyb20gJy4vbWVudUxpc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsZWZ0TWVudShpdGVtcyA9IFtdKSB7XG4gICAgY29uc3QgYXBwZXRpemVycyA9IG1lbnVMaXN0KCdBcHBldGl6ZXJzJywgZmlsdGVyQnlUeXBlKGl0ZW1zLCAnYXBwZXRpemVyJykpO1xuICAgIGNvbnN0IGJ1cmdlcnMgPSBtZW51TGlzdCgnQnVyZ2VycycsIGZpbHRlckJ5VHlwZShpdGVtcywgJ2J1cmdlcicpKTtcblxuICAgIHJldHVybiBhZGRDbGFzcyhkaXYoYXBwZXRpemVycywgYnVyZ2VycyksICdjb2x1bW4nLCAnaXMtNicpO1xufVxuIiwiaW1wb3J0IHtcbiAgICBhZGRDbGFzcyxcbiAgICBhZGRJZCxcbiAgICBkaXYsXG4gICAgc2VjdGlvblxufSBmcm9tICcuLi9idWlsZGVycyc7XG5pbXBvcnQge1xuICAgICRcbn0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgbGVmdE1lbnUgZnJvbSAnLi9sZWZ0TWVudSc7XG5pbXBvcnQgcmlnaHRNZW51IGZyb20gJy4vcmlnaHRNZW51JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudShzdG9yZSkge1xuICAgIGNvbnN0IG1lbnVFbGUgPSBhZGRJZChhZGRDbGFzcyhkaXYoKSwgJ2NvbnRhaW5lcicpLCAnbWVudScpO1xuXG4gICAgc3RvcmUub24oJ1NFVF9JVEVNUycsICh7XG4gICAgICAgIGl0ZW1zXG4gICAgfSkgPT4ge1xuICAgICAgICBjb25zdCBsZWZ0U2lkZSA9IGxlZnRNZW51KGl0ZW1zKTtcbiAgICAgICAgY29uc3QgcmlnaHRTaWRlID0gcmlnaHRNZW51KGl0ZW1zKTtcbiAgICAgICAgY29uc3QgY29sdW1ucyA9IGFkZENsYXNzKHNlY3Rpb24obGVmdFNpZGUsIHJpZ2h0U2lkZSksICdjb2x1bW5zJyk7XG4gICAgICAgICQoJyNtZW51JykuY2hpbGRyZW4oY29sdW1ucyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWVudUVsZTtcbn1cbiIsImltcG9ydCB7XG4gICAgYWRkQ2xhc3MsXG4gICAgYXJ0aWNsZSxcbiAgICBidXR0b24sXG4gICAgZGl2LFxuICAgIGgzLFxuICAgIHAsXG4gICAgc3BhbixcbiAgICB0ZXh0XG59IGZyb20gJy4uL2J1aWxkZXJzJztcbmltcG9ydCB7XG4gICAgZm9ybWF0UHJpY2Vcbn0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnVJdGVtKGl0ZW1EYXRhID0ge30pIHtcbiAgICBjb25zdCBuYW1lID0gYWRkQ2xhc3MoaDModGV4dChpdGVtRGF0YS5uYW1lKSksICduYW1lJyk7XG4gICAgY29uc3QgcHJpY2UgPSBhZGRDbGFzcyhzcGFuKHRleHQoYCQke2Zvcm1hdFByaWNlKGl0ZW1EYXRhLnByaWNlKX1gKSksICdwcmljZScsICdpcy1wdWxsZWQtcmlnaHQnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGFkZENsYXNzKHAodGV4dChpdGVtRGF0YS5kZXNjcmlwdGlvbikpLCAnZGVzYycpO1xuICAgIGNvbnN0IGFkZFRvQ2FydCA9IGFkZENsYXNzKGJ1dHRvbih0ZXh0KCdBZGQgdG8gQ2FydCcpKSwgJ2J1dHRvbicsICdpcy1wdWxsZWQtcmlnaHQnLCAnYWRkLXRvLWNhcnQnKTtcblxuICAgIGNvbnN0IG1lZGlhQ29udGVudCA9IGFkZENsYXNzKGRpdihuYW1lLCBwcmljZSwgZGVzY3JpcHRpb24sIGFkZFRvQ2FydCksICdtZWRpYS1jb250ZW50Jyk7XG5cbiAgICBjb25zdCBpdGVtID0gYWRkQ2xhc3MoYXJ0aWNsZShtZWRpYUNvbnRlbnQpLCAnbWVkaWEnLCAnbWVudV9pdGVtJyk7XG4gICAgaXRlbS5kYXRhc2V0LmtleSA9IGl0ZW1EYXRhLmlkO1xuXG4gICAgcmV0dXJuIGl0ZW07XG59XG4iLCJpbXBvcnQge1xuICAgIGFkZENsYXNzLFxuICAgIGRpdixcbiAgICBoMSxcbiAgICB0ZXh0XG59IGZyb20gJy4uL2J1aWxkZXJzJztcbmltcG9ydCBtZW51SXRlbSBmcm9tICcuL21lbnVJdGVtJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudUxpc3QoaGVhZGxpbmUsIGl0ZW1zID0gW10pIHtcbiAgICBjb25zdCBtZW51SXRlbXMgPSBpdGVtcy5tYXAobWVudUl0ZW0pO1xuXG4gICAgY29uc3QgdGl0bGUgPSBhZGRDbGFzcyhoMSh0ZXh0KGhlYWRsaW5lKSksICd0aXRsZScpO1xuXG4gICAgcmV0dXJuIGFkZENsYXNzKGRpdih0aXRsZSwgLi4ubWVudUl0ZW1zKSwgJ2NvbGxlY3Rpb24nKTtcbn1cbiIsImltcG9ydCB7XG4gICAgYWRkQ2xhc3MsXG4gICAgYWRkSWQsXG4gICAgYnV0dG9uLFxuICAgIGRpdixcbiAgICBoMSxcbiAgICBpLFxuICAgIHAsXG4gICAgc2VjdGlvbixcbiAgICB0ZXh0LFxuICAgIHVsXG59IGZyb20gJy4uL2J1aWxkZXJzJztcbmltcG9ydCBtb2RhbEl0ZW0gZnJvbSAnLi9tb2RhbEl0ZW0nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb2RhbChpdGVtcyA9IFtdKSB7XG4gICAgY29uc3QgY2xvc2UgPSBhZGRJZChhZGRDbGFzcyhpKCksICdmYScsICdmYS10aW1lcycsICdjbG9zZScpLCAnY2xvc2UnKTtcbiAgICBjb25zdCB0aXRsZSA9IGFkZENsYXNzKGgxKHRleHQoJ0NhcnQnKSksICd0aXRsZScpO1xuXG4gICAgbGV0IGNhcnQ7XG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjYXJ0ID0gcCh0ZXh0KCdZb3VyIGNhcnQgaXMgZW1wdHkuJykpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1vZGFsSXRlbXMgPSBpdGVtcy5tYXAobW9kYWxJdGVtKTtcbiAgICAgICAgY2FydCA9IGFkZENsYXNzKHVsKC4uLm1vZGFsSXRlbXMpLCAnbWVudScpO1xuICAgIH1cblxuICAgIGNvbnN0IGNhcnRDb250YWluZXIgPSBhZGRJZChkaXYoY2FydCksICdjYXJ0LWl0ZW1zJyk7XG5cbiAgICBjb25zdCBjaGVja291dEJ1dHRvbiA9IGFkZENsYXNzKGJ1dHRvbih0ZXh0KCdDaGVja291dCcpKSwgJ2J1dHRvbicsICdpcy1mdWxsd2lkdGgnKTtcblxuICAgIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gYWRkQ2xhc3MoZGl2KGNsb3NlLCB0aXRsZSwgY2FydENvbnRhaW5lciwgY2hlY2tvdXRCdXR0b24pLCAnbW9kYWwtY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBtb2RhbEVsZSA9IGFkZElkKGFkZENsYXNzKHNlY3Rpb24obW9kYWxDb250YWluZXIpLCAnbW9kYWwnKSwgJ21vZGFsJyk7XG5cbiAgICByZXR1cm4gbW9kYWxFbGU7XG59XG4iLCJpbXBvcnQge1xuICAgIGFkZENsYXNzLFxuICAgIGksXG4gICAgbGksXG4gICAgc3BhbixcbiAgICB0ZXh0XG59IGZyb20gJy4uL2J1aWxkZXJzJztcbmltcG9ydCB7XG4gICAgZm9ybWF0UHJpY2Vcbn0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vZGFsSXRlbShpdGVtRGF0YSkge1xuICAgIGNvbnN0IG5hbWUgPSBhZGRDbGFzcyhzcGFuKHRleHQoaXRlbURhdGEubmFtZSkpLCAnbmFtZScpO1xuICAgIGNvbnN0IHByaWNlID0gYWRkQ2xhc3Moc3Bhbih0ZXh0KGZvcm1hdFByaWNlKGl0ZW1EYXRhLnByaWNlKSkpLCAncHJpY2UnLCAnaXMtcHVsbGVkLXJpZ2h0Jyk7XG4gICAgY29uc3QgcmVtb3ZlQnV0dG9uID0gYWRkQ2xhc3MoaSgpLCAnZmEnLCAnZmEtdGltZXMnLCAncmVtb3ZlJyk7XG5cbiAgICBjb25zdCBpdGVtID0gYWRkQ2xhc3MobGkobmFtZSwgcHJpY2UsIHJlbW92ZUJ1dHRvbiksICdtZW51LWl0ZW0nKTtcbiAgICBpdGVtLmRhdGFzZXQua2V5ID0gaXRlbURhdGEuaWQ7XG5cbiAgICByZXR1cm4gaXRlbTtcbn1cbiIsImltcG9ydCB7XG4gICAgYWRkQ2xhc3MsXG4gICAgYWRkSWQsXG4gICAgZGl2LFxuICAgIGksXG4gICAgbmF2LFxuICAgIHNwYW5cbn0gZnJvbSAnLi4vYnVpbGRlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuYXZiYXIoKSB7XG4gICAgY29uc3QgbmF2TGVmdCA9IGFkZENsYXNzKGRpdigpLCAnbmF2YmFyLWxlZnQnKTtcblxuICAgIGNvbnN0IGNhcnRJY29uID0gYWRkSWQoYWRkQ2xhc3MoaSgpLCAnZmEnLCAnZmEtc2hvcHBpbmctY2FydCcpLCAnY2FydC1pY29uJyk7XG4gICAgY29uc3QgY2FydEl0ZW1zID0gYWRkQ2xhc3Moc3BhbigpLCAnY2FydC1pdGVtcycpO1xuICAgIGNvbnN0IG5hdmJhckl0ZW0gPSBhZGRDbGFzcyhkaXYoY2FydEljb24sIGNhcnRJdGVtcyksICduYXZiYXItaXRlbScpO1xuICAgIGNvbnN0IG5hdlJpZ2h0ID0gYWRkQ2xhc3MoZGl2KG5hdmJhckl0ZW0pLCAnbmF2YmFyLXJpZ2h0Jyk7XG5cbiAgICByZXR1cm4gYWRkQ2xhc3MobmF2KG5hdkxlZnQsIG5hdlJpZ2h0KSwgJ25hdmJhcicpO1xufVxuIiwiaW1wb3J0IHtcbiAgICBhZGRDbGFzcyxcbiAgICBkaXZcbn0gZnJvbSAnLi4vYnVpbGRlcnMnO1xuaW1wb3J0IHtcbiAgICBmaWx0ZXJCeVR5cGVcbn0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgbWVudUxpc3QgZnJvbSAnLi9tZW51TGlzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJpZ2h0TWVudShpdGVtcyA9IFtdKSB7XG4gICAgY29uc3QgYXBwZXRpemVycyA9IG1lbnVMaXN0KCdTb3VwcyBhbmQgU2FsYWRzJywgZmlsdGVyQnlUeXBlKGl0ZW1zLCAnc291cF9zYWxhZCcpKTtcbiAgICBjb25zdCBkZXNzZXJ0cyA9IG1lbnVMaXN0KCdEZXNzZXJ0cycsIGZpbHRlckJ5VHlwZShpdGVtcywgJ2Rlc3NlcnQnKSk7XG5cbiAgICByZXR1cm4gYWRkQ2xhc3MoZGl2KGFwcGV0aXplcnMsIGRlc3NlcnRzKSwgJ2NvbHVtbicsICdpcy02Jyk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZmlsdGVyQnlUeXBlKG1hcCwgdHlwZSkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhtYXApXG4gICAgICAgIC5maWx0ZXIoa2V5ID0+IG1hcFtrZXldLnR5cGUgPT09IHR5cGUpXG4gICAgICAgIC5tYXAoa2V5ID0+IG1hcFtrZXldKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFByaWNlKHByaWNlKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQocHJpY2UpLnRvRml4ZWQoMik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiAkKHF1ZXJ5KSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5KSk7XG5cbiAgICBmdW5jdGlvbiBjaGlsZHJlbih0b0FkZCkge1xuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGVsZSA9PiB7XG4gICAgICAgICAgICB3aGlsZSAoZWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBlbGUucmVtb3ZlQ2hpbGQoZWxlLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbGUuYXBwZW5kQ2hpbGQodG9BZGQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjaGlsZHJlbixcbiAgICB9O1xufVxuIiwiaW1wb3J0IGFwcCBmcm9tICcuL2NvbXBvbmVudHMvYXBwJztcbmltcG9ydCB7XG4gICAgY3JlYXRlU3RvcmVcbn0gZnJvbSAnLi9zdGF0ZSc7XG5cbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIGV2ZW50LCBkYXRhKSB7XG4gICAgc3dpdGNoIChldmVudCkge1xuICAgICAgICBjYXNlICdTRVRfSVRFTVMnOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgaXRlbXM6IGRhdGEuaXRlbXMucmVkdWNlKCh0b3RhbCwgaXRlbSkgPT5cbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgdG90YWwsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFtpdGVtLmlkXTogaXRlbVxuICAgICAgICAgICAgICAgICAgICB9KSwge30pLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIpO1xuXG5mZXRjaCgnZm9vZC5qc29uJylcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAudGhlbihyZXNCb2R5ID0+IHtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgICAgYm9keS5pbnNlcnRCZWZvcmUoYXBwKHN0b3JlKSwgYm9keS5jaGlsZE5vZGVzWzBdKTtcbiAgICAgICAgc3RvcmUudHJpZ2dlcignU0VUX0lURU1TJywge1xuICAgICAgICAgICAgaXRlbXM6IHJlc0JvZHlcbiAgICAgICAgfSk7XG4gICAgfSk7XG4iLCJjb25zdCBkZWZhdWx0U3RhdGUgPSB7XG4gICAgaXRlbXM6IHt9LFxuICAgIGNhcnQ6IChuZXcgU2V0KCkpLFxuICAgIGNhcnRWaXNpYmxlOiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RvcmUocmVkdWNlcikge1xuICAgIGNvbnN0IGxpc3RlbmVycyA9IHt9O1xuICAgIGxldCBzdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRTdGF0ZSk7XG5cbiAgICBmdW5jdGlvbiBvbihldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnNbZXZlbnRdKSB7XG4gICAgICAgICAgICBsaXN0ZW5lcnNbZXZlbnRdID0gW107XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0ZW5lcnNbZXZlbnRdLnB1c2goY2FsbGJhY2spO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyaWdnZXIoZXZlbnQsIGRhdGEgPSB7fSkge1xuICAgICAgICBzdGF0ZSA9IHJlZHVjZXIoc3RhdGUsIGV2ZW50LCBkYXRhKTtcblxuICAgICAgICBpZiAobGlzdGVuZXJzW2V2ZW50XSkge1xuICAgICAgICAgICAgbGlzdGVuZXJzW2V2ZW50XS5mb3JFYWNoKGNhbGxiYWNrID0+IHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhzdGF0ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG9uLFxuICAgICAgICB0cmlnZ2VyXG4gICAgfTtcbn1cbiJdfQ==
