import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../routes';
import {Menu, Icon} from "antd";
import 'antd/dist/antd.css';
import Logo from '../../assets/logo.svg';
import '../css/navigation.css';
import AuthUserContext from "./Session/context";
import SignOutButton from "./sign_out";
let LoadTime = 0;
const Navigation = () => (
    <div>
        <AuthUserContext.Consumer>
            {authUser =>
                authUser ? <NavigationAuth /> : <NavigationNonAuth />
            }
        </AuthUserContext.Consumer>
    </div>
);
const NavigationAuth = () => (
    <Menu mode={"horizontal"}>
        <Menu.Item>
            <Link to={ROUTES.LANDING}><img alt = "the studyboard logo, a blue and white window diamond." src={Logo}/></Link>
        </Menu.Item>
        <Menu.Item>
            <Link to={ROUTES.HOME}><Icon type="dashboard" />Home</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to={ROUTES.ACCOUNT}><Icon type="user" />Account</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to={ROUTES.TEACHER}><Icon type="crown"/>Teacher</Link>
        </Menu.Item>
        <Menu.Item>
            <SignOutButton/>
        </Menu.Item>
    </Menu>
);
const NavigationNonAuth = () => (
    <Menu mode={"horizontal"}>
        <Menu.Item>
            <Link to={ROUTES.LANDING}><img alt = "the studyboard logo, a blue and white window diamond." src={Logo}/></Link>
        </Menu.Item>
        <Menu.Item>
            <Link to={ROUTES.SIGN_IN}><Icon type="login" />Sign In</Link>
        </Menu.Item>
    </Menu>
);
export default Navigation;
export {LoadTime};
