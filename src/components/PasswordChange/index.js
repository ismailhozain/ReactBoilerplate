import React from 'react';
import {withAuthorization} from "../Session";
import './passwordChange.css';
{/*TODO IMPLEMENT THIS PAGE TONIGHT AYY YUP DUDE nod nod siryessir*/}
const PasswordChange = () => (
  <div>
    <h1>PasswordChange</h1>
  </div>
);
const condition = authUser => !!authUser;

export default withAuthorization(condition)(PasswordChange);
