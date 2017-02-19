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
    var modalEle = (0, _modal2.default)(store);
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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function menu(store) {
    var menuEle = (0, _builders.addId)((0, _builders.addClass)((0, _builders.div)(), 'container'), 'menu');

    store.on('SET_ITEMS', function (_ref) {
        var items = _ref.items;

        var leftSide = (0, _leftMenu2.default)(items);
        var rightSide = (0, _rightMenu2.default)(items);
        var columns = (0, _builders.addClass)((0, _builders.section)(leftSide, rightSide), 'columns');
        (0, _helpers.$)('#menu').children(columns);
    });

    store.on('ITEM_ADDED', function (_ref2) {
        var cart = _ref2.cart;

        var cartArray = [].concat(_toConsumableArray(cart));
        var articles = cartArray.map(function (id) {
            return 'article[data-key=\'' + id + '\']';
        });
        var buttons = cartArray.map(function (id) {
            return 'article[data-key=\'' + id + '\'] button.add-to-cart';
        });

        (0, _helpers.$)(articles.join(', ')).addClass('in-cart');
        (0, _helpers.$)(buttons.join(', ')).attr('disabled', 'disabled');
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

var _helpers = require('../helpers');

var _modalItem = require('./modalItem');

var _modalItem2 = _interopRequireDefault(_modalItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function modal(store) {
    var close = (0, _builders.addId)((0, _builders.addClass)((0, _builders.i)(), 'fa', 'fa-times', 'close'), 'close');
    var title = (0, _builders.addClass)((0, _builders.h1)((0, _builders.text)('Cart')), 'title');

    var cartContainer = (0, _builders.addId)((0, _builders.div)((0, _builders.p)((0, _builders.text)('Your cart is empty.'))), 'cart-items');

    var checkoutButton = (0, _builders.addClass)((0, _builders.button)((0, _builders.text)('Checkout')), 'button', 'is-fullwidth');

    var modalContainer = (0, _builders.addClass)((0, _builders.div)(close, title, cartContainer, checkoutButton), 'modal-container');

    var modalEle = (0, _builders.addId)((0, _builders.addClass)((0, _builders.section)(modalContainer), 'modal'), 'modal');

    store.on('TOGGLE_SHOW_CART', function (_ref) {
        var cartVisible = _ref.cartVisible;

        var ele = (0, _helpers.$)('#modal');
        if (cartVisible) {
            ele.addClass('show');
        } else {
            ele.removeClass('show');
        }
    });

    store.on('ITEM_ADDED', function (_ref2) {
        var items = _ref2.items,
            cart = _ref2.cart;

        var cartArray = [].concat(_toConsumableArray(cart));
        var cartItems = cartArray.map(function (itemId) {
            return (0, _modalItem2.default)(items[itemId]);
        });
        var cartList = (0, _builders.addClass)(_builders.ul.apply(undefined, _toConsumableArray(cartItems)), 'menu');
        (0, _helpers.$)('#cart-items').children(cartList);
    });

    return modalEle;
}

},{"../builders":1,"../helpers":13,"./modalItem":10}],10:[function(require,module,exports){
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

    function on(event, cb) {
        elements.forEach(function (ele) {
            ele.addEventListener(event, cb);
        });
    }

    function addClass(klass) {
        elements.forEach(function (ele) {
            ele.classList.add(klass);
        });
    }

    function removeClass(klass) {
        elements.forEach(function (ele) {
            ele.classList.remove(klass);
        });
    }

    function attr(attribute, value) {
        elements.forEach(function (ele) {
            if (value === false) {
                ele.removeAttribute(attribute);
            } else {
                ele.setAttribute(attribute, value);
            }
        });
    }

    return {
        on: on,
        children: children,
        addClass: addClass,
        removeClass: removeClass,
        attr: attr
    };
}

},{}],14:[function(require,module,exports){
'use strict';

var _app = require('./components/app');

var _app2 = _interopRequireDefault(_app);

var _state = require('./state');

var _setup_listeners = require('./setup_listeners');

var _setup_listeners2 = _interopRequireDefault(_setup_listeners);

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
        case 'TOGGLE_SHOW_CART':
            return Object.assign({}, state, {
                cartVisible: !state.cartVisible
            });
        case 'ITEM_ADDED':
            return Object.assign({}, state, {
                cart: new Set(state.cart).add(data.item)
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
    (0, _setup_listeners2.default)(store);
});

},{"./components/app":2,"./setup_listeners":15,"./state":16}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (store) {
    (0, _helpers.$)('#cart-icon, #close').on('click', function () {
        store.trigger('TOGGLE_SHOW_CART');
    });

    (0, _helpers.$)('.add-to-cart').on('click', function (e) {
        var parent = getParentWithKey(e.currentTarget);

        var key = parseInt(parent.dataset.key, 10);
        store.trigger('ITEM_ADDED', {
            item: key
        });
    });
};

var _helpers = require('./helpers');

function getParentWithKey(element) {
    var parent = element.parentElement;

    while (parent && !parent.dataset.key) {
        parent = parent.parentElement;
    }

    return parent;
}

},{"./helpers":13}],16:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYnVpbGRlcnMuanMiLCJzcmMvanMvY29tcG9uZW50cy9hcHAuanMiLCJzcmMvanMvY29tcG9uZW50cy9iYW5uZXIuanMiLCJzcmMvanMvY29tcG9uZW50cy9mb290ZXJCYW5uZXIuanMiLCJzcmMvanMvY29tcG9uZW50cy9sZWZ0TWVudS5qcyIsInNyYy9qcy9jb21wb25lbnRzL21lbnUuanMiLCJzcmMvanMvY29tcG9uZW50cy9tZW51SXRlbS5qcyIsInNyYy9qcy9jb21wb25lbnRzL21lbnVMaXN0LmpzIiwic3JjL2pzL2NvbXBvbmVudHMvbW9kYWwuanMiLCJzcmMvanMvY29tcG9uZW50cy9tb2RhbEl0ZW0uanMiLCJzcmMvanMvY29tcG9uZW50cy9uYXZiYXIuanMiLCJzcmMvanMvY29tcG9uZW50cy9yaWdodE1lbnUuanMiLCJzcmMvanMvaGVscGVycy5qcyIsInNyYy9qcy9pbmRleC5qcyIsInNyYy9qcy9zZXR1cF9saXN0ZW5lcnMuanMiLCJzcmMvanMvc3RhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztRQ0FnQixJLEdBQUEsSTtRQUlBLGEsR0FBQSxhO1FBTUEsRyxHQUFBLEc7UUFJQSxDLEdBQUEsQztRQUlBLEksR0FBQSxJO1FBSUEsRyxHQUFBLEc7UUFJQSxFLEdBQUEsRTtRQUlBLEUsR0FBQSxFO1FBSUEsTyxHQUFBLE87UUFJQSxDLEdBQUEsQztRQUlBLEUsR0FBQSxFO1FBSUEsRSxHQUFBLEU7UUFJQSxPLEdBQUEsTztRQUlBLE0sR0FBQSxNO1FBSUEsTSxHQUFBLE07UUFJQSxHLEdBQUEsRztRQU1BLFEsR0FBQSxRO1FBTUEsSyxHQUFBLEs7QUExRVQsU0FBUyxJQUFULENBQWMsS0FBZCxFQUFxQjtBQUN4QixXQUFPLFNBQVMsY0FBVCxDQUF3QixLQUF4QixDQUFQO0FBQ0g7O0FBRU0sU0FBUyxhQUFULENBQXVCLElBQXZC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LGFBQXJCOztBQUVBLFdBQU8sVUFBVSxDQUFDLE9BQU8sT0FBUCxDQUFlLEdBQWpDLEVBQXNDO0FBQ2xDLGlCQUFTLE9BQU8sYUFBaEI7QUFDSDs7QUFFRCxXQUFPLE1BQVA7QUFDSDs7Ozs7Ozs7UUNyQmUsVyxHQUFBLFc7QUFOaEIsSUFBTSxlQUFlO0FBQ2pCLFdBQU8sRUFEVTtBQUVqQixVQUFPLElBQUksR0FBSixFQUZVO0FBR2pCLGlCQUFhO0FBSEksQ0FBckI7O0FBTU8sU0FBUyxXQUFULENBQXFCLE9BQXJCLEVBQThCO0FBQ2pDLFFBQU0sWUFBWSxFQUFsQjtBQUNBLFFBQUksUUFBUSxPQUFPLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLFlBQWxCLENBQVo7O0FBRUEsYUFBUyxFQUFULENBQVksS0FBWixFQUFtQixRQUFuQixFQUE2QjtBQUN6QixZQUFJLENBQUMsVUFBVSxLQUFWLENBQUwsRUFBdUI7QUFDbkIsc0JBQVUsS0FBVixJQUFtQixFQUFuQjtBQUNIOztBQUVELGtCQUFVLEtBQVYsRUFBaUIsSUFBakIsQ0FBc0IsUUFBdEI7QUFDSDs7QUFFRCxhQUFTLE9BQVQsQ0FBaUIsS0FBakIsRUFBbUM7QUFBQSxZQUFYLElBQVcsdUVBQUosRUFBSTs7QUFDL0IsZ0JBQVEsUUFBUSxLQUFSLEVBQWUsS0FBZixFQUFzQixJQUF0QixDQUFSOztBQUVBLFlBQUksVUFBVSxLQUFWLENBQUosRUFBc0I7QUFDbEIsc0JBQVUsS0FBVixFQUFpQixPQUFqQixDQUF5QixvQkFBWTtBQUNqQyx5QkFBUyxLQUFUO0FBQ0gsYUFGRDtBQUdIO0FBQ0o7O0FBRUQsV0FBTztBQUNILGNBREc7QUFFSDtBQUZHLEtBQVA7QUFJSCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnQgZnVuY3Rpb24gdGV4dCh3b3Jkcykge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh3b3Jkcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIC4uLmNoaWxkcmVuKSB7XG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiBuZXdFbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkKSk7XG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXYoLi4uY2hpbGRyZW4pIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnZGl2JywgLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaSguLi5jaGlsZHJlbikge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdpJywgLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3BhbiguLi5jaGlsZHJlbikge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdzcGFuJywgLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmF2KC4uLmNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ25hdicsIC4uLmNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVsKC4uLmNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ3VsJywgLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGkoLi4uY2hpbGRyZW4pIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnbGknLCAuLi5jaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN0aW9uKC4uLmNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nLCAuLi5jaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwKC4uLmNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ3AnLCAuLi5jaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoMSguLi5jaGlsZHJlbikge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdoMScsIC4uLmNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGgzKC4uLmNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2gzJywgLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJ0aWNsZSguLi5jaGlsZHJlbikge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdhcnRpY2xlJywgLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnV0dG9uKC4uLmNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIC4uLmNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvb3RlciguLi5jaGlsZHJlbikge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdmb290ZXInLCAuLi5jaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbWcoc291cmNlKSB7XG4gIGNvbnN0IGltYWdlID0gY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltYWdlLnNyYyA9IHNvdXJjZTtcbiAgcmV0dXJuIGltYWdlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbWVudCwgLi4ua2xhc3Nlcykge1xuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBlbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICBrbGFzc2VzLmZvckVhY2goa2xhc3MgPT4gbmV3RWxlbWVudC5jbGFzc0xpc3QuYWRkKGtsYXNzKSk7XG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRJZChlbGVtZW50LCBpZCkge1xuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBlbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXdFbGVtZW50LCB7XG4gICAgICAgIGlkXG4gICAgfSk7XG59XG4iLCJpbXBvcnQge1xuICAgIGRpdixcbiAgICBhZGRJZFxufSBmcm9tICcuLi9idWlsZGVycyc7XG5pbXBvcnQgbmF2YmFyIGZyb20gJy4vbmF2YmFyJztcbmltcG9ydCBiYW5uZXIgZnJvbSAnLi9iYW5uZXInO1xuaW1wb3J0IG1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCBmb290ZXJCYW5uZXIgZnJvbSAnLi9mb290ZXJCYW5uZXInO1xuaW1wb3J0IG1vZGFsIGZyb20gJy4vbW9kYWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcHAoc3RvcmUpIHtcbiAgICBjb25zdCBtb2RhbEVsZSA9IG1vZGFsKHN0b3JlKTtcbiAgICBjb25zdCBuYXZiYXJFbGUgPSBuYXZiYXIoKTtcbiAgICBjb25zdCBiYW5uZXJFbGUgPSBiYW5uZXIoKTtcbiAgICBjb25zdCBtZW51RWxlID0gbWVudShzdG9yZSk7XG4gICAgY29uc3QgZm9vdGVyQmFubmVyRWxlID0gZm9vdGVyQmFubmVyKCk7XG4gICAgY29uc3QgYXBwRWxlID0gYWRkSWQoZGl2KG1vZGFsRWxlLCBuYXZiYXJFbGUsIGJhbm5lckVsZSwgbWVudUVsZSwgZm9vdGVyQmFubmVyRWxlKSwgJ2FwcC1jb250YWluZXInKTtcblxuICAgIHJldHVybiBhcHBFbGU7XG59XG4iLCJpbXBvcnQge1xuICAgIGFkZENsYXNzLFxuICAgIGRpdixcbiAgICBpbWcsXG4gICAgcCxcbiAgICBzZWN0aW9uLFxuICAgIHRleHRcbn0gZnJvbSAnLi4vYnVpbGRlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBiYW5uZXIoKSB7XG4gICAgY29uc3QgbG9nbyA9IGFkZENsYXNzKGltZygnYXNzZXRzL2xvZ28ucG5nJyksICdsb2dvJyk7XG4gICAgY29uc3QgdGhlVGV4dCA9IGFkZENsYXNzKHAodGV4dCgnVGhlJykpLCAnaGVyby10ZXh0LWxpZ2h0Jyk7XG4gICAgY29uc3QgcHVyZUpzVGV4dCA9IGFkZENsYXNzKHAodGV4dCgnUHVyZSBKYXZhU2NyaXB0JykpLCAnaGVyby10ZXh0LWJvbGQnKTtcbiAgICBjb25zdCBhcHBUZXh0ID0gYWRkQ2xhc3MocCh0ZXh0KCdBcHBsaWNhdGlvbicpKSwgJ2hlcm8tdGV4dC1saWdodCcpO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gYWRkQ2xhc3MoZGl2KGxvZ28sIHRoZVRleHQsIHB1cmVKc1RleHQsIGFwcFRleHQpLCAnY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBiYW5uZXJDb250ZW50ID0gYWRkQ2xhc3MoZGl2KGNvbnRhaW5lciksICdoZXJvLWNvbnRlbnQnKTtcblxuICAgIHJldHVybiBhZGRDbGFzcyhzZWN0aW9uKGJhbm5lckNvbnRlbnQpLCAnaGVybycsICdzcGxhc2gnKTtcbn1cbiIsImltcG9ydCB7XG4gICAgYWRkQ2xhc3MsXG4gICAgZGl2LFxuICAgIGZvb3RlcixcbiAgICB0ZXh0LFxuICAgIHBcbn0gZnJvbSAnLi4vYnVpbGRlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb290ZXJCYW5uZXIoKSB7XG4gICAgY29uc3QgbmFtZSA9IHAodGV4dCgnRHVjIFRydW9uZycpKTtcbiAgICBjb25zdCBjb250ZW50ID0gYWRkQ2xhc3MoZGl2KG5hbWUpLCAnY29udGVudCcsICdpcy1jZW50ZXJlZCcpO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gYWRkQ2xhc3MoZGl2KGNvbnRlbnQpLCAnY29udGFpbmVyJyk7XG5cbiAgICByZXR1cm4gYWRkQ2xhc3MoZm9vdGVyKGNvbnRhaW5lciksICdmb290ZXInKTtcbn1cbiIsImltcG9ydCB7XG4gICAgYWRkQ2xhc3MsXG4gICAgZGl2XG59IGZyb20gJy4uL2J1aWxkZXJzJztcbmltcG9ydCB7XG4gICAgZmlsdGVyQnlUeXBlXG59IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IG1lbnVMaXN0IGZyb20gJy4vbWVudUxpc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsZWZ0TWVudShpdGVtcyA9IFtdKSB7XG4gICAgY29uc3QgYXBwZXRpemVycyA9IG1lbnVMaXN0KCdBcHBldGl6ZXJzJywgZmlsdGVyQnlUeXBlKGl0ZW1zLCAnYXBwZXRpemVyJykpO1xuICAgIGNvbnN0IGJ1cmdlcnMgPSBtZW51TGlzdCgnQnVyZ2VycycsIGZpbHRlckJ5VHlwZShpdGVtcywgJ2J1cmdlcicpKTtcblxuICAgIHJldHVybiBhZGRDbGFzcyhkaXYoYXBwZXRpemVycywgYnVyZ2VycyksICdjb2x1bW4nLCAnaXMtNicpO1xufVxuIiwiaW1wb3J0IHtcbiAgICBhZGRDbGFzcyxcbiAgICBhZGRJZCxcbiAgICBkaXYsXG4gICAgc2VjdGlvblxufSBmcm9tICcuLi9idWlsZGVycyc7XG5pbXBvcnQge1xuICAgICRcbn0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgbGVmdE1lbnUgZnJvbSAnLi9sZWZ0TWVudSc7XG5pbXBvcnQgcmlnaHRNZW51IGZyb20gJy4vcmlnaHRNZW51JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudShzdG9yZSkge1xuICAgIGNvbnN0IG1lbnVFbGUgPSBhZGRJZChhZGRDbGFzcyhkaXYoKSwgJ2NvbnRhaW5lcicpLCAnbWVudScpO1xuXG4gICAgc3RvcmUub24oJ1NFVF9JVEVNUycsICh7XG4gICAgICAgIGl0ZW1zXG4gICAgfSkgPT4ge1xuICAgICAgICBjb25zdCBsZWZ0U2lkZSA9IGxlZnRNZW51KGl0ZW1zKTtcbiAgICAgICAgY29uc3QgcmlnaHRTaWRlID0gcmlnaHRNZW51KGl0ZW1zKTtcbiAgICAgICAgY29uc3QgY29sdW1ucyA9IGFkZENsYXNzKHNlY3Rpb24obGVmdFNpZGUsIHJpZ2h0U2lkZSksICdjb2x1bW5zJyk7XG4gICAgICAgICQoJyNtZW51JykuY2hpbGRyZW4oY29sdW1ucyk7XG4gICAgfSk7XG5cbiAgICBzdG9yZS5vbignSVRFTV9BRERFRCcsICh7XG4gICAgICAgIGNhcnRcbiAgICB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGNhcnRBcnJheSA9IFsuLi5jYXJ0XTtcbiAgICAgICAgY29uc3QgYXJ0aWNsZXMgPSBjYXJ0QXJyYXkubWFwKGlkID0+IGBhcnRpY2xlW2RhdGEta2V5PScke2lkfSddYCk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBjYXJ0QXJyYXkubWFwKGlkID0+IGBhcnRpY2xlW2RhdGEta2V5PScke2lkfSddIGJ1dHRvbi5hZGQtdG8tY2FydGApO1xuXG4gICAgICAgICQoYXJ0aWNsZXMuam9pbignLCAnKSkuYWRkQ2xhc3MoJ2luLWNhcnQnKTtcbiAgICAgICAgJChidXR0b25zLmpvaW4oJywgJykpLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWVudUVsZTtcbn1cbiIsImltcG9ydCB7XG4gICAgYWRkQ2xhc3MsXG4gICAgYXJ0aWNsZSxcbiAgICBidXR0b24sXG4gICAgZGl2LFxuICAgIGgzLFxuICAgIHAsXG4gICAgc3BhbixcbiAgICB0ZXh0XG59IGZyb20gJy4uL2J1aWxkZXJzJztcbmltcG9ydCB7XG4gICAgZm9ybWF0UHJpY2Vcbn0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnVJdGVtKGl0ZW1EYXRhID0ge30pIHtcbiAgICBjb25zdCBuYW1lID0gYWRkQ2xhc3MoaDModGV4dChpdGVtRGF0YS5uYW1lKSksICduYW1lJyk7XG4gICAgY29uc3QgcHJpY2UgPSBhZGRDbGFzcyhzcGFuKHRleHQoYCQke2Zvcm1hdFByaWNlKGl0ZW1EYXRhLnByaWNlKX1gKSksICdwcmljZScsICdpcy1wdWxsZWQtcmlnaHQnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGFkZENsYXNzKHAodGV4dChpdGVtRGF0YS5kZXNjcmlwdGlvbikpLCAnZGVzYycpO1xuICAgIGNvbnN0IGFkZFRvQ2FydCA9IGFkZENsYXNzKGJ1dHRvbih0ZXh0KCdBZGQgdG8gQ2FydCcpKSwgJ2J1dHRvbicsICdpcy1wdWxsZWQtcmlnaHQnLCAnYWRkLXRvLWNhcnQnKTtcblxuICAgIGNvbnN0IG1lZGlhQ29udGVudCA9IGFkZENsYXNzKGRpdihuYW1lLCBwcmljZSwgZGVzY3JpcHRpb24sIGFkZFRvQ2FydCksICdtZWRpYS1jb250ZW50Jyk7XG5cbiAgICBjb25zdCBpdGVtID0gYWRkQ2xhc3MoYXJ0aWNsZShtZWRpYUNvbnRlbnQpLCAnbWVkaWEnLCAnbWVudV9pdGVtJyk7XG4gICAgaXRlbS5kYXRhc2V0LmtleSA9IGl0ZW1EYXRhLmlkO1xuXG4gICAgcmV0dXJuIGl0ZW07XG59XG4iLCJpbXBvcnQge1xuICAgIGFkZENsYXNzLFxuICAgIGRpdixcbiAgICBoMSxcbiAgICB0ZXh0XG59IGZyb20gJy4uL2J1aWxkZXJzJztcbmltcG9ydCBtZW51SXRlbSBmcm9tICcuL21lbnVJdGVtJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudUxpc3QoaGVhZGxpbmUsIGl0ZW1zID0gW10pIHtcbiAgICBjb25zdCBtZW51SXRlbXMgPSBpdGVtcy5tYXAobWVudUl0ZW0pO1xuXG4gICAgY29uc3QgdGl0bGUgPSBhZGRDbGFzcyhoMSh0ZXh0KGhlYWRsaW5lKSksICd0aXRsZScpO1xuXG4gICAgcmV0dXJuIGFkZENsYXNzKGRpdih0aXRsZSwgLi4ubWVudUl0ZW1zKSwgJ2NvbGxlY3Rpb24nKTtcbn1cbiIsImltcG9ydCB7XG4gICAgYWRkQ2xhc3MsXG4gICAgYWRkSWQsXG4gICAgYnV0dG9uLFxuICAgIGRpdixcbiAgICBoMSxcbiAgICBpLFxuICAgIHAsXG4gICAgc2VjdGlvbixcbiAgICB0ZXh0LFxuICAgIHVsXG59IGZyb20gJy4uL2J1aWxkZXJzJztcbmltcG9ydCB7XG4gICAgJFxufSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCBtb2RhbEl0ZW0gZnJvbSAnLi9tb2RhbEl0ZW0nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb2RhbChzdG9yZSkge1xuICAgIGNvbnN0IGNsb3NlID0gYWRkSWQoYWRkQ2xhc3MoaSgpLCAnZmEnLCAnZmEtdGltZXMnLCAnY2xvc2UnKSwgJ2Nsb3NlJyk7XG4gICAgY29uc3QgdGl0bGUgPSBhZGRDbGFzcyhoMSh0ZXh0KCdDYXJ0JykpLCAndGl0bGUnKTtcblxuICAgIGNvbnN0IGNhcnRDb250YWluZXIgPSBhZGRJZChkaXYocCh0ZXh0KCdZb3VyIGNhcnQgaXMgZW1wdHkuJykpKSwgJ2NhcnQtaXRlbXMnKTtcblxuICAgIGNvbnN0IGNoZWNrb3V0QnV0dG9uID0gYWRkQ2xhc3MoYnV0dG9uKHRleHQoJ0NoZWNrb3V0JykpLCAnYnV0dG9uJywgJ2lzLWZ1bGx3aWR0aCcpO1xuXG4gICAgY29uc3QgbW9kYWxDb250YWluZXIgPSBhZGRDbGFzcyhkaXYoY2xvc2UsIHRpdGxlLCBjYXJ0Q29udGFpbmVyLCBjaGVja291dEJ1dHRvbiksICdtb2RhbC1jb250YWluZXInKTtcblxuICAgIGNvbnN0IG1vZGFsRWxlID0gYWRkSWQoYWRkQ2xhc3Moc2VjdGlvbihtb2RhbENvbnRhaW5lciksICdtb2RhbCcpLCAnbW9kYWwnKTtcblxuICAgIHN0b3JlLm9uKCdUT0dHTEVfU0hPV19DQVJUJywgKHtcbiAgICAgICAgY2FydFZpc2libGVcbiAgICB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZSA9ICQoJyNtb2RhbCcpO1xuICAgICAgICBpZiAoY2FydFZpc2libGUpIHtcbiAgICAgICAgICAgIGVsZS5hZGRDbGFzcygnc2hvdycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHN0b3JlLm9uKCdJVEVNX0FEREVEJywgKHtcbiAgICAgICAgaXRlbXMsXG4gICAgICAgIGNhcnRcbiAgICB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGNhcnRBcnJheSA9IFsuLi5jYXJ0XTtcbiAgICAgICAgY29uc3QgY2FydEl0ZW1zID0gY2FydEFycmF5Lm1hcChpdGVtSWQgPT4gbW9kYWxJdGVtKGl0ZW1zW2l0ZW1JZF0pKTtcbiAgICAgICAgY29uc3QgY2FydExpc3QgPSBhZGRDbGFzcyh1bCguLi5jYXJ0SXRlbXMpLCAnbWVudScpO1xuICAgICAgICAkKCcjY2FydC1pdGVtcycpLmNoaWxkcmVuKGNhcnRMaXN0KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBtb2RhbEVsZTtcbn1cbiIsImltcG9ydCB7XG4gICAgYWRkQ2xhc3MsXG4gICAgaSxcbiAgICBsaSxcbiAgICBzcGFuLFxuICAgIHRleHRcbn0gZnJvbSAnLi4vYnVpbGRlcnMnO1xuaW1wb3J0IHtcbiAgICBmb3JtYXRQcmljZVxufSBmcm9tICcuLi9oZWxwZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW9kYWxJdGVtKGl0ZW1EYXRhKSB7XG4gICAgY29uc3QgbmFtZSA9IGFkZENsYXNzKHNwYW4odGV4dChpdGVtRGF0YS5uYW1lKSksICduYW1lJyk7XG4gICAgY29uc3QgcHJpY2UgPSBhZGRDbGFzcyhzcGFuKHRleHQoZm9ybWF0UHJpY2UoaXRlbURhdGEucHJpY2UpKSksICdwcmljZScsICdpcy1wdWxsZWQtcmlnaHQnKTtcbiAgICBjb25zdCByZW1vdmVCdXR0b24gPSBhZGRDbGFzcyhpKCksICdmYScsICdmYS10aW1lcycsICdyZW1vdmUnKTtcblxuICAgIGNvbnN0IGl0ZW0gPSBhZGRDbGFzcyhsaShuYW1lLCBwcmljZSwgcmVtb3ZlQnV0dG9uKSwgJ21lbnUtaXRlbScpO1xuICAgIGl0ZW0uZGF0YXNldC5rZXkgPSBpdGVtRGF0YS5pZDtcblxuICAgIHJldHVybiBpdGVtO1xufVxuIiwiaW1wb3J0IHtcbiAgICBhZGRDbGFzcyxcbiAgICBhZGRJZCxcbiAgICBkaXYsXG4gICAgaSxcbiAgICBuYXYsXG4gICAgc3BhblxufSBmcm9tICcuLi9idWlsZGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5hdmJhcigpIHtcbiAgICBjb25zdCBuYXZMZWZ0ID0gYWRkQ2xhc3MoZGl2KCksICduYXZiYXItbGVmdCcpO1xuXG4gICAgY29uc3QgY2FydEljb24gPSBhZGRJZChhZGRDbGFzcyhpKCksICdmYScsICdmYS1zaG9wcGluZy1jYXJ0JyksICdjYXJ0LWljb24nKTtcbiAgICBjb25zdCBjYXJ0SXRlbXMgPSBhZGRDbGFzcyhzcGFuKCksICdjYXJ0LWl0ZW1zJyk7XG4gICAgY29uc3QgbmF2YmFySXRlbSA9IGFkZENsYXNzKGRpdihjYXJ0SWNvbiwgY2FydEl0ZW1zKSwgJ25hdmJhci1pdGVtJyk7XG4gICAgY29uc3QgbmF2UmlnaHQgPSBhZGRDbGFzcyhkaXYobmF2YmFySXRlbSksICduYXZiYXItcmlnaHQnKTtcblxuICAgIHJldHVybiBhZGRDbGFzcyhuYXYobmF2TGVmdCwgbmF2UmlnaHQpLCAnbmF2YmFyJyk7XG59XG4iLCJpbXBvcnQge1xuICAgIGFkZENsYXNzLFxuICAgIGRpdlxufSBmcm9tICcuLi9idWlsZGVycyc7XG5pbXBvcnQge1xuICAgIGZpbHRlckJ5VHlwZVxufSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCBtZW51TGlzdCBmcm9tICcuL21lbnVMaXN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmlnaHRNZW51KGl0ZW1zID0gW10pIHtcbiAgICBjb25zdCBhcHBldGl6ZXJzID0gbWVudUxpc3QoJ1NvdXBzIGFuZCBTYWxhZHMnLCBmaWx0ZXJCeVR5cGUoaXRlbXMsICdzb3VwX3NhbGFkJykpO1xuICAgIGNvbnN0IGRlc3NlcnRzID0gbWVudUxpc3QoJ0Rlc3NlcnRzJywgZmlsdGVyQnlUeXBlKGl0ZW1zLCAnZGVzc2VydCcpKTtcblxuICAgIHJldHVybiBhZGRDbGFzcyhkaXYoYXBwZXRpemVycywgZGVzc2VydHMpLCAnY29sdW1uJywgJ2lzLTYnKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJCeVR5cGUobWFwLCB0eXBlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG1hcClcbiAgICAgICAgLmZpbHRlcihrZXkgPT4gbWFwW2tleV0udHlwZSA9PT0gdHlwZSlcbiAgICAgICAgLm1hcChrZXkgPT4gbWFwW2tleV0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0UHJpY2UocHJpY2UpIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdChwcmljZSkudG9GaXhlZCgyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uICQocXVlcnkpIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocXVlcnkpKTtcblxuICAgIGZ1bmN0aW9uIGNoaWxkcmVuKHRvQWRkKSB7XG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goZWxlID0+IHtcbiAgICAgICAgICAgIHdoaWxlIChlbGUuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIGVsZS5yZW1vdmVDaGlsZChlbGUuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsZS5hcHBlbmRDaGlsZCh0b0FkZCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uKGV2ZW50LCBjYikge1xuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGVsZSA9PiB7XG4gICAgICAgICAgICBlbGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2IpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRDbGFzcyhrbGFzcykge1xuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGVsZSA9PiB7XG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LmFkZChrbGFzcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGtsYXNzKSB7XG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goZWxlID0+IHtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKGtsYXNzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXR0cihhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goZWxlID0+IHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBlbGUucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG9uLFxuICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgYWRkQ2xhc3MsXG4gICAgICAgIHJlbW92ZUNsYXNzLFxuICAgICAgICBhdHRyXG4gICAgfTtcbn1cbiIsImltcG9ydCBhcHAgZnJvbSAnLi9jb21wb25lbnRzL2FwcCc7XG5pbXBvcnQge1xuICAgIGNyZWF0ZVN0b3JlXG59IGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHNldHVwTGlzdGVuZXJzIGZyb20gJy4vc2V0dXBfbGlzdGVuZXJzJztcblxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgZXZlbnQsIGRhdGEpIHtcbiAgICBzd2l0Y2ggKGV2ZW50KSB7XG4gICAgICAgIGNhc2UgJ1NFVF9JVEVNUyc6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgICBpdGVtczogZGF0YS5pdGVtcy5yZWR1Y2UoKHRvdGFsLCBpdGVtKSA9PlxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCB0b3RhbCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgW2l0ZW0uaWRdOiBpdGVtXG4gICAgICAgICAgICAgICAgICAgIH0pLCB7fSksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgY2FzZSAnVE9HR0xFX1NIT1dfQ0FSVCc6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgICBjYXJ0VmlzaWJsZTogIXN0YXRlLmNhcnRWaXNpYmxlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIGNhc2UgJ0lURU1fQURERUQnOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgY2FydDogKG5ldyBTZXQoc3RhdGUuY2FydCkpLmFkZChkYXRhLml0ZW0pLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIpO1xuXG5mZXRjaCgnZm9vZC5qc29uJylcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAudGhlbihyZXNCb2R5ID0+IHtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgICAgYm9keS5pbnNlcnRCZWZvcmUoYXBwKHN0b3JlKSwgYm9keS5jaGlsZE5vZGVzWzBdKTtcbiAgICAgICAgc3RvcmUudHJpZ2dlcignU0VUX0lURU1TJywge1xuICAgICAgICAgICAgaXRlbXM6IHJlc0JvZHlcbiAgICAgICAgfSk7XG4gICAgICAgIHNldHVwTGlzdGVuZXJzKHN0b3JlKTtcbiAgICB9KTtcbiIsImltcG9ydCB7XG4gICAgJFxufSBmcm9tICcuL2hlbHBlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdG9yZSkge1xuICAgICQoJyNjYXJ0LWljb24sICNjbG9zZScpLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc3RvcmUudHJpZ2dlcignVE9HR0xFX1NIT1dfQ0FSVCcpO1xuICAgIH0pO1xuXG4gICAgJCgnLmFkZC10by1jYXJ0Jykub24oJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGdldFBhcmVudFdpdGhLZXkoZS5jdXJyZW50VGFyZ2V0KTtcblxuICAgICAgICBjb25zdCBrZXkgPSBwYXJzZUludChwYXJlbnQuZGF0YXNldC5rZXksIDEwKTtcbiAgICAgICAgc3RvcmUudHJpZ2dlcignSVRFTV9BRERFRCcsIHtcbiAgICAgICAgICAgIGl0ZW06IGtleVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0UGFyZW50V2l0aEtleShlbGVtZW50KSB7XG4gICAgbGV0IHBhcmVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcblxuICAgIHdoaWxlIChwYXJlbnQgJiYgIXBhcmVudC5kYXRhc2V0LmtleSkge1xuICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50RWxlbWVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50O1xufVxuIiwiY29uc3QgZGVmYXVsdFN0YXRlID0ge1xuICAgIGl0ZW1zOiB7fSxcbiAgICBjYXJ0OiAobmV3IFNldCgpKSxcbiAgICBjYXJ0VmlzaWJsZTogZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0b3JlKHJlZHVjZXIpIHtcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSB7fTtcbiAgICBsZXQgc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0U3RhdGUpO1xuXG4gICAgZnVuY3Rpb24gb24oZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzW2V2ZW50XSkge1xuICAgICAgICAgICAgbGlzdGVuZXJzW2V2ZW50XSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdGVuZXJzW2V2ZW50XS5wdXNoKGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmlnZ2VyKGV2ZW50LCBkYXRhID0ge30pIHtcbiAgICAgICAgc3RhdGUgPSByZWR1Y2VyKHN0YXRlLCBldmVudCwgZGF0YSk7XG5cbiAgICAgICAgaWYgKGxpc3RlbmVyc1tldmVudF0pIHtcbiAgICAgICAgICAgIGxpc3RlbmVyc1tldmVudF0uZm9yRWFjaChjYWxsYmFjayA9PiB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soc3RhdGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBvbixcbiAgICAgICAgdHJpZ2dlclxuICAgIH07XG59XG4iXX0=
