import React from 'react';
import './stats.css';
import {withAuthorization} from "../Session";
import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import {Card} from "antd";
import moment from "moment";
import {LoginTime} from "../SignIn";
import {LogoutTime} from "../SignOut";
let time = moment.duration(LoginTime.subtract(LogoutTime));
const Stats = () => (
    <div>
        <h1 className={"statsTitle"}>We like statistics. A lot! Take a look at yours </h1>
        <Card title="lastSession" style={{ width: 300 }}>
            <h2>
               Last Session
                {time}
            </h2>

        </Card>
        <h2>Time spent working</h2>

    </div>
);
const condition = authUser => !!authUser;

export default withAuthorization(condition)(Stats);
