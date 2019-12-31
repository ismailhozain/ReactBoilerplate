import React from 'react';
import './stats.css';
import {withAuthorization} from "../Session";
const Stats = () => (
    <div>
        <h1 className={"title"}>We like statistics. A lot! Take a look at yours </h1>
        <h2>Time spent working</h2>

    </div>
);
const condition = authUser => !!authUser;

export default withAuthorization(condition)(Stats);
