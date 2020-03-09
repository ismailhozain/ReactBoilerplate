import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { Card} from "antd";
import {withAuthorization} from '../Session';
import 'antd/dist/antd.css';
import firebase from "firebase";

class AccountClass extends Component {
    componentDidMount() {
        let user = firebase.auth().currentUser;
        let name, email;

            name = user.displayName;
            email = user.email;
            alert("name :" + name + " email : " + email );

    }

    render() {
        return (
        <div>
            <Card title="Stats" style={{ width: 300 }}>
                <p>
                    Learn about how you have been doing lately with fun colorful graphs!
                </p>
                <Link to={ROUTES.STATS}>Lets go!</Link>
            </Card>
        </div>
        )
            }
}
const Account = () => (
  <div className={"container"}>
    <div className={"titleDiv"}>
        <h1 className={"title"}>Account</h1>
    </div>
      <AccountClass/>
  </div>
);

const condition = authUser => !!authUser;
export default withAuthorization(condition)(Account);
