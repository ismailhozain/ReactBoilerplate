import React from 'react';
import {withAuthorization} from "../components/Session";
import '../css/resources.css';

const Resources = () => (
    <div>
        <h1>Resources</h1>
    </div>
);
const condition = authUser => !!authUser;

export default withAuthorization(condition)(Resources);
