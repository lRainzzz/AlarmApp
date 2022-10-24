import { AppRegistry } from "react-native";
import App from './app.json';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import React from 'react';
import configureStore from "./src/store";

const store = configureStore();
const RNRedux=()=>{
    return (<Provider store={store}>
        <App />
    </Provider> 
    )
}




AppRegistry.registerComponent(appName, () => RNRedux);

