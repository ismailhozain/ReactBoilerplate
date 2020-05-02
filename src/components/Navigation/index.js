import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import {Menu} from "antd";
import 'antd/dist/antd.css';
import Logo from './logo.png';
import './navigation.css';
const NavigationWrapper = () => (
    <div>
       <Navigation/>
    </div>
);

const Navigation = () => (
    <Menu mode={"horizontal"}>
         <Menu.Item>
             <Link to={ROUTES.LANDING}><img alt = "the logo of this site. This is the logo of Ismail Hozain, circa 2018, a black dragon surrounding his initials I and H" src={Logo}/></Link>
        </Menu.Item>
    </Menu>
);
export default NavigationWrapper;
