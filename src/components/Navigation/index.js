import React from 'react';
import * as ROUTES from '../../constants/routes';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    NavLink
} from "react-router-dom";

import { Menu, Icon} from 'antd';
import { Button } from 'antd';
const Navigation = () => (
    <div>

        <Menu mode="horizontal">
            <Menu.Item componenet={Link} to={ROUTES.SIGN_IN} key="signin">Sign In</Menu.Item>
            <Menu.Item key="landing">
                <Link to={ROUTES.LANDING}>Landing</Link>
            </Menu.Item>
            <Menu.Item key="home">
                <Link to={ROUTES.HOME}>Home</Link>
            </Menu.Item>
            <Menu.Item key="admin">
                <Link to={ROUTES.ADMIN}>Admin</Link>
            </Menu.Item>
        </Menu>
    </div>
);
export default Navigation;