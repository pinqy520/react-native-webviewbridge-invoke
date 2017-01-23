import createMessager, { IPayload } from 'react-native-webview-invoke/factory'

const isBrowser = typeof window !== 'undefined'

const { bind, define, listener, ready, fn, addEventListener, removeEventListener, isConnect } = createMessager(
    (data: any) => { isBrowser && (window as any)['WebViewBridge'].send(data) }
)

if (isBrowser) {
    if ((window as any)['WebViewBridge'] && (window as any)['WebViewBridge'].addMessageListener) {
        ready()
    } else {
        window.addEventListener('webviewbridge:init', function () {
            if ((window as any)['WebViewBridge']) {
                (window as any)['WebViewBridge'].addMessageListener(listener)
                ready()
            }
        })
    }
}

export default {
    bind, define, fn, addEventListener, removeEventListener, isConnect
}