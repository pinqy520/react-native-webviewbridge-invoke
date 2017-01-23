"use strict";
var factory_1 = require("react-native-webview-invoke/factory");
var isBrowser = typeof window !== 'undefined';
var _a = factory_1.default(function (data) { isBrowser && window['WebViewBridge'].send(data); }), bind = _a.bind, define = _a.define, listener = _a.listener, ready = _a.ready, fn = _a.fn, addEventListener = _a.addEventListener, removeEventListener = _a.removeEventListener, isConnect = _a.isConnect;
if (isBrowser) {
    if (window['WebViewBridge'] && window['WebViewBridge'].addMessageListener) {
        ready();
    }
    else {
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
