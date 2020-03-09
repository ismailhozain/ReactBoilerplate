import React from 'react';
import 'antd/dist/antd.css';
import {withAuthorization} from '../Session';
const Home = () => (
  <div>

  </div>
);
const condition = authUser => !!authUser;

export default withAuthorization(condition)(Home);
