import React from 'react';
import Input from 'antd';
import './write.css';
import TextAreaComponent from "../TextAreaComponent";
const Write= () => (
    <div className={"container"}>
        <div className={"titleDiv"}>
            <h1 className={"title"}>Write</h1>
        </div>
        <TextAreaComponent/>
    </div>

);


export default Write;
