import React from 'react';
import './contact.css';
import {withAuthorization} from "../Session";
const Contact = () => (
    <div>
        <h1 className={"center"}>Contact Us...</h1>
    </div>
);
const condition = authUser => !!authUser;

export default withAuthorization(condition)(Contact);
