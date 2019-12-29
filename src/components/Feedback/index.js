import React from 'react';
import Input from 'antd';
import './feedback.css';
import TextAreaComponent from "../TextAreaComponent";
const Feedback= () => (
    <div className={"container"}>
        <div className={"titleDiv"}>
            <h1 className={"title"}>Feedback</h1>
        </div>
        <TextAreaComponent/>
    </div>

);


export default Feedback;
