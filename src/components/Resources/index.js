import React from 'react';
import {withAuthorization} from "../Session";
import './resources.css';

const Resources = () => (
    <div>
        <h1>Resources</h1>
    </div>
);
const condition = authUser => !!authUser;

export default withAuthorization(condition)(Resources);
