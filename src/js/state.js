const defaultState = {
    items: {},
    cart: (new Set()),
    cartVisible: false
}

export function createStore(reducer) {
    const listeners = {};
    let state = Object.assign({}, defaultState);

    function on(event, callback) {
        if (!listeners[event]) {
            listeners[event] = [];
        }

        listeners[event].push(callback);
    }

    function trigger(event, data = {}) {
        state = reducer(state, event, data);

        if (listeners[event]) {
            listeners[event].forEach(callback => {
                callback(state);
            });
        }
    }

    return {
        on,
        trigger
    };
}
