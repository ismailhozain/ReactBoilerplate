import React, {Component} from 'react';
import { withFirebase } from '../Firebase';
import Button from "antd/es/button";
import moment from "moment";
import * as firebase from "firebase";
import * as ROUTES from '../../constants/routes';
import {LoginTime} from "../SignIn";
let LogoutTime;
class SignOutButtonWrapped extends Component {
    onSubmit = event => {
        firebase.auth().signOut().then(function() {
            this.props.push(ROUTES.LANDING);
            LogoutTime = moment().format();
        }).catch(function(error){
            console.log(error);
        });
        event.preventDefault();
    }
    render() {
        return (
            <Button type="danger" onClick={this.onSubmit}>
                Sign Out
            </Button>
        )
    }
}

const SignOutButton = ({ firebase }) => (
    <div>
        <SignOutButtonWrapped/>
    </div>
);

export default withFirebase(SignOutButton);
export {LogoutTime};