import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import {Menu, Icon} from "antd";
import 'antd/dist/antd.css';
import './footer.css';
const Footer = () => (
    <div className={"foot center"}>
        <Link className="links" to={ROUTES.CONTACT}>Contact us.</Link>
        <Link to={ROUTES.ABOUT}>About</Link>

        <p className={"copy"}>Copyright MHS Software Division</p>
    </div>
);
export default Footer;