"use strict";
var factory_1 = require("react-native-webview-invoke/factory");
var _a = factory_1.default(function (data) { return window['WebViewBridge'].send(data); }), bind = _a.bind, define = _a.define, listener = _a.listener, ready = _a.ready, fn = _a.fn, addEventListener = _a.addEventListener, removeEventListener = _a.removeEventListener, isConnect = _a.isConnect;
if (window['WebViewBridge']) {
    ready();
}
else {
    window.addEventListener('webviewbridge:init', function () {
        if (window['WebViewBridge']) {
            ready();
        }
    });
}
window['WebViewBridge'].addMessageListener(listener);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    bind: bind, define: define, fn: fn, addEventListener: addEventListener, removeEventListener: removeEventListener, isConnect: isConnect
};
