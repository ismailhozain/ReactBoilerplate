import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import 'antd/dist/antd.css';
import StickyFooter from 'react-sticky-footer';
import './footer.css';


const Footer = () => (
    <div className={"foot center"}>
        <StickyFooter>
            <Link className="links" to={ROUTES.ABOUT}>About</Link>
            <p className={"copy"}>Copyright Ismail Hozain</p>
        </StickyFooter>
    </div>
);
export default Footer;