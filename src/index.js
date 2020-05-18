import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import zhCN from "antd/es/locale/zh_CN"
import moment from "moment"
import "moment/locale/zh-cn"
import {ConfigProvider} from "antd"
import "antd/dist/antd.css"
import './index.css';
import "./assets/js/rem"
import {Provider} from "react-redux"
import { persistStore } from "redux-persist"
import { PersistGate } from "redux-persist/lib/integration/react"
import { store } from "./store"

moment.locale('zh-cn')



ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistStore(store)}>
            <ConfigProvider locale={zhCN}>
                <Router />
            </ConfigProvider>
        </PersistGate>
    </Provider> ,
    document.getElementById('root'));

