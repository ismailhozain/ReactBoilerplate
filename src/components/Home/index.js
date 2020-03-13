import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import * as ROUTES from '../../constants/routes';
import 'antd/dist/antd.css';
import {withAuthorization} from '../Session';
import Footer from "../Footer";
const Home = () => (
  <div>
    <h1>What would you like to do today?</h1>
    <div>
        <Card title="Status" style={{ width: 300 }}>
            <p>
                Check grades, assignment reminders, calendar and your information.
            </p>
            <Link to={ROUTES.STATUS}>Lets go!</Link>
        </Card>
        <Card title="Work" style={{ width: 300 }}>
            <p>
                Complete Assignments.
            </p>
            <Link to={ROUTES.WORK}>Lets go!</Link>
        </Card>
        <Card title="Find Classes" style={{ width: 300 }}>
            <p>
                Look at reviews from other students on standardized classes concerning the material and the pace of the class and the final exam as well.
            </p>
            <Link to={ROUTES.CLASSES}>Lets go!</Link>
        </Card>
        <Card title="Feedback" style={{ width: 300 }}>
            <p>
                Want to tell the developers something?
            </p>
            <Link to={ROUTES.FEEDBACK}>Lets go!</Link>
        </Card>
    </div>
  </div>
);
const condition = authUser => !!authUser;

export default withAuthorization(condition)(Home);
