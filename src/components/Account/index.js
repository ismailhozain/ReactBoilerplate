import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import {Menu, Icon} from "antd";
import {withAuthorization} from '../Session';
import 'antd/dist/antd.css';

const Account = () => (
  <div>
    <h1>Account</h1>
      <Link to={ROUTES.SETTINGS}>Settings</Link>
      <Link to={ROUTES.STATS}>Statistics</Link>
  </div>
);

const condition = authUser => !!authUser;
export default withAuthorization(condition)(Account);
