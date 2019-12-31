import React, {Component} from 'react';
import ReactTimer from '@xendora/react-timer';
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
            </div>
        )
    }

}





export default myComponent;
