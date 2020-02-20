import React, {Component} from 'react';
import {withAuthorization} from "../Session";
import './profile.css';
import firebase from "firebase";
import Icon from "antd/es/icon";

class ProfileClass extends Component {
    render() {
        return(
            <div>
                <h1>Profile</h1>
                <Icon type={"user"} style={{fontSize: '136px'}}/>
                <h2>Hello, </h2>
            </div>
        );
    }
}

const Profile = () => (
    <ProfileClass/>
);
const condition = authUser => !!authUser;

export default withAuthorization(condition)(Profile);
