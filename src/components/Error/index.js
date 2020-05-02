import React from 'react';
import './error.css';
import {Link} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import Button from "antd/es/button";
const Error = () => (
    <div>
        <h1 className={"center"}>404</h1>
        <h2 className={"center"}>That page does not exist. </h2>
        <p>Go <Button><Link to={ROUTES.LANDING}>Home</Link></Button></p>
    </div>
);

export default Error;
