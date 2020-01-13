import React, {Component} from 'react';
import {withAuthorization} from "../Session";
import './profile.css';
import firebase from "firebase";

class ProfileClass extends Component {
    render() {
        return(
            <div>
                <h1>Profile</h1>

            </div>
        );
    }
}

const Profile = () => (
    <ProfileClass/>
);
const condition = authUser => !!authUser;

export default withAuthorization(condition)(Profile);
