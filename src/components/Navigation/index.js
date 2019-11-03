import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import {Menu, Icon} from "antd";
import 'antd/dist/antd.css';
import Logo from './logo.svg';
import './navigation.css';
const Navigation = () => (
    <div>
        <Menu mode={"horizontal"}>
                <Menu.Item>
                    <Link to={ROUTES.LANDING}><img src={Logo}/></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to={ROUTES.SIGN_IN}><Icon type="login" />Sign In</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to={ROUTES.HOME}><Icon type="dashboard" />Home</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to={ROUTES.ACCOUNT}><Icon type="user" />Account</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to={ROUTES.ADMIN}><Icon type="crown" />Admin</Link>
                </Menu.Item>
        </Menu>
    </div>
);
export default Navigation;