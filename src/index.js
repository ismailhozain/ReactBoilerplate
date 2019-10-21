import React from 'react';
import ReactDOM from 'react-dom';
//react stuff above, add new pages beneath.
import './index.css';
import App from './App';
import "antd/dist/antd.css";
import * as serviceWorker from './serviceWorker';
import { Layout, Menu, Breadcrumb } from 'antd';
// Your web app's Firebase configuration

ReactDOM.render(<App />, document.getElementById('root'));
//LOOK KIDS. YOU PROBABLY SHOULDNT TOUCH THIS FILE MUCH.




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
