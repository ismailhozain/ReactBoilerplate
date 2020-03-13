import React from 'react';
import {Link} from "react-router-dom";
import * as ROUTES from "../routes";
import {Card} from "antd";
import {withAuthorization} from "./Session";
import '../css/status.css';
const Status = () => (
    <div>
        <h1>Status</h1>
        {/*<Card title="Grades" style={{ width: 300 }}>
            <p>
                Your grades. Piped straight from HAC, with grade adjustments and other useful things :)
            </p>
            <Link to={ROUTES.GRADES}>Lets go!</Link>
        </Card>
        <Card title="Calendar" style={{ width: 300 }}>
            <p>
                We have combined your Google calendar with that of Canvas to make your life easier :)
            </p>
            <Link to={ROUTES.CALENDAR}>Lets go!</Link>
        </Card>*/}
        <Card title="Resources" style={{ width: 300 }}>
            <p>
                Find information that pertains to you or somebody close to you.
            </p>
            <Link to={ROUTES.RESOURCES}>Lets go!</Link>
        </Card>
        <Card title="Assignments" style={{ width: 300 }}>
            <p>
                Don't ever miss an assignment! (or at least forget they exist)
            </p>
            <Link to={ROUTES.ASSIGNMENTS}>Lets go!</Link>
        </Card>
    </div>
);
const condition = authUser => !!authUser;

export default withAuthorization(condition)(Status);
