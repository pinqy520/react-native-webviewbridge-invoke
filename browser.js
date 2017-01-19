"use strict";
const factory_1 = require("react-native-webview-invoke/factory");
const { bind, define, listener, ready, fn, addEventListener, removeEventListener, isConnect } = factory_1.default((data) => window['WebViewBridge'].send(data));
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
    bind, define, fn, addEventListener, removeEventListener, isConnect
};
