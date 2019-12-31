import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import * as ROUTES from '../../constants/routes';
import 'antd/dist/antd.css';
import {withAuthorization} from '../Session';

const Grades = () => (
    <div>
        <h1>Grades</h1>

    </div>
);
const condition = authUser => !!authUser;

export default withAuthorization(condition)(Grades);
