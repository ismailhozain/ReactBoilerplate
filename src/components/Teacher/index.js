import React from 'react';
import withAuthorization from "../Session/withAuthorization";
import * as ROLES from '../../constants/roles';
const Teacher = () => (
    <div>
        <h1 className={"center"}>Dashboard</h1>
        <h2 className={"center"}>
            Hello teacher
        </h2>
    </div>
);
const condition = authUser =>
    authUser && !!authUser.roles[ROLES.ADMIN];{/*TODO MAKE ROLE SYSTEM ASAP*/}
export default withAuthorization(condition)(Teacher);
