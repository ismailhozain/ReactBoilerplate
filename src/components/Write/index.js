import React from 'react';
import Input from 'antd';
import './write.css';
import TextAreaComponent from "../TextAreaComponent";

//TODO oh deary me, the mobile version of react-pdf is still under development, guess that will have to wait. eefity freefity foofs.


const Write= () => (
    <div className={"container"}>
        <div className={"titleDiv"}>
            <h1 className={"title"}>Write</h1>
        </div>
        <TextAreaComponent/>
    </div>

);


export default Write;
