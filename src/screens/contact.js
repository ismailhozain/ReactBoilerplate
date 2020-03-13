import React from 'react';
import '../css/contact.css';
import {withAuthorization} from "../components/Session";
const Contact = () => (
    <div>
        <h1 className={"center"}>Contact Us...</h1>
    </div>
);
const condition = authUser => !!authUser;

export default withAuthorization(condition)(Contact);
