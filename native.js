"use strict";
const factory_1 = require("react-native-webview-invoke/factory");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (getWebview) => {
    const { bind, define, listener: handler, fn, addEventListener, removeEventListener, isConnect } = factory_1.default((data) => {
        const webview = getWebview();
        webview && webview.sendToBridge(data);
    });
    return {
        bind, define, fn,
        listener: (msg) => handler(msg),
        addEventListener, removeEventListener, isConnect
    };
};
