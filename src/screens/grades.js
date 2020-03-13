import React from 'react';
import 'antd/dist/antd.css';
import {withAuthorization} from '../components/Session';

const Grades = () => (
    <div>
        <h1>Grades</h1>

    </div>
);
const condition = authUser => !!authUser;

export default withAuthorization(condition)(Grades);
