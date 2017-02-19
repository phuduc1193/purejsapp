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

    store.on('ITEM_REMOVED', function (_ref3) {
        var cart = _ref3.cart;

        var onPageKeys = (0, _helpers.$)('article.in-cart').map(function (ele) {
            return parseInt(ele.dataset.key, 10);
        });
        var inCartKeys = [].concat(_toConsumableArray(cart));
        var keysToRemove = onPageKeys.filter(function (key) {
            return !inCartKeys.includes(key);
        });

        keysToRemove.forEach(function (key) {
            (0, _helpers.$)('article[data-key=\'' + key + '\']').removeClass('in-cart');
            (0, _helpers.$)('article[data-key=\'' + key + '\'] button.add-to-cart').attr('disabled', false);
        });
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

    function map(cb) {
        return elements.map(cb);
    }

    return {
        on: on,
        children: children,
        addClass: addClass,
        removeClass: removeClass,
        attr: attr,
        map: map
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
        case 'ITEM_REMOVED':
            var newCart = new Set(state.cart);
            newCart.delete(data.item);
            return Object.assign({}, state, {
                cart: newCart
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

    (0, _helpers.$)('body').on('click', function (e) {
        if (e.target.classList.contains('remove')) {
            var element = e.target;
            var parent = getParentWithKey(element);
            var key = parseInt(parent.dataset.key, 10);

            parent.parentElement.removeChild(parent);
            store.trigger('ITEM_REMOVED', {
                item: key
            });
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYnVpbGRlcnMuanMiLCJzcmMvanMvY29tcG9uZW50cy9hcHAuanMiLCJzcmMvanMvY29tcG9uZW50cy9iYW5uZXIuanMiLCJzcmMvanMvY29tcG9uZW50cy9mb290ZXJCYW5uZXIuanMiLCJzcmMvanMvY29tcG9uZW50cy9sZWZ0TWVudS5qcyIsInNyYy9qcy9jb21wb25lbnRzL21lbnUuanMiLCJzcmMvanMvY29tcG9uZW50cy9tZW51SXRlbS5qcyIsInNyYy9qcy9jb21wb25lbnRzL21lbnVMaXN0LmpzIiwic3JjL2pzL2NvbXBvbmVudHMvbW9kYWwuanMiLCJzcmMvanMvY29tcG9uZW50cy9tb2RhbEl0ZW0uanMiLCJzcmMvanMvY29tcG9uZW50cy9uYXZiYXIuanMiLCJzcmMvanMvY29tcG9uZW50cy9yaWdodE1lbnUuanMiLCJzcmMvanMvaGVscGVycy5qcyIsInNyYy9qcy9pbmRleC5qcyIsInNyYy9qcy9zZXR1cF9saXN0ZW5lcnMuanMiLCJzcmMvanMvc3RhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztRQ0FnQixJLEdBQUEsSTtRQUlBLGEsR0FBQSxhO1FBTUEsRyxHQUFBLEc7UUFJQSxDLEdBQUEsQztRQUlBLEksR0FBQSxJO1FBSUEsRyxHQUFBLEc7UUFJQSxFLEdBQUEsRTtRQUlBLEUsR0FBQSxFO1FBSUEsTyxHQUFBLE87UUFJQSxDLEdBQUEsQztRQUlBLEUsR0FBQSxFO1FBSUEsRSxHQUFBLEU7UUFJQSxPLEdBQUEsTztRQUlBLE0sR0FBQSxNO1FBSUEsTSxHQUFBLE07UUFJQSxHLEdBQUEsRztRQU1BLFEsR0FBQSxRO1FBTUEsSyxHQUFBLEs7QUExRVQsU0FBUyxJQUFULENBQWMsS0FBZCxFQUFxQjtBQUN4QixXQUFPLFNBQVMsY0FBVCxDQUF3QixLQUF4QixDQUFQO0FBQ0g7O0FBRU0sU0FBUyxhQUFULENBQXVCLElBQXZCLEVBQTBDO0FBQzdDLFFBQU0sYUFBYSxTQUFTLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBbkI7O0FBRDZDLHNDQUFWLFFBQVU7QUFBVixnQkFBVTtBQUFBOztBQUU3QyxhQUFTLE9BQVQsQ0FBaUI7QUFBQSxlQUFTLFdBQVcsV0FBWCxDQUF1QixLQUF2QixDQUFUO0FBQUEsS0FBakI7QUFDQSxXQUFPLFVBQVA7QUFDSDs7QUFFTSxTQUFTLEdBQVQsR0FBMEI7QUFBQSx1Q0FBVixRQUFVO0FBQVYsZ0JBQVU7QUFBQTs7QUFDN0IsV0FBTyxnQ0FBYyxLQUFkLFNBQXdCLFFBQXhCLEVBQVA7QUFDSDs7QUFFTSxTQUFTLENBQVQsR0FBd0I7QUFBQSx1Q0FBVixRQUFVO0FBQVYsZ0JBQVU7QUFBQTs7QUFDM0IsV0FBTyxnQ0FBYyxHQUFkLFNBQXNCLFFBQXRCLEVBQVA7QUFDSDs7QUFFTSxTQUFTLElBQVQsR0FBMkI7QUFBQSx1Q0FBVixRQUFVO0FBQVYsZ0JBQVU7QUFBQTs7QUFDOUIsV0FBTyxnQ0FBYyxNQUFkLFNBQXlCLFFBQXpCLEVBQVA7QUFDSDs7QUFFTSxTQUFTLEdBQVQsR0FBMEI7QUFBQSx1Q0FBVixRQUFVO0FBQVYsZ0JBQVU7QUFBQTs7QUFDN0IsV0FBTyxnQ0FBYyxLQUFkLFNBQXdCLFFBQXhCLEVBQVA7QUFDSDs7QUFFTSxTQUFTLEVBQVQsR0FBeUI7QUFBQSx1Q0FBVixRQUFVO0FBQVYsZ0JBQVU7QUFBQTs7QUFDNUIsV0FBTyxnQ0FBYyxJQUFkLFNBQXVCLFFBQXZCLEVBQVA7QUFDSDs7QUFFTSxTQUFTLEVBQVQsR0FBeUI7QUFBQSx1Q0FBVixRQUFVO0FBQVYsZ0JBQVU7QUFBQTs7QUFDNUIsV0FBTyxnQ0FBYyxJQUFkLFNBQXVCLFFBQXZCLEVBQVA7QUFDSDs7QUFFTSxTQUFTLE9BQVQsR0FBOEI7QUFBQSx1Q0FBVixRQUFVO0FBQVYsZ0JBQVU7QUFBQTs7QUFDakMsV0FBTyxnQ0FBYyxTQUFkLFNBQTRCLFFBQTVCLEVBQVA7QUFDSDs7QUFFTSxTQUFTLENBQVQsR0FBd0I7QUFBQSx1Q0FBVixRQUFVO0FBQVYsZ0JBQVU7QUFBQTs7QUFDM0IsV0FBTyxnQ0FBYyxHQUFkLFNBQXNCLFFBQXRCLEVBQVA7QUFDSDs7QUFFTSxTQUFTLEVBQVQsR0FBeUI7QUFBQSx3Q0FBVixRQUFVO0FBQVYsZ0JBQVU7QUFBQTs7QUFDNUIsV0FBTyxnQ0FBYyxJQUFkLFNBQXVCLFFBQXZCLEVBQVA7QUFDSDs7QUFFTSxTQUFTLEVBQVQsR0FBeUI7QUFBQSx3Q0FBVixRQUFVO0FBQVYsZ0JBQVU7QUFBQTs7QUFDNUIsV0FBTyxnQ0FBYyxJQUFkLFNBQXVCLFFBQXZCLEVBQVA7QUFDSDs7QUFFTSxTQUFTLE9BQVQsR0FBOEI7QUFBQSx3Q0FBVixRQUFVO0FBQVYsZ0JBQVU7QUFBQTs7QUFDakMsV0FBTyxnQ0FBYyxTQUFkLFNBQTRCLFFBQTVCLEVBQVA7QUFDSDs7QUFFTSxTQUFTLE1BQVQsR0FBNkI7QUFBQSx3Q0FBVixRQUFVO0FBQVYsZ0JBQVU7QUFBQTs7QUFDaEMsV0FBTyxnQ0FBYyxRQUFkLFNBQTJCLFFBQTNCLEVBQVA7QUFDSDs7QUFFTSxTQUFTLE1BQVQsR0FBNkI7QUFBQSx3Q0FBVixRQUFVO0FBQVYsZ0JBQVU7QUFBQTs7QUFDaEMsV0FBTyxnQ0FBYyxRQUFkLFNBQTJCLFFBQTNCLEVBQVA7QUFDSDs7QUFFTSxTQUFTLEdBQVQsQ0FBYSxNQUFiLEVBQXFCO0FBQzFCLFFBQU0sUUFBUSxjQUFjLEtBQWQsQ0FBZDtBQUNBLFVBQU0sR0FBTixHQUFZLE1BQVo7QUFDQSxXQUFPLEtBQVA7QUFDRDs7QUFFTSxTQUFTLFFBQVQsQ0FBa0IsT0FBbEIsRUFBdUM7QUFDMUMsUUFBTSxhQUFhLFFBQVEsU0FBUixDQUFrQixJQUFsQixDQUFuQjs7QUFEMEMsd0NBQVQsT0FBUztBQUFULGVBQVM7QUFBQTs7QUFFMUMsWUFBUSxPQUFSLENBQWdCO0FBQUEsZUFBUyxXQUFXLFNBQVgsQ0FBcUIsR0FBckIsQ0FBeUIsS0FBekIsQ0FBVDtBQUFBLEtBQWhCO0FBQ0EsV0FBTyxVQUFQO0FBQ0g7O0FBRU0sU0FBUyxLQUFULENBQWUsT0FBZixFQUF3QixFQUF4QixFQUE0QjtBQUMvQixRQUFNLGFBQWEsUUFBUSxTQUFSLENBQWtCLElBQWxCLENBQW5CO0FBQ0EsV0FBTyxPQUFPLE1BQVAsQ0FBYyxVQUFkLEVBQTBCO0FBQzdCO0FBRDZCLEtBQTFCLENBQVA7QUFHSDs7Ozs7Ozs7a0JDckV1QixHOztBQVZ4Qjs7QUFJQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFZSxTQUFTLEdBQVQsQ0FBYSxLQUFiLEVBQW9CO0FBQy9CLFFBQU0sV0FBVyxxQkFBTSxLQUFOLENBQWpCO0FBQ0EsUUFBTSxZQUFZLHVCQUFsQjtBQUNBLFFBQU0sWUFBWSx1QkFBbEI7QUFDQSxRQUFNLFVBQVUsb0JBQUssS0FBTCxDQUFoQjtBQUNBLFFBQU0sa0JBQWtCLDZCQUF4QjtBQUNBLFFBQU0sU0FBUyxxQkFBTSxtQkFBSSxRQUFKLEVBQWMsU0FBZCxFQUF5QixTQUF6QixFQUFvQyxPQUFwQyxFQUE2QyxlQUE3QyxDQUFOLEVBQXFFLGVBQXJFLENBQWY7O0FBRUEsV0FBTyxNQUFQO0FBQ0g7Ozs7Ozs7O2tCQ1Z1QixNOztBQVR4Qjs7QUFTZSxTQUFTLE1BQVQsR0FBa0I7QUFDN0IsUUFBTSxPQUFPLHdCQUFTLG1CQUFJLGlCQUFKLENBQVQsRUFBaUMsTUFBakMsQ0FBYjtBQUNBLFFBQU0sVUFBVSx3QkFBUyxpQkFBRSxvQkFBSyxLQUFMLENBQUYsQ0FBVCxFQUF5QixpQkFBekIsQ0FBaEI7QUFDQSxRQUFNLGFBQWEsd0JBQVMsaUJBQUUsb0JBQUssaUJBQUwsQ0FBRixDQUFULEVBQXFDLGdCQUFyQyxDQUFuQjtBQUNBLFFBQU0sVUFBVSx3QkFBUyxpQkFBRSxvQkFBSyxhQUFMLENBQUYsQ0FBVCxFQUFpQyxpQkFBakMsQ0FBaEI7O0FBRUEsUUFBTSxZQUFZLHdCQUFTLG1CQUFJLElBQUosRUFBVSxPQUFWLEVBQW1CLFVBQW5CLEVBQStCLE9BQS9CLENBQVQsRUFBa0QsV0FBbEQsQ0FBbEI7O0FBRUEsUUFBTSxnQkFBZ0Isd0JBQVMsbUJBQUksU0FBSixDQUFULEVBQXlCLGNBQXpCLENBQXRCOztBQUVBLFdBQU8sd0JBQVMsdUJBQVEsYUFBUixDQUFULEVBQWlDLE1BQWpDLEVBQXlDLFFBQXpDLENBQVA7QUFDSDs7Ozs7Ozs7a0JDWnVCLFk7O0FBUnhCOztBQVFlLFNBQVMsWUFBVCxHQUF3QjtBQUNuQyxRQUFNLE9BQU8saUJBQUUsb0JBQUssWUFBTCxDQUFGLENBQWI7QUFDQSxRQUFNLFVBQVUsd0JBQVMsbUJBQUksSUFBSixDQUFULEVBQW9CLFNBQXBCLEVBQStCLGFBQS9CLENBQWhCOztBQUVBLFFBQU0sWUFBWSx3QkFBUyxtQkFBSSxPQUFKLENBQVQsRUFBdUIsV0FBdkIsQ0FBbEI7O0FBRUEsV0FBTyx3QkFBUyxzQkFBTyxTQUFQLENBQVQsRUFBNEIsUUFBNUIsQ0FBUDtBQUNIOzs7Ozs7OztrQkNOdUIsUTs7QUFUeEI7O0FBSUE7O0FBR0E7Ozs7OztBQUVlLFNBQVMsUUFBVCxHQUE4QjtBQUFBLFFBQVosS0FBWSx1RUFBSixFQUFJOztBQUN6QyxRQUFNLGFBQWEsd0JBQVMsWUFBVCxFQUF1QiwyQkFBYSxLQUFiLEVBQW9CLFdBQXBCLENBQXZCLENBQW5CO0FBQ0EsUUFBTSxVQUFVLHdCQUFTLFNBQVQsRUFBb0IsMkJBQWEsS0FBYixFQUFvQixRQUFwQixDQUFwQixDQUFoQjs7QUFFQSxXQUFPLHdCQUFTLG1CQUFJLFVBQUosRUFBZ0IsT0FBaEIsQ0FBVCxFQUFtQyxRQUFuQyxFQUE2QyxNQUE3QyxDQUFQO0FBQ0g7Ozs7Ozs7O2tCQ0Z1QixJOztBQVp4Qjs7QUFNQTs7QUFHQTs7OztBQUNBOzs7Ozs7OztBQUVlLFNBQVMsSUFBVCxDQUFjLEtBQWQsRUFBcUI7QUFDaEMsUUFBTSxVQUFVLHFCQUFNLHdCQUFTLG9CQUFULEVBQWdCLFdBQWhCLENBQU4sRUFBb0MsTUFBcEMsQ0FBaEI7O0FBRUEsVUFBTSxFQUFOLENBQVMsV0FBVCxFQUFzQixnQkFFaEI7QUFBQSxZQURGLEtBQ0UsUUFERixLQUNFOztBQUNGLFlBQU0sV0FBVyx3QkFBUyxLQUFULENBQWpCO0FBQ0EsWUFBTSxZQUFZLHlCQUFVLEtBQVYsQ0FBbEI7QUFDQSxZQUFNLFVBQVUsd0JBQVMsdUJBQVEsUUFBUixFQUFrQixTQUFsQixDQUFULEVBQXVDLFNBQXZDLENBQWhCO0FBQ0Esd0JBQUUsT0FBRixFQUFXLFFBQVgsQ0FBb0IsT0FBcEI7QUFDSCxLQVBEOztBQVNBLFVBQU0sRUFBTixDQUFTLFlBQVQsRUFBdUIsaUJBRWpCO0FBQUEsWUFERixJQUNFLFNBREYsSUFDRTs7QUFDRixZQUFNLHlDQUFnQixJQUFoQixFQUFOO0FBQ0EsWUFBTSxXQUFXLFVBQVUsR0FBVixDQUFjO0FBQUEsMkNBQTJCLEVBQTNCO0FBQUEsU0FBZCxDQUFqQjtBQUNBLFlBQU0sVUFBVSxVQUFVLEdBQVYsQ0FBYztBQUFBLDJDQUEyQixFQUEzQjtBQUFBLFNBQWQsQ0FBaEI7O0FBRUEsd0JBQUUsU0FBUyxJQUFULENBQWMsSUFBZCxDQUFGLEVBQXVCLFFBQXZCLENBQWdDLFNBQWhDO0FBQ0Esd0JBQUUsUUFBUSxJQUFSLENBQWEsSUFBYixDQUFGLEVBQXNCLElBQXRCLENBQTJCLFVBQTNCLEVBQXVDLFVBQXZDO0FBQ0gsS0FURDs7QUFXQSxVQUFNLEVBQU4sQ0FBUyxjQUFULEVBQXlCLGlCQUVuQjtBQUFBLFlBREYsSUFDRSxTQURGLElBQ0U7O0FBQ0YsWUFBTSxhQUFhLGdCQUFFLGlCQUFGLEVBQXFCLEdBQXJCLENBQXlCO0FBQUEsbUJBQU8sU0FBUyxJQUFJLE9BQUosQ0FBWSxHQUFyQixFQUEwQixFQUExQixDQUFQO0FBQUEsU0FBekIsQ0FBbkI7QUFDQSxZQUFNLDBDQUFpQixJQUFqQixFQUFOO0FBQ0EsWUFBTSxlQUFlLFdBQVcsTUFBWCxDQUFrQjtBQUFBLG1CQUFPLENBQUMsV0FBVyxRQUFYLENBQW9CLEdBQXBCLENBQVI7QUFBQSxTQUFsQixDQUFyQjs7QUFFQSxxQkFBYSxPQUFiLENBQXFCLGVBQU87QUFDeEIsb0RBQXVCLEdBQXZCLFVBQWdDLFdBQWhDLENBQTRDLFNBQTVDO0FBQ0Esb0RBQXVCLEdBQXZCLDZCQUFtRCxJQUFuRCxDQUF3RCxVQUF4RCxFQUFvRSxLQUFwRTtBQUNILFNBSEQ7QUFJSCxLQVhEOztBQWFBLFdBQU8sT0FBUDtBQUNIOzs7Ozs7OztrQkNuQ3VCLFE7O0FBZHhCOztBQVVBOztBQUllLFNBQVMsUUFBVCxHQUFpQztBQUFBLFFBQWYsUUFBZSx1RUFBSixFQUFJOztBQUM1QyxRQUFNLE9BQU8sd0JBQVMsa0JBQUcsb0JBQUssU0FBUyxJQUFkLENBQUgsQ0FBVCxFQUFrQyxNQUFsQyxDQUFiO0FBQ0EsUUFBTSxRQUFRLHdCQUFTLG9CQUFLLDBCQUFTLDBCQUFZLFNBQVMsS0FBckIsQ0FBVCxDQUFMLENBQVQsRUFBd0QsT0FBeEQsRUFBaUUsaUJBQWpFLENBQWQ7QUFDQSxRQUFNLGNBQWMsd0JBQVMsaUJBQUUsb0JBQUssU0FBUyxXQUFkLENBQUYsQ0FBVCxFQUF3QyxNQUF4QyxDQUFwQjtBQUNBLFFBQU0sWUFBWSx3QkFBUyxzQkFBTyxvQkFBSyxhQUFMLENBQVAsQ0FBVCxFQUFzQyxRQUF0QyxFQUFnRCxpQkFBaEQsRUFBbUUsYUFBbkUsQ0FBbEI7O0FBRUEsUUFBTSxlQUFlLHdCQUFTLG1CQUFJLElBQUosRUFBVSxLQUFWLEVBQWlCLFdBQWpCLEVBQThCLFNBQTlCLENBQVQsRUFBbUQsZUFBbkQsQ0FBckI7O0FBRUEsUUFBTSxPQUFPLHdCQUFTLHVCQUFRLFlBQVIsQ0FBVCxFQUFnQyxPQUFoQyxFQUF5QyxXQUF6QyxDQUFiO0FBQ0EsU0FBSyxPQUFMLENBQWEsR0FBYixHQUFtQixTQUFTLEVBQTVCOztBQUVBLFdBQU8sSUFBUDtBQUNIOzs7Ozs7OztrQkNsQnVCLFE7O0FBUnhCOztBQU1BOzs7Ozs7OztBQUVlLFNBQVMsUUFBVCxDQUFrQixRQUFsQixFQUF3QztBQUFBLFFBQVosS0FBWSx1RUFBSixFQUFJOztBQUNuRCxRQUFNLFlBQVksTUFBTSxHQUFOLG9CQUFsQjs7QUFFQSxRQUFNLFFBQVEsd0JBQVMsa0JBQUcsb0JBQUssUUFBTCxDQUFILENBQVQsRUFBNkIsT0FBN0IsQ0FBZDs7QUFFQSxXQUFPLHdCQUFTLGdDQUFJLEtBQUosNEJBQWMsU0FBZCxHQUFULEVBQW1DLFlBQW5DLENBQVA7QUFDSDs7Ozs7Ozs7a0JDR3VCLEs7O0FBakJ4Qjs7QUFZQTs7QUFHQTs7Ozs7Ozs7QUFFZSxTQUFTLEtBQVQsQ0FBZSxLQUFmLEVBQXNCO0FBQ2pDLFFBQU0sUUFBUSxxQkFBTSx3QkFBUyxrQkFBVCxFQUFjLElBQWQsRUFBb0IsVUFBcEIsRUFBZ0MsT0FBaEMsQ0FBTixFQUFnRCxPQUFoRCxDQUFkO0FBQ0EsUUFBTSxRQUFRLHdCQUFTLGtCQUFHLG9CQUFLLE1BQUwsQ0FBSCxDQUFULEVBQTJCLE9BQTNCLENBQWQ7O0FBRUEsUUFBTSxnQkFBZ0IscUJBQU0sbUJBQUksaUJBQUUsb0JBQUsscUJBQUwsQ0FBRixDQUFKLENBQU4sRUFBMkMsWUFBM0MsQ0FBdEI7O0FBRUEsUUFBTSxpQkFBaUIsd0JBQVMsc0JBQU8sb0JBQUssVUFBTCxDQUFQLENBQVQsRUFBbUMsUUFBbkMsRUFBNkMsY0FBN0MsQ0FBdkI7O0FBRUEsUUFBTSxpQkFBaUIsd0JBQVMsbUJBQUksS0FBSixFQUFXLEtBQVgsRUFBa0IsYUFBbEIsRUFBaUMsY0FBakMsQ0FBVCxFQUEyRCxpQkFBM0QsQ0FBdkI7O0FBRUEsUUFBTSxXQUFXLHFCQUFNLHdCQUFTLHVCQUFRLGNBQVIsQ0FBVCxFQUFrQyxPQUFsQyxDQUFOLEVBQWtELE9BQWxELENBQWpCOztBQUVBLFVBQU0sRUFBTixDQUFTLGtCQUFULEVBQTZCLGdCQUV2QjtBQUFBLFlBREYsV0FDRSxRQURGLFdBQ0U7O0FBQ0YsWUFBTSxNQUFNLGdCQUFFLFFBQUYsQ0FBWjtBQUNBLFlBQUksV0FBSixFQUFpQjtBQUNiLGdCQUFJLFFBQUosQ0FBYSxNQUFiO0FBQ0gsU0FGRCxNQUVPO0FBQ0gsZ0JBQUksV0FBSixDQUFnQixNQUFoQjtBQUNIO0FBQ0osS0FURDs7QUFXQSxVQUFNLEVBQU4sQ0FBUyxZQUFULEVBQXVCLGlCQUdqQjtBQUFBLFlBRkYsS0FFRSxTQUZGLEtBRUU7QUFBQSxZQURGLElBQ0UsU0FERixJQUNFOztBQUNGLFlBQU0seUNBQWdCLElBQWhCLEVBQU47QUFDQSxZQUFNLFlBQVksVUFBVSxHQUFWLENBQWM7QUFBQSxtQkFBVSx5QkFBVSxNQUFNLE1BQU4sQ0FBVixDQUFWO0FBQUEsU0FBZCxDQUFsQjtBQUNBLFlBQU0sV0FBVyx3QkFBUyxpREFBTSxTQUFOLEVBQVQsRUFBMkIsTUFBM0IsQ0FBakI7QUFDQSx3QkFBRSxhQUFGLEVBQWlCLFFBQWpCLENBQTBCLFFBQTFCO0FBQ0gsS0FSRDs7QUFVQSxXQUFPLFFBQVA7QUFDSDs7Ozs7Ozs7a0JDeEN1QixTOztBQVh4Qjs7QUFPQTs7QUFJZSxTQUFTLFNBQVQsQ0FBbUIsUUFBbkIsRUFBNkI7QUFDeEMsUUFBTSxPQUFPLHdCQUFTLG9CQUFLLG9CQUFLLFNBQVMsSUFBZCxDQUFMLENBQVQsRUFBb0MsTUFBcEMsQ0FBYjtBQUNBLFFBQU0sUUFBUSx3QkFBUyxvQkFBSyxvQkFBSywwQkFBWSxTQUFTLEtBQXJCLENBQUwsQ0FBTCxDQUFULEVBQWtELE9BQWxELEVBQTJELGlCQUEzRCxDQUFkO0FBQ0EsUUFBTSxlQUFlLHdCQUFTLGtCQUFULEVBQWMsSUFBZCxFQUFvQixVQUFwQixFQUFnQyxRQUFoQyxDQUFyQjs7QUFFQSxRQUFNLE9BQU8sd0JBQVMsa0JBQUcsSUFBSCxFQUFTLEtBQVQsRUFBZ0IsWUFBaEIsQ0FBVCxFQUF3QyxXQUF4QyxDQUFiO0FBQ0EsU0FBSyxPQUFMLENBQWEsR0FBYixHQUFtQixTQUFTLEVBQTVCOztBQUVBLFdBQU8sSUFBUDtBQUNIOzs7Ozs7OztrQkNYdUIsTTs7QUFUeEI7O0FBU2UsU0FBUyxNQUFULEdBQWtCO0FBQzdCLFFBQU0sVUFBVSx3QkFBUyxvQkFBVCxFQUFnQixhQUFoQixDQUFoQjs7QUFFQSxRQUFNLFdBQVcscUJBQU0sd0JBQVMsa0JBQVQsRUFBYyxJQUFkLEVBQW9CLGtCQUFwQixDQUFOLEVBQStDLFdBQS9DLENBQWpCO0FBQ0EsUUFBTSxZQUFZLHdCQUFTLHFCQUFULEVBQWlCLFlBQWpCLENBQWxCO0FBQ0EsUUFBTSxhQUFhLHdCQUFTLG1CQUFJLFFBQUosRUFBYyxTQUFkLENBQVQsRUFBbUMsYUFBbkMsQ0FBbkI7QUFDQSxRQUFNLFdBQVcsd0JBQVMsbUJBQUksVUFBSixDQUFULEVBQTBCLGNBQTFCLENBQWpCOztBQUVBLFdBQU8sd0JBQVMsbUJBQUksT0FBSixFQUFhLFFBQWIsQ0FBVCxFQUFpQyxRQUFqQyxDQUFQO0FBQ0g7Ozs7Ozs7O2tCQ1R1QixTOztBQVR4Qjs7QUFJQTs7QUFHQTs7Ozs7O0FBRWUsU0FBUyxTQUFULEdBQStCO0FBQUEsUUFBWixLQUFZLHVFQUFKLEVBQUk7O0FBQzFDLFFBQU0sYUFBYSx3QkFBUyxrQkFBVCxFQUE2QiwyQkFBYSxLQUFiLEVBQW9CLFlBQXBCLENBQTdCLENBQW5CO0FBQ0EsUUFBTSxXQUFXLHdCQUFTLFVBQVQsRUFBcUIsMkJBQWEsS0FBYixFQUFvQixTQUFwQixDQUFyQixDQUFqQjs7QUFFQSxXQUFPLHdCQUFTLG1CQUFJLFVBQUosRUFBZ0IsUUFBaEIsQ0FBVCxFQUFvQyxRQUFwQyxFQUE4QyxNQUE5QyxDQUFQO0FBQ0g7Ozs7Ozs7O1FDZGUsWSxHQUFBLFk7UUFNQSxXLEdBQUEsVztRQUlBLEMsR0FBQSxDO0FBVlQsU0FBUyxZQUFULENBQXNCLEdBQXRCLEVBQTJCLElBQTNCLEVBQWlDO0FBQ3BDLFdBQU8sT0FBTyxJQUFQLENBQVksR0FBWixFQUNGLE1BREUsQ0FDSztBQUFBLGVBQU8sSUFBSSxHQUFKLEVBQVMsSUFBVCxLQUFrQixJQUF6QjtBQUFBLEtBREwsRUFFRixHQUZFLENBRUU7QUFBQSxlQUFPLElBQUksR0FBSixDQUFQO0FBQUEsS0FGRixDQUFQO0FBR0g7O0FBRU0sU0FBUyxXQUFULENBQXFCLEtBQXJCLEVBQTRCO0FBQy9CLFdBQU8sV0FBVyxLQUFYLEVBQWtCLE9BQWxCLENBQTBCLENBQTFCLENBQVA7QUFDSDs7QUFFTSxTQUFTLENBQVQsQ0FBVyxLQUFYLEVBQWtCO0FBQ3JCLFFBQU0sV0FBVyxNQUFNLFNBQU4sQ0FBZ0IsS0FBaEIsQ0FBc0IsSUFBdEIsQ0FBMkIsU0FBUyxnQkFBVCxDQUEwQixLQUExQixDQUEzQixDQUFqQjs7QUFFQSxhQUFTLFFBQVQsQ0FBa0IsS0FBbEIsRUFBeUI7QUFDckIsaUJBQVMsT0FBVCxDQUFpQixlQUFPO0FBQ3BCLG1CQUFPLElBQUksVUFBWCxFQUF1QjtBQUNuQixvQkFBSSxXQUFKLENBQWdCLElBQUksVUFBcEI7QUFDSDs7QUFFRCxnQkFBSSxXQUFKLENBQWdCLEtBQWhCO0FBQ0gsU0FORDtBQU9IOztBQUVELGFBQVMsRUFBVCxDQUFZLEtBQVosRUFBbUIsRUFBbkIsRUFBdUI7QUFDbkIsaUJBQVMsT0FBVCxDQUFpQixlQUFPO0FBQ3BCLGdCQUFJLGdCQUFKLENBQXFCLEtBQXJCLEVBQTRCLEVBQTVCO0FBQ0gsU0FGRDtBQUdIOztBQUVELGFBQVMsUUFBVCxDQUFrQixLQUFsQixFQUF5QjtBQUNyQixpQkFBUyxPQUFULENBQWlCLGVBQU87QUFDcEIsZ0JBQUksU0FBSixDQUFjLEdBQWQsQ0FBa0IsS0FBbEI7QUFDSCxTQUZEO0FBR0g7O0FBRUQsYUFBUyxXQUFULENBQXFCLEtBQXJCLEVBQTRCO0FBQ3hCLGlCQUFTLE9BQVQsQ0FBaUIsZUFBTztBQUNwQixnQkFBSSxTQUFKLENBQWMsTUFBZCxDQUFxQixLQUFyQjtBQUNILFNBRkQ7QUFHSDs7QUFFRCxhQUFTLElBQVQsQ0FBYyxTQUFkLEVBQXlCLEtBQXpCLEVBQWdDO0FBQzVCLGlCQUFTLE9BQVQsQ0FBaUIsZUFBTztBQUNwQixnQkFBSSxVQUFVLEtBQWQsRUFBcUI7QUFDakIsb0JBQUksZUFBSixDQUFvQixTQUFwQjtBQUNILGFBRkQsTUFFTztBQUNILG9CQUFJLFlBQUosQ0FBaUIsU0FBakIsRUFBNEIsS0FBNUI7QUFDSDtBQUNKLFNBTkQ7QUFPSDs7QUFFRCxhQUFTLEdBQVQsQ0FBYSxFQUFiLEVBQWlCO0FBQ2IsZUFBTyxTQUFTLEdBQVQsQ0FBYSxFQUFiLENBQVA7QUFDSDs7QUFFRCxXQUFPO0FBQ0gsY0FERztBQUVILDBCQUZHO0FBR0gsMEJBSEc7QUFJSCxnQ0FKRztBQUtILGtCQUxHO0FBTUg7QUFORyxLQUFQO0FBUUg7Ozs7O0FDL0REOzs7O0FBQ0E7O0FBR0E7Ozs7Ozs7O0FBRUEsU0FBUyxPQUFULENBQWlCLEtBQWpCLEVBQXdCLEtBQXhCLEVBQStCLElBQS9CLEVBQXFDO0FBQ2pDLFlBQVEsS0FBUjtBQUNJLGFBQUssV0FBTDtBQUNJLG1CQUFPLE9BQU8sTUFBUCxDQUFjLEVBQWQsRUFBa0IsS0FBbEIsRUFBeUI7QUFDNUIsdUJBQU8sS0FBSyxLQUFMLENBQVcsTUFBWCxDQUFrQixVQUFDLEtBQUQsRUFBUSxJQUFSO0FBQUEsMkJBQ3JCLE9BQU8sTUFBUCxDQUFjLEVBQWQsRUFBa0IsS0FBbEIsc0JBQ0ssS0FBSyxFQURWLEVBQ2UsSUFEZixFQURxQjtBQUFBLGlCQUFsQixFQUdDLEVBSEQ7QUFEcUIsYUFBekIsQ0FBUDtBQU1KLGFBQUssa0JBQUw7QUFDSSxtQkFBTyxPQUFPLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLEtBQWxCLEVBQXlCO0FBQzVCLDZCQUFhLENBQUMsTUFBTTtBQURRLGFBQXpCLENBQVA7QUFHSixhQUFLLFlBQUw7QUFDSSxtQkFBTyxPQUFPLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLEtBQWxCLEVBQXlCO0FBQzVCLHNCQUFPLElBQUksR0FBSixDQUFRLE1BQU0sSUFBZCxDQUFELENBQXNCLEdBQXRCLENBQTBCLEtBQUssSUFBL0I7QUFEc0IsYUFBekIsQ0FBUDtBQUdKLGFBQUssY0FBTDtBQUNJLGdCQUFNLFVBQVcsSUFBSSxHQUFKLENBQVEsTUFBTSxJQUFkLENBQWpCO0FBQ0Esb0JBQVEsTUFBUixDQUFlLEtBQUssSUFBcEI7QUFDQSxtQkFBTyxPQUFPLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLEtBQWxCLEVBQXlCO0FBQzVCLHNCQUFNO0FBRHNCLGFBQXpCLENBQVA7QUFHSjtBQUNJLG1CQUFPLEtBQVA7QUF2QlI7QUF5Qkg7O0FBRUQsSUFBTSxRQUFRLHdCQUFZLE9BQVosQ0FBZDs7QUFFQSxNQUFNLFdBQU4sRUFDSyxJQURMLENBQ1U7QUFBQSxXQUFPLElBQUksSUFBSixFQUFQO0FBQUEsQ0FEVixFQUVLLElBRkwsQ0FFVSxtQkFBVztBQUNiLFFBQU0sT0FBTyxTQUFTLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtBQUNBLFNBQUssWUFBTCxDQUFrQixtQkFBSSxLQUFKLENBQWxCLEVBQThCLEtBQUssVUFBTCxDQUFnQixDQUFoQixDQUE5QjtBQUNBLFVBQU0sT0FBTixDQUFjLFdBQWQsRUFBMkI7QUFDdkIsZUFBTztBQURnQixLQUEzQjtBQUdBLG1DQUFlLEtBQWY7QUFDSCxDQVRMOzs7Ozs7Ozs7a0JDaENlLFVBQVMsS0FBVCxFQUFnQjtBQUMzQixvQkFBRSxvQkFBRixFQUF3QixFQUF4QixDQUEyQixPQUEzQixFQUFvQyxZQUFNO0FBQ3RDLGNBQU0sT0FBTixDQUFjLGtCQUFkO0FBQ0gsS0FGRDs7QUFJQSxvQkFBRSxjQUFGLEVBQWtCLEVBQWxCLENBQXFCLE9BQXJCLEVBQThCLGFBQUs7QUFDL0IsWUFBTSxTQUFTLGlCQUFpQixFQUFFLGFBQW5CLENBQWY7O0FBRUEsWUFBTSxNQUFNLFNBQVMsT0FBTyxPQUFQLENBQWUsR0FBeEIsRUFBNkIsRUFBN0IsQ0FBWjtBQUNBLGNBQU0sT0FBTixDQUFjLFlBQWQsRUFBNEI7QUFDeEIsa0JBQU07QUFEa0IsU0FBNUI7QUFHSCxLQVBEOztBQVNBLG9CQUFFLE1BQUYsRUFBVSxFQUFWLENBQWEsT0FBYixFQUFzQixhQUFLO0FBQ3ZCLFlBQUksRUFBRSxNQUFGLENBQVMsU0FBVCxDQUFtQixRQUFuQixDQUE0QixRQUE1QixDQUFKLEVBQTJDO0FBQ3ZDLGdCQUFNLFVBQVUsRUFBRSxNQUFsQjtBQUNBLGdCQUFNLFNBQVMsaUJBQWlCLE9BQWpCLENBQWY7QUFDQSxnQkFBTSxNQUFNLFNBQVMsT0FBTyxPQUFQLENBQWUsR0FBeEIsRUFBNkIsRUFBN0IsQ0FBWjs7QUFFQSxtQkFBTyxhQUFQLENBQXFCLFdBQXJCLENBQWlDLE1BQWpDO0FBQ0Esa0JBQU0sT0FBTixDQUFjLGNBQWQsRUFBOEI7QUFDMUIsc0JBQU07QUFEb0IsYUFBOUI7QUFHSDtBQUNKLEtBWEQ7QUFZSCxDOztBQTlCRDs7QUFnQ0EsU0FBUyxnQkFBVCxDQUEwQixPQUExQixFQUFtQztBQUMvQixRQUFJLFNBQVMsUUFBUSxhQUFyQjs7QUFFQSxXQUFPLFVBQVUsQ0FBQyxPQUFPLE9BQVAsQ0FBZSxHQUFqQyxFQUFzQztBQUNsQyxpQkFBUyxPQUFPLGFBQWhCO0FBQ0g7O0FBRUQsV0FBTyxNQUFQO0FBQ0g7Ozs7Ozs7O1FDbENlLFcsR0FBQSxXO0FBTmhCLElBQU0sZUFBZTtBQUNqQixXQUFPLEVBRFU7QUFFakIsVUFBTyxJQUFJLEdBQUosRUFGVTtBQUdqQixpQkFBYTtBQUhJLENBQXJCOztBQU1PLFNBQVMsV0FBVCxDQUFxQixPQUFyQixFQUE4QjtBQUNqQyxRQUFNLFlBQVksRUFBbEI7QUFDQSxRQUFJLFFBQVEsT0FBTyxNQUFQLENBQWMsRUFBZCxFQUFrQixZQUFsQixDQUFaOztBQUVBLGFBQVMsRUFBVCxDQUFZLEtBQVosRUFBbUIsUUFBbkIsRUFBNkI7QUFDekIsWUFBSSxDQUFDLFVBQVUsS0FBVixDQUFMLEVBQXVCO0FBQ25CLHNCQUFVLEtBQVYsSUFBbUIsRUFBbkI7QUFDSDs7QUFFRCxrQkFBVSxLQUFWLEVBQWlCLElBQWpCLENBQXNCLFFBQXRCO0FBQ0g7O0FBRUQsYUFBUyxPQUFULENBQWlCLEtBQWpCLEVBQW1DO0FBQUEsWUFBWCxJQUFXLHVFQUFKLEVBQUk7O0FBQy9CLGdCQUFRLFFBQVEsS0FBUixFQUFlLEtBQWYsRUFBc0IsSUFBdEIsQ0FBUjs7QUFFQSxZQUFJLFVBQVUsS0FBVixDQUFKLEVBQXNCO0FBQ2xCLHNCQUFVLEtBQVYsRUFBaUIsT0FBakIsQ0FBeUIsb0JBQVk7QUFDakMseUJBQVMsS0FBVDtBQUNILGFBRkQ7QUFHSDtBQUNKOztBQUVELFdBQU87QUFDSCxjQURHO0FBRUg7QUFGRyxLQUFQO0FBSUgiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGZ1bmN0aW9uIHRleHQod29yZHMpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUod29yZHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCAuLi5jaGlsZHJlbikge1xuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gbmV3RWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZCkpO1xuICAgIHJldHVybiBuZXdFbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGl2KC4uLmNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2RpdicsIC4uLmNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGkoLi4uY2hpbGRyZW4pIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnaScsIC4uLmNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNwYW4oLi4uY2hpbGRyZW4pIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnc3BhbicsIC4uLmNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hdiguLi5jaGlsZHJlbikge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCduYXYnLCAuLi5jaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bCguLi5jaGlsZHJlbikge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCd1bCcsIC4uLmNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpKC4uLmNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2xpJywgLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VjdGlvbiguLi5jaGlsZHJlbikge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdzZWN0aW9uJywgLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcCguLi5jaGlsZHJlbikge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdwJywgLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaDEoLi4uY2hpbGRyZW4pIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnaDEnLCAuLi5jaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoMyguLi5jaGlsZHJlbikge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdoMycsIC4uLmNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFydGljbGUoLi4uY2hpbGRyZW4pIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScsIC4uLmNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1dHRvbiguLi5jaGlsZHJlbikge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdidXR0b24nLCAuLi5jaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb290ZXIoLi4uY2hpbGRyZW4pIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnZm9vdGVyJywgLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW1nKHNvdXJjZSkge1xuICBjb25zdCBpbWFnZSA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWFnZS5zcmMgPSBzb3VyY2U7XG4gIHJldHVybiBpbWFnZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIC4uLmtsYXNzZXMpIHtcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAga2xhc3Nlcy5mb3JFYWNoKGtsYXNzID0+IG5ld0VsZW1lbnQuY2xhc3NMaXN0LmFkZChrbGFzcykpO1xuICAgIHJldHVybiBuZXdFbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkSWQoZWxlbWVudCwgaWQpIHtcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3RWxlbWVudCwge1xuICAgICAgICBpZFxuICAgIH0pO1xufVxuIiwiaW1wb3J0IHtcbiAgICBkaXYsXG4gICAgYWRkSWRcbn0gZnJvbSAnLi4vYnVpbGRlcnMnO1xuaW1wb3J0IG5hdmJhciBmcm9tICcuL25hdmJhcic7XG5pbXBvcnQgYmFubmVyIGZyb20gJy4vYmFubmVyJztcbmltcG9ydCBtZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgZm9vdGVyQmFubmVyIGZyb20gJy4vZm9vdGVyQmFubmVyJztcbmltcG9ydCBtb2RhbCBmcm9tICcuL21vZGFsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBwKHN0b3JlKSB7XG4gICAgY29uc3QgbW9kYWxFbGUgPSBtb2RhbChzdG9yZSk7XG4gICAgY29uc3QgbmF2YmFyRWxlID0gbmF2YmFyKCk7XG4gICAgY29uc3QgYmFubmVyRWxlID0gYmFubmVyKCk7XG4gICAgY29uc3QgbWVudUVsZSA9IG1lbnUoc3RvcmUpO1xuICAgIGNvbnN0IGZvb3RlckJhbm5lckVsZSA9IGZvb3RlckJhbm5lcigpO1xuICAgIGNvbnN0IGFwcEVsZSA9IGFkZElkKGRpdihtb2RhbEVsZSwgbmF2YmFyRWxlLCBiYW5uZXJFbGUsIG1lbnVFbGUsIGZvb3RlckJhbm5lckVsZSksICdhcHAtY29udGFpbmVyJyk7XG5cbiAgICByZXR1cm4gYXBwRWxlO1xufVxuIiwiaW1wb3J0IHtcbiAgICBhZGRDbGFzcyxcbiAgICBkaXYsXG4gICAgaW1nLFxuICAgIHAsXG4gICAgc2VjdGlvbixcbiAgICB0ZXh0XG59IGZyb20gJy4uL2J1aWxkZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmFubmVyKCkge1xuICAgIGNvbnN0IGxvZ28gPSBhZGRDbGFzcyhpbWcoJ2Fzc2V0cy9sb2dvLnBuZycpLCAnbG9nbycpO1xuICAgIGNvbnN0IHRoZVRleHQgPSBhZGRDbGFzcyhwKHRleHQoJ1RoZScpKSwgJ2hlcm8tdGV4dC1saWdodCcpO1xuICAgIGNvbnN0IHB1cmVKc1RleHQgPSBhZGRDbGFzcyhwKHRleHQoJ1B1cmUgSmF2YVNjcmlwdCcpKSwgJ2hlcm8tdGV4dC1ib2xkJyk7XG4gICAgY29uc3QgYXBwVGV4dCA9IGFkZENsYXNzKHAodGV4dCgnQXBwbGljYXRpb24nKSksICdoZXJvLXRleHQtbGlnaHQnKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGFkZENsYXNzKGRpdihsb2dvLCB0aGVUZXh0LCBwdXJlSnNUZXh0LCBhcHBUZXh0KSwgJ2NvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgYmFubmVyQ29udGVudCA9IGFkZENsYXNzKGRpdihjb250YWluZXIpLCAnaGVyby1jb250ZW50Jyk7XG5cbiAgICByZXR1cm4gYWRkQ2xhc3Moc2VjdGlvbihiYW5uZXJDb250ZW50KSwgJ2hlcm8nLCAnc3BsYXNoJyk7XG59XG4iLCJpbXBvcnQge1xuICAgIGFkZENsYXNzLFxuICAgIGRpdixcbiAgICBmb290ZXIsXG4gICAgdGV4dCxcbiAgICBwXG59IGZyb20gJy4uL2J1aWxkZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9vdGVyQmFubmVyKCkge1xuICAgIGNvbnN0IG5hbWUgPSBwKHRleHQoJ0R1YyBUcnVvbmcnKSk7XG4gICAgY29uc3QgY29udGVudCA9IGFkZENsYXNzKGRpdihuYW1lKSwgJ2NvbnRlbnQnLCAnaXMtY2VudGVyZWQnKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGFkZENsYXNzKGRpdihjb250ZW50KSwgJ2NvbnRhaW5lcicpO1xuXG4gICAgcmV0dXJuIGFkZENsYXNzKGZvb3Rlcihjb250YWluZXIpLCAnZm9vdGVyJyk7XG59XG4iLCJpbXBvcnQge1xuICAgIGFkZENsYXNzLFxuICAgIGRpdlxufSBmcm9tICcuLi9idWlsZGVycyc7XG5pbXBvcnQge1xuICAgIGZpbHRlckJ5VHlwZVxufSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCBtZW51TGlzdCBmcm9tICcuL21lbnVMaXN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGVmdE1lbnUoaXRlbXMgPSBbXSkge1xuICAgIGNvbnN0IGFwcGV0aXplcnMgPSBtZW51TGlzdCgnQXBwZXRpemVycycsIGZpbHRlckJ5VHlwZShpdGVtcywgJ2FwcGV0aXplcicpKTtcbiAgICBjb25zdCBidXJnZXJzID0gbWVudUxpc3QoJ0J1cmdlcnMnLCBmaWx0ZXJCeVR5cGUoaXRlbXMsICdidXJnZXInKSk7XG5cbiAgICByZXR1cm4gYWRkQ2xhc3MoZGl2KGFwcGV0aXplcnMsIGJ1cmdlcnMpLCAnY29sdW1uJywgJ2lzLTYnKTtcbn1cbiIsImltcG9ydCB7XG4gICAgYWRkQ2xhc3MsXG4gICAgYWRkSWQsXG4gICAgZGl2LFxuICAgIHNlY3Rpb25cbn0gZnJvbSAnLi4vYnVpbGRlcnMnO1xuaW1wb3J0IHtcbiAgICAkXG59IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IGxlZnRNZW51IGZyb20gJy4vbGVmdE1lbnUnO1xuaW1wb3J0IHJpZ2h0TWVudSBmcm9tICcuL3JpZ2h0TWVudSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnUoc3RvcmUpIHtcbiAgICBjb25zdCBtZW51RWxlID0gYWRkSWQoYWRkQ2xhc3MoZGl2KCksICdjb250YWluZXInKSwgJ21lbnUnKTtcblxuICAgIHN0b3JlLm9uKCdTRVRfSVRFTVMnLCAoe1xuICAgICAgICBpdGVtc1xuICAgIH0pID0+IHtcbiAgICAgICAgY29uc3QgbGVmdFNpZGUgPSBsZWZ0TWVudShpdGVtcyk7XG4gICAgICAgIGNvbnN0IHJpZ2h0U2lkZSA9IHJpZ2h0TWVudShpdGVtcyk7XG4gICAgICAgIGNvbnN0IGNvbHVtbnMgPSBhZGRDbGFzcyhzZWN0aW9uKGxlZnRTaWRlLCByaWdodFNpZGUpLCAnY29sdW1ucycpO1xuICAgICAgICAkKCcjbWVudScpLmNoaWxkcmVuKGNvbHVtbnMpO1xuICAgIH0pO1xuXG4gICAgc3RvcmUub24oJ0lURU1fQURERUQnLCAoe1xuICAgICAgICBjYXJ0XG4gICAgfSkgPT4ge1xuICAgICAgICBjb25zdCBjYXJ0QXJyYXkgPSBbLi4uY2FydF07XG4gICAgICAgIGNvbnN0IGFydGljbGVzID0gY2FydEFycmF5Lm1hcChpZCA9PiBgYXJ0aWNsZVtkYXRhLWtleT0nJHtpZH0nXWApO1xuICAgICAgICBjb25zdCBidXR0b25zID0gY2FydEFycmF5Lm1hcChpZCA9PiBgYXJ0aWNsZVtkYXRhLWtleT0nJHtpZH0nXSBidXR0b24uYWRkLXRvLWNhcnRgKTtcblxuICAgICAgICAkKGFydGljbGVzLmpvaW4oJywgJykpLmFkZENsYXNzKCdpbi1jYXJ0Jyk7XG4gICAgICAgICQoYnV0dG9ucy5qb2luKCcsICcpKS5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgIH0pO1xuXG4gICAgc3RvcmUub24oJ0lURU1fUkVNT1ZFRCcsICh7XG4gICAgICAgIGNhcnRcbiAgICB9KSA9PiB7XG4gICAgICAgIGNvbnN0IG9uUGFnZUtleXMgPSAkKCdhcnRpY2xlLmluLWNhcnQnKS5tYXAoZWxlID0+IHBhcnNlSW50KGVsZS5kYXRhc2V0LmtleSwgMTApKTtcbiAgICAgICAgY29uc3QgaW5DYXJ0S2V5cyA9IFsuLi5jYXJ0XTtcbiAgICAgICAgY29uc3Qga2V5c1RvUmVtb3ZlID0gb25QYWdlS2V5cy5maWx0ZXIoa2V5ID0+ICFpbkNhcnRLZXlzLmluY2x1ZGVzKGtleSkpO1xuXG4gICAgICAgIGtleXNUb1JlbW92ZS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAkKGBhcnRpY2xlW2RhdGEta2V5PScke2tleX0nXWApLnJlbW92ZUNsYXNzKCdpbi1jYXJ0Jyk7XG4gICAgICAgICAgICAkKGBhcnRpY2xlW2RhdGEta2V5PScke2tleX0nXSBidXR0b24uYWRkLXRvLWNhcnRgKS5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWVudUVsZTtcbn1cbiIsImltcG9ydCB7XG4gICAgYWRkQ2xhc3MsXG4gICAgYXJ0aWNsZSxcbiAgICBidXR0b24sXG4gICAgZGl2LFxuICAgIGgzLFxuICAgIHAsXG4gICAgc3BhbixcbiAgICB0ZXh0XG59IGZyb20gJy4uL2J1aWxkZXJzJztcbmltcG9ydCB7XG4gICAgZm9ybWF0UHJpY2Vcbn0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnVJdGVtKGl0ZW1EYXRhID0ge30pIHtcbiAgICBjb25zdCBuYW1lID0gYWRkQ2xhc3MoaDModGV4dChpdGVtRGF0YS5uYW1lKSksICduYW1lJyk7XG4gICAgY29uc3QgcHJpY2UgPSBhZGRDbGFzcyhzcGFuKHRleHQoYCQke2Zvcm1hdFByaWNlKGl0ZW1EYXRhLnByaWNlKX1gKSksICdwcmljZScsICdpcy1wdWxsZWQtcmlnaHQnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGFkZENsYXNzKHAodGV4dChpdGVtRGF0YS5kZXNjcmlwdGlvbikpLCAnZGVzYycpO1xuICAgIGNvbnN0IGFkZFRvQ2FydCA9IGFkZENsYXNzKGJ1dHRvbih0ZXh0KCdBZGQgdG8gQ2FydCcpKSwgJ2J1dHRvbicsICdpcy1wdWxsZWQtcmlnaHQnLCAnYWRkLXRvLWNhcnQnKTtcblxuICAgIGNvbnN0IG1lZGlhQ29udGVudCA9IGFkZENsYXNzKGRpdihuYW1lLCBwcmljZSwgZGVzY3JpcHRpb24sIGFkZFRvQ2FydCksICdtZWRpYS1jb250ZW50Jyk7XG5cbiAgICBjb25zdCBpdGVtID0gYWRkQ2xhc3MoYXJ0aWNsZShtZWRpYUNvbnRlbnQpLCAnbWVkaWEnLCAnbWVudV9pdGVtJyk7XG4gICAgaXRlbS5kYXRhc2V0LmtleSA9IGl0ZW1EYXRhLmlkO1xuXG4gICAgcmV0dXJuIGl0ZW07XG59XG4iLCJpbXBvcnQge1xuICAgIGFkZENsYXNzLFxuICAgIGRpdixcbiAgICBoMSxcbiAgICB0ZXh0XG59IGZyb20gJy4uL2J1aWxkZXJzJztcbmltcG9ydCBtZW51SXRlbSBmcm9tICcuL21lbnVJdGVtJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudUxpc3QoaGVhZGxpbmUsIGl0ZW1zID0gW10pIHtcbiAgICBjb25zdCBtZW51SXRlbXMgPSBpdGVtcy5tYXAobWVudUl0ZW0pO1xuXG4gICAgY29uc3QgdGl0bGUgPSBhZGRDbGFzcyhoMSh0ZXh0KGhlYWRsaW5lKSksICd0aXRsZScpO1xuXG4gICAgcmV0dXJuIGFkZENsYXNzKGRpdih0aXRsZSwgLi4ubWVudUl0ZW1zKSwgJ2NvbGxlY3Rpb24nKTtcbn1cbiIsImltcG9ydCB7XG4gICAgYWRkQ2xhc3MsXG4gICAgYWRkSWQsXG4gICAgYnV0dG9uLFxuICAgIGRpdixcbiAgICBoMSxcbiAgICBpLFxuICAgIHAsXG4gICAgc2VjdGlvbixcbiAgICB0ZXh0LFxuICAgIHVsXG59IGZyb20gJy4uL2J1aWxkZXJzJztcbmltcG9ydCB7XG4gICAgJFxufSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCBtb2RhbEl0ZW0gZnJvbSAnLi9tb2RhbEl0ZW0nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb2RhbChzdG9yZSkge1xuICAgIGNvbnN0IGNsb3NlID0gYWRkSWQoYWRkQ2xhc3MoaSgpLCAnZmEnLCAnZmEtdGltZXMnLCAnY2xvc2UnKSwgJ2Nsb3NlJyk7XG4gICAgY29uc3QgdGl0bGUgPSBhZGRDbGFzcyhoMSh0ZXh0KCdDYXJ0JykpLCAndGl0bGUnKTtcblxuICAgIGNvbnN0IGNhcnRDb250YWluZXIgPSBhZGRJZChkaXYocCh0ZXh0KCdZb3VyIGNhcnQgaXMgZW1wdHkuJykpKSwgJ2NhcnQtaXRlbXMnKTtcblxuICAgIGNvbnN0IGNoZWNrb3V0QnV0dG9uID0gYWRkQ2xhc3MoYnV0dG9uKHRleHQoJ0NoZWNrb3V0JykpLCAnYnV0dG9uJywgJ2lzLWZ1bGx3aWR0aCcpO1xuXG4gICAgY29uc3QgbW9kYWxDb250YWluZXIgPSBhZGRDbGFzcyhkaXYoY2xvc2UsIHRpdGxlLCBjYXJ0Q29udGFpbmVyLCBjaGVja291dEJ1dHRvbiksICdtb2RhbC1jb250YWluZXInKTtcblxuICAgIGNvbnN0IG1vZGFsRWxlID0gYWRkSWQoYWRkQ2xhc3Moc2VjdGlvbihtb2RhbENvbnRhaW5lciksICdtb2RhbCcpLCAnbW9kYWwnKTtcblxuICAgIHN0b3JlLm9uKCdUT0dHTEVfU0hPV19DQVJUJywgKHtcbiAgICAgICAgY2FydFZpc2libGVcbiAgICB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZSA9ICQoJyNtb2RhbCcpO1xuICAgICAgICBpZiAoY2FydFZpc2libGUpIHtcbiAgICAgICAgICAgIGVsZS5hZGRDbGFzcygnc2hvdycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHN0b3JlLm9uKCdJVEVNX0FEREVEJywgKHtcbiAgICAgICAgaXRlbXMsXG4gICAgICAgIGNhcnRcbiAgICB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGNhcnRBcnJheSA9IFsuLi5jYXJ0XTtcbiAgICAgICAgY29uc3QgY2FydEl0ZW1zID0gY2FydEFycmF5Lm1hcChpdGVtSWQgPT4gbW9kYWxJdGVtKGl0ZW1zW2l0ZW1JZF0pKTtcbiAgICAgICAgY29uc3QgY2FydExpc3QgPSBhZGRDbGFzcyh1bCguLi5jYXJ0SXRlbXMpLCAnbWVudScpO1xuICAgICAgICAkKCcjY2FydC1pdGVtcycpLmNoaWxkcmVuKGNhcnRMaXN0KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBtb2RhbEVsZTtcbn1cbiIsImltcG9ydCB7XG4gICAgYWRkQ2xhc3MsXG4gICAgaSxcbiAgICBsaSxcbiAgICBzcGFuLFxuICAgIHRleHRcbn0gZnJvbSAnLi4vYnVpbGRlcnMnO1xuaW1wb3J0IHtcbiAgICBmb3JtYXRQcmljZVxufSBmcm9tICcuLi9oZWxwZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW9kYWxJdGVtKGl0ZW1EYXRhKSB7XG4gICAgY29uc3QgbmFtZSA9IGFkZENsYXNzKHNwYW4odGV4dChpdGVtRGF0YS5uYW1lKSksICduYW1lJyk7XG4gICAgY29uc3QgcHJpY2UgPSBhZGRDbGFzcyhzcGFuKHRleHQoZm9ybWF0UHJpY2UoaXRlbURhdGEucHJpY2UpKSksICdwcmljZScsICdpcy1wdWxsZWQtcmlnaHQnKTtcbiAgICBjb25zdCByZW1vdmVCdXR0b24gPSBhZGRDbGFzcyhpKCksICdmYScsICdmYS10aW1lcycsICdyZW1vdmUnKTtcblxuICAgIGNvbnN0IGl0ZW0gPSBhZGRDbGFzcyhsaShuYW1lLCBwcmljZSwgcmVtb3ZlQnV0dG9uKSwgJ21lbnUtaXRlbScpO1xuICAgIGl0ZW0uZGF0YXNldC5rZXkgPSBpdGVtRGF0YS5pZDtcblxuICAgIHJldHVybiBpdGVtO1xufVxuIiwiaW1wb3J0IHtcbiAgICBhZGRDbGFzcyxcbiAgICBhZGRJZCxcbiAgICBkaXYsXG4gICAgaSxcbiAgICBuYXYsXG4gICAgc3BhblxufSBmcm9tICcuLi9idWlsZGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5hdmJhcigpIHtcbiAgICBjb25zdCBuYXZMZWZ0ID0gYWRkQ2xhc3MoZGl2KCksICduYXZiYXItbGVmdCcpO1xuXG4gICAgY29uc3QgY2FydEljb24gPSBhZGRJZChhZGRDbGFzcyhpKCksICdmYScsICdmYS1zaG9wcGluZy1jYXJ0JyksICdjYXJ0LWljb24nKTtcbiAgICBjb25zdCBjYXJ0SXRlbXMgPSBhZGRDbGFzcyhzcGFuKCksICdjYXJ0LWl0ZW1zJyk7XG4gICAgY29uc3QgbmF2YmFySXRlbSA9IGFkZENsYXNzKGRpdihjYXJ0SWNvbiwgY2FydEl0ZW1zKSwgJ25hdmJhci1pdGVtJyk7XG4gICAgY29uc3QgbmF2UmlnaHQgPSBhZGRDbGFzcyhkaXYobmF2YmFySXRlbSksICduYXZiYXItcmlnaHQnKTtcblxuICAgIHJldHVybiBhZGRDbGFzcyhuYXYobmF2TGVmdCwgbmF2UmlnaHQpLCAnbmF2YmFyJyk7XG59XG4iLCJpbXBvcnQge1xuICAgIGFkZENsYXNzLFxuICAgIGRpdlxufSBmcm9tICcuLi9idWlsZGVycyc7XG5pbXBvcnQge1xuICAgIGZpbHRlckJ5VHlwZVxufSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCBtZW51TGlzdCBmcm9tICcuL21lbnVMaXN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmlnaHRNZW51KGl0ZW1zID0gW10pIHtcbiAgICBjb25zdCBhcHBldGl6ZXJzID0gbWVudUxpc3QoJ1NvdXBzIGFuZCBTYWxhZHMnLCBmaWx0ZXJCeVR5cGUoaXRlbXMsICdzb3VwX3NhbGFkJykpO1xuICAgIGNvbnN0IGRlc3NlcnRzID0gbWVudUxpc3QoJ0Rlc3NlcnRzJywgZmlsdGVyQnlUeXBlKGl0ZW1zLCAnZGVzc2VydCcpKTtcblxuICAgIHJldHVybiBhZGRDbGFzcyhkaXYoYXBwZXRpemVycywgZGVzc2VydHMpLCAnY29sdW1uJywgJ2lzLTYnKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJCeVR5cGUobWFwLCB0eXBlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG1hcClcbiAgICAgICAgLmZpbHRlcihrZXkgPT4gbWFwW2tleV0udHlwZSA9PT0gdHlwZSlcbiAgICAgICAgLm1hcChrZXkgPT4gbWFwW2tleV0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0UHJpY2UocHJpY2UpIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdChwcmljZSkudG9GaXhlZCgyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uICQocXVlcnkpIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocXVlcnkpKTtcblxuICAgIGZ1bmN0aW9uIGNoaWxkcmVuKHRvQWRkKSB7XG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goZWxlID0+IHtcbiAgICAgICAgICAgIHdoaWxlIChlbGUuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIGVsZS5yZW1vdmVDaGlsZChlbGUuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsZS5hcHBlbmRDaGlsZCh0b0FkZCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uKGV2ZW50LCBjYikge1xuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGVsZSA9PiB7XG4gICAgICAgICAgICBlbGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2IpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRDbGFzcyhrbGFzcykge1xuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGVsZSA9PiB7XG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LmFkZChrbGFzcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGtsYXNzKSB7XG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goZWxlID0+IHtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKGtsYXNzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXR0cihhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goZWxlID0+IHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBlbGUucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1hcChjYikge1xuICAgICAgICByZXR1cm4gZWxlbWVudHMubWFwKGNiKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBvbixcbiAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgIGFkZENsYXNzLFxuICAgICAgICByZW1vdmVDbGFzcyxcbiAgICAgICAgYXR0cixcbiAgICAgICAgbWFwXG4gICAgfTtcbn1cbiIsImltcG9ydCBhcHAgZnJvbSAnLi9jb21wb25lbnRzL2FwcCc7XG5pbXBvcnQge1xuICAgIGNyZWF0ZVN0b3JlXG59IGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHNldHVwTGlzdGVuZXJzIGZyb20gJy4vc2V0dXBfbGlzdGVuZXJzJztcblxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgZXZlbnQsIGRhdGEpIHtcbiAgICBzd2l0Y2ggKGV2ZW50KSB7XG4gICAgICAgIGNhc2UgJ1NFVF9JVEVNUyc6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgICBpdGVtczogZGF0YS5pdGVtcy5yZWR1Y2UoKHRvdGFsLCBpdGVtKSA9PlxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCB0b3RhbCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgW2l0ZW0uaWRdOiBpdGVtXG4gICAgICAgICAgICAgICAgICAgIH0pLCB7fSksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgY2FzZSAnVE9HR0xFX1NIT1dfQ0FSVCc6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgICBjYXJ0VmlzaWJsZTogIXN0YXRlLmNhcnRWaXNpYmxlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIGNhc2UgJ0lURU1fQURERUQnOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgY2FydDogKG5ldyBTZXQoc3RhdGUuY2FydCkpLmFkZChkYXRhLml0ZW0pLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIGNhc2UgJ0lURU1fUkVNT1ZFRCc6XG4gICAgICAgICAgICBjb25zdCBuZXdDYXJ0ID0gKG5ldyBTZXQoc3RhdGUuY2FydCkpO1xuICAgICAgICAgICAgbmV3Q2FydC5kZWxldGUoZGF0YS5pdGVtKTtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgICAgIGNhcnQ6IG5ld0NhcnQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcik7XG5cbmZldGNoKCdmb29kLmpzb24nKVxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgIC50aGVuKHJlc0JvZHkgPT4ge1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgICAgICBib2R5Lmluc2VydEJlZm9yZShhcHAoc3RvcmUpLCBib2R5LmNoaWxkTm9kZXNbMF0pO1xuICAgICAgICBzdG9yZS50cmlnZ2VyKCdTRVRfSVRFTVMnLCB7XG4gICAgICAgICAgICBpdGVtczogcmVzQm9keVxuICAgICAgICB9KTtcbiAgICAgICAgc2V0dXBMaXN0ZW5lcnMoc3RvcmUpO1xuICAgIH0pO1xuIiwiaW1wb3J0IHtcbiAgICAkXG59IGZyb20gJy4vaGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHN0b3JlKSB7XG4gICAgJCgnI2NhcnQtaWNvbiwgI2Nsb3NlJykub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzdG9yZS50cmlnZ2VyKCdUT0dHTEVfU0hPV19DQVJUJyk7XG4gICAgfSk7XG5cbiAgICAkKCcuYWRkLXRvLWNhcnQnKS5vbignY2xpY2snLCBlID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gZ2V0UGFyZW50V2l0aEtleShlLmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgICAgIGNvbnN0IGtleSA9IHBhcnNlSW50KHBhcmVudC5kYXRhc2V0LmtleSwgMTApO1xuICAgICAgICBzdG9yZS50cmlnZ2VyKCdJVEVNX0FEREVEJywge1xuICAgICAgICAgICAgaXRlbToga2V5XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZW1vdmUnKSkge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gZ2V0UGFyZW50V2l0aEtleShlbGVtZW50KTtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHBhcnNlSW50KHBhcmVudC5kYXRhc2V0LmtleSwgMTApO1xuXG4gICAgICAgICAgICBwYXJlbnQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChwYXJlbnQpO1xuICAgICAgICAgICAgc3RvcmUudHJpZ2dlcignSVRFTV9SRU1PVkVEJywge1xuICAgICAgICAgICAgICAgIGl0ZW06IGtleVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0UGFyZW50V2l0aEtleShlbGVtZW50KSB7XG4gICAgbGV0IHBhcmVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcblxuICAgIHdoaWxlIChwYXJlbnQgJiYgIXBhcmVudC5kYXRhc2V0LmtleSkge1xuICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50RWxlbWVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50O1xufVxuIiwiY29uc3QgZGVmYXVsdFN0YXRlID0ge1xuICAgIGl0ZW1zOiB7fSxcbiAgICBjYXJ0OiAobmV3IFNldCgpKSxcbiAgICBjYXJ0VmlzaWJsZTogZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0b3JlKHJlZHVjZXIpIHtcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSB7fTtcbiAgICBsZXQgc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0U3RhdGUpO1xuXG4gICAgZnVuY3Rpb24gb24oZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzW2V2ZW50XSkge1xuICAgICAgICAgICAgbGlzdGVuZXJzW2V2ZW50XSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdGVuZXJzW2V2ZW50XS5wdXNoKGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmlnZ2VyKGV2ZW50LCBkYXRhID0ge30pIHtcbiAgICAgICAgc3RhdGUgPSByZWR1Y2VyKHN0YXRlLCBldmVudCwgZGF0YSk7XG5cbiAgICAgICAgaWYgKGxpc3RlbmVyc1tldmVudF0pIHtcbiAgICAgICAgICAgIGxpc3RlbmVyc1tldmVudF0uZm9yRWFjaChjYWxsYmFjayA9PiB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soc3RhdGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBvbixcbiAgICAgICAgdHJpZ2dlclxuICAgIH07XG59XG4iXX0=
