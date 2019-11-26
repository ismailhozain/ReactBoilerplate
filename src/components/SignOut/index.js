import React from 'react';
import { withFirebase } from '../Firebase';
const SignOutButton = ({ firebase }) => (
    <button type="button" onClick={firebase.doSignout()}>
        Sign Out
    </button>

);
{/*PRETTY DAMN SURE THIS WORKS ALSO THINK THAT MY SIGN IN FUNCTION DOESNT SO THATS FUN GOTTA GO FIX THAT. made good progress
 might rewrite the front end tomorrow morning. I would like to have the whole thing done by the end of thanksgiving break*/}
export default withFirebase(SignOutButton);