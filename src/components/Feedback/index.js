import React from 'react';
import Input from 'antd';
import './feedback.css';
import TextAreaComponent from "../TextAreaComponent";
import {withAuthorization} from "../Session";
const Feedback= () => (
    <div className={"container"}>
        <div className={"titleDiv"}>
            <h1 className={"title"}>Feedback</h1>
        </div>
        <TextAreaComponent/>
    </div>

);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Feedback);
