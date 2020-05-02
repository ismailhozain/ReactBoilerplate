import React, {Component} from 'react';
import {withAuthorization} from '../Session';
import 'antd/dist/antd.css';
import firebase from "firebase";
import Footer from "../Footer";

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
      <Footer/>
  </div>
);

const condition = authUser => !!authUser;
export default withAuthorization(condition)(Account);
