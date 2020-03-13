import React, {Component} from 'react';
import {withAuthorization} from "../Session";
import './study.css';

class StudyClass extends Component {

    componentDidMount() {

    }
    render() {
        return (
            <div>
                <h1>Work</h1>

                </div>
        );
    }
};

const condition = authUser => !!authUser;

export default withAuthorization(condition)(StudyClass);
