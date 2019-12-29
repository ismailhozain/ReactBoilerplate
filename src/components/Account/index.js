import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import {Menu, Button, Icon} from "antd";
import {withAuthorization} from '../Session';
import 'antd/dist/antd.css';
import firebase from "firebase";

class AccountClass extends Component {
    componentDidMount() {
        let user = firebase.auth().currentUser;
        let name, email, photoUrl, uid, emailVerified;

            name = user.displayName;
            email = user.email;
            photoUrl = user.photoURL;
            emailVerified = user.emailVerified;
            uid = user.uid;
            alert("name :" + name + " email : " + email );

    }

    render() {
        return (
        <div>
            <Button><Link to={ROUTES.SETTINGS}>Settings</Link></Button>
            <Button><Link to={ROUTES.STATS}>Statistics</Link></Button>
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
{/*TODO IMPLEMENT CSS FOR THIS PAGE SOMETIME SOON. COPY FROM OTHER PAGES.*/}
const condition = authUser => !!authUser;
export default withAuthorization(condition)(Account);
