import React from 'react';
import {withAuthorization} from "../Session";
import './study.css';

const Study = () => (
    <div>
        <h1>Study</h1>
    </div>
);
const condition = authUser => !!authUser;

export default withAuthorization(condition)(Study);
