import React from 'react';
import '../css/feedback.css';
import TextAreaComponent from "../components/text_area_component";
import {withAuthorization} from "../components/Session";
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
