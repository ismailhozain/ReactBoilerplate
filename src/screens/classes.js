import React from 'react';
import {withAuthorization} from "../components/Session";

const Classes= () => (
    <div>
        <h1>Classes</h1>
    </div>
);
const condition = authUser => !!authUser;

export default withAuthorization(condition)(Classes);
