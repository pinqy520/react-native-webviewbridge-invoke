import { IPayload } from 'react-native-webview-invoke/factory';
declare var _default: (getWebview: () => any) => {
    bind: <T>(name: string) => (...args: any[]) => Promise<T>;
    define: (name: string, callback: Function) => void;
    fn: any;
    listener: (msg: any) => any;
    addEventListener: (name: string, callback: (params: IPayload<any>) => void) => void;
    removeEventListener: (name: string, callback: (params: IPayload<any>) => void) => void;
    isConnect: () => boolean;
};
export default _default;
