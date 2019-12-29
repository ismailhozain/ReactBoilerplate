import React, {Component} from 'react';
import { withFirebase } from '../Firebase';
import Button from "antd/es/button";
import * as firebase from "firebase";

class SignOutButtonWrapped extends Component {
    render() {
        return (
            <Button type="danger" onClick={firebase.doSignout}>
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