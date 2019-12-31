import React, {Component} from 'react';
import { withFirebase } from '../Firebase';
import Button from "antd/es/button";
import * as firebase from "firebase";
import * as ROUTES from '../../constants/routes';
class SignOutButtonWrapped extends Component {
    onSubmit = event => {
        firebase.auth().signOut().then(function() {
            this.props.push(ROUTES.LANDING);
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