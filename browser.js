"use strict";

var factory_1 = require("react-native-webview-invoke/factory");
var isBrowser = typeof window !== 'undefined';

var _factory_1$default = factory_1.default(function (data) {
    isBrowser && window['WebViewBridge'].send(data);
}),
    bind = _factory_1$default.bind,
    define = _factory_1$default.define,
    listener = _factory_1$default.listener,
    ready = _factory_1$default.ready,
    fn = _factory_1$default.fn,
    addEventListener = _factory_1$default.addEventListener,
    removeEventListener = _factory_1$default.removeEventListener,
    isConnect = _factory_1$default.isConnect;

if (isBrowser) {
    if (window['WebViewBridge']) {
        ready();
    } else {
        window.addEventListener('webviewbridge:init', function () {
            if (window['WebViewBridge']) {
                window['WebViewBridge'].addMessageListener(listener);
                ready();
            }
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    bind: bind, define: define, fn: fn, addEventListener: addEventListener, removeEventListener: removeEventListener, isConnect: isConnect
};
