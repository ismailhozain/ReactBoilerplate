import React, {Component} from 'react';
import {withAuthorization} from "../Session";
import './calendar.css';

class CalendarClass extends Component {
    render() {
        return(
            <div>
                <h1>Calendar</h1>
            </div>
        );
    }
}

const Calendar = () => (
    <CalendarClass/>
);
const condition = authUser => !!authUser;

export default withAuthorization(condition)(Calendar);
