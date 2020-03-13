import React, {Component} from 'react';
import * as firebase from "firebase";
import * as ROUTES from "../routes";
import {Form, Input} from "antd";

const PasswordForget = () => (
  <div className={"titleDiv"}>
    <h1 className={"title"}>Reset Password</h1>
      <div>
          <EmailForm/>
      </div>
  </div>
);
const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};
class EmailForm extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }
    onSubmit = event => {
        const {email} = this.state;
        firebase.auth().sendPasswordResetEmail(email).then(() => {
            alert("Your request has been sent! Please check your email.");
            this.props.history.push(ROUTES.SIGN_IN);
        }).catch(function(error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + " " + errorMessage);
        });
        event.preventDefault();
    };
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    render() {
        const { email } = this.state;
        return (
            <Form onSubmit={this.onSubmit} className={"signInStyles"}>
                <Form.Item>
                    <Input
                        name="email"
                        value={email}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Email Address"
                    />
                </Form.Item>
                <button className={"submitButtonStyles"} type="submit">Send Reset Email</button>
                {/*TODO FIX THIS BUTTON SOMETIME IN THE NEXT DECADE*/}
            </Form>
        );
    }
}
export default PasswordForget;
