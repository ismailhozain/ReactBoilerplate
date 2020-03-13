import React from 'react';
import {withAuthorization} from "../components/Session";
import '../css/passwordChange.css';
import Form from "antd/es/form";
{/*TODO IMPLEMENT THIS PAGE TONIGHT AYY YUP DUDE nod nod siryessir*/}
const PasswordChange = () => (
  <div>
    <h1>PasswordChange</h1>
      <Form>
          <Form.Item>
          </Form.Item>
      </Form>
  </div>
);
const condition = authUser => !!authUser;

export default withAuthorization(condition)(PasswordChange);
