import React, {Component} from 'react';
import {withAuthorization} from "../components/Session";
import '../css/profile.css';
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
