import React from 'react';
import './stats.css';
import {withAuthorization} from "../Session";
const Stats = () => (
    <div>
    </div>
);
const condition = authUser => !!authUser;

export default withAuthorization(condition)(Stats);
