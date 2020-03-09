import React from 'react';
import {withAuthorization} from "../Session";
import './passwordChange.css';
import Form from "antd/es/form";
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
