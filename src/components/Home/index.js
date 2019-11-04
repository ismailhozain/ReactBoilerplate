import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import * as ROUTES from '../../constants/routes';
import 'antd/dist/antd.css';

const Home = () => (
  <div>
    <h1>What would you like to do today?</h1>
    <div>
        <Card title="Study" style={{ width: 300 }}>
            <p>
                Find the best sources for reliable information including videos, articles and everything in between!
            </p>
            <Link to={ROUTES.STUDY}>Lets go!</Link>
        </Card>
        <Card title="Write" style={{ width: 300 }}>
            <p>
                Kill essayist procrastination for good! Pick your settings and go get those essays done!
            </p>
            <Link to={ROUTES.WRITE}>Lets go!</Link>
        </Card>
        <Card title="Find Classes" style={{ width: 300 }}>
            <p>
                Look at reviews from other students on standardized classes concerning the material and the pace of the class and the final exam as well.
            </p>
            <Link to={ROUTES.CLASSES}>Lets go!</Link>
        </Card>
        <Card title="Feedback" style={{ width: 300 }}>
            <p>
                Want to tell the devs something (Yes we check it.)?
            </p>
            <Link to={ROUTES.FEEDBACK}>Lets go!</Link>
        </Card>
    </div>
  </div>
);

export default Home;
