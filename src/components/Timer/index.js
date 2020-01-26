import React, {Component} from 'react';
import './timer.css';
import SignInPage from "../SignIn";
import Timer from "react-compound-timer";
class myComponent extends Component {
    componentDidMount() {

    }
    func() {
        alert("sa");
    }
    render() {
        return (
            <div>
                <Timer>
                    <Timer.Hours formatValue={value => `${value} hours. `} />:<Timer.Minutes formatValue={value => `${value} hours. `} />:<Timer.Seconds formatValue={value => value />
                </Timer>
            </div>
        )
    }

}





export default myComponent;
