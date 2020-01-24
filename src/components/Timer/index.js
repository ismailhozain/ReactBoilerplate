import React, {Component} from 'react';
import './timer.css';
import moment from "moment";
class myComponent extends Component {
    componentDidMount() {
        const startTime = moment().format();
    }
    func() {
        alert("sa");
    }
    render() {
        return (
            <div>
                <Timer>
                    <Timer.Seconds />
                </Timer>
            </div>
        )
    }

}





export default myComponent;
