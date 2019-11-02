import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import {Menu} from "antd";
import 'antd/dist/antd.css';

const Navigation = () => (
    <div>
        <Menu mode={"horizontal"}>
                <Menu.Item>
                    <Link to={ROUTES.SIGN_IN}>Sign In</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to={ROUTES.LANDING}>Landing</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to={ROUTES.HOME}>Home</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to={ROUTES.ACCOUNT}>Account</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to={ROUTES.ADMIN}>Admin</Link>
                </Menu.Item>
        </Menu>
    </div>
);
export default Navigation;