import createMessager, { IPayload } from 'react-native-webview-invoke/factory'


const { bind, define, listener, ready, fn, addEventListener, removeEventListener, isConnect } = createMessager(
    (data: any) => (window as any)['WebViewBridge'].send(data)
)

if ((window as any)['WebViewBridge']) {
    ready()
} else {
    window.addEventListener('webviewbridge:init', function () {
        if ((window as any)['WebViewBridge']) {
            (window as any)['WebViewBridge'].addMessageListener(listener)
            ready()
        }
    })
}

export default {
    bind, define, fn, addEventListener, removeEventListener, isConnect
}