import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import {Menu, Icon} from "antd";
import 'antd/dist/antd.css';

const Account = () => (
  <div>
    <h1>Account</h1>
      <Link to={ROUTES.SETTINGS}>Settings</Link>
  </div>
);

export default Account;
