"use strict";
var factory_1 = require("react-native-webview-invoke/factory");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (getWebview) {
    var _a = factory_1.default(function (data) {
        var webview = getWebview();
        webview && webview.sendToBridge(data);
    }), bind = _a.bind, define = _a.define, handler = _a.listener, fn = _a.fn, addEventListener = _a.addEventListener, removeEventListener = _a.removeEventListener, isConnect = _a.isConnect;
    return {
        bind: bind, define: define, fn: fn,
        listener: function (e) { return handler(JSON.parse(e.nativeEvent.data)); },
        addEventListener: addEventListener, removeEventListener: removeEventListener, isConnect: isConnect
    };
};
