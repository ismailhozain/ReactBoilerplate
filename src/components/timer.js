import React, {Component} from 'react';
import '../css/timer.css';
import {LoginTime} from "../screens/sign_in";
import Timer from "react-compound-timer";
class myComponent extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <div>
                <Timer initialTime={LoginTime}
                    formatValue={(value) => `${(value < 10 ? `0${value}` : value)}`}>


                    <Timer.Hours/>:<Timer.Minutes/>:<Timer.Seconds/>
                </Timer>
            </div>
        )
    }

}





export default myComponent;
