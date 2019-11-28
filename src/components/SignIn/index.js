import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { compose } from 'recompose';
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import {Icon, Form, Input} from "antd";
import './signin.css';
import * as firebase from "firebase";
import {SignupForm} from "../SignUp";
const SignInPage = () => (
    <div>
        <div className={"containsAll"}>
        <div className={"titleDiv"}>
            <h1 className={"title"}>Sign In</h1>
        </div>
        <div className={"container"}>
            <SignInForm />
        </div>
    </div>
    </div>
);
const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};
class SignInFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }
    onSubmit = event => {
        const {email, password} = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
            this.setState({ ...INITIAL_STATE });
            this.props.history.push(ROUTES.HOME);
        }).catch(function(error) {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + " " + errorMessage);
            // ...
        });
        event.preventDefault();
    };
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    render() {
        const { email, password, error } = this.state;
        const isInvalid = password === '' || email === '';
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
                <Form.Item>
                    <Input
                        name="password"
                        value={password}
                        onChange={this.onChange}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                    <button className={"submitButtonStyles"} disabled={isInvalid} type="submit">
                        Sign In
                    </button>
                    {error && <p>{error.message}</p>}
                    <Link className={"signUpLink"} to={ROUTES.SIGN_UP}><Icon type="login" />Sign Up</Link>
            </Form>
        );
    }
}
const SignInForm = compose(
    withRouter,
    withFirebase,
)(SignInFormBase);
export default SignInPage;
export { SignInForm };