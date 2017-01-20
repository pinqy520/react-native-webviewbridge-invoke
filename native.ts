import createMessager, { IPayload } from 'react-native-webview-invoke/factory'

export default (getWebview: () => any) => {
    const { bind, define, listener: handler, fn, addEventListener, removeEventListener, isConnect } = createMessager(
        (data: any) => {
            const webview = getWebview()
            webview && webview.sendToBridge(data)
        }
    )
    return {
        bind, define, fn,
        listener: (msg: any) => handler(msg),
        addEventListener, removeEventListener, isConnect
    }
}