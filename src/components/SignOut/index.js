import React from 'react';
import { withFirebase } from '../Firebase';
import Button from "antd/es/button";
const SignOutButton = ({ firebase }) => (
    <Button type="button" onClick={firebase.doSignout()}>
        Sign Out
    </Button>

);

export default withFirebase(SignOutButton);