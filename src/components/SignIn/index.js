import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { compose } from 'recompose';
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import {Icon} from "antd";
const SignInPage = () => (
    <div>
        <h1>SignIn</h1>
        <SignInForm />

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
        {/*
        ONSUBMIT GETS CALLED AND WORKS FINE.
        I CANT SAY THE SAME ABOUT THE REST OF IT.
        OK I THINK I KNOW WHAT IS WRONG. WHEN I SEND AN EXPLICIT VALUE TO IT IT REFUSES TO SIGN IN.
        IM THINKING THAT MEANS THAT THE WHOLE FUNCTION IS WRONG. RESTART TIME but yeah this needs to change. TODO REWRITE THIS FUNCTION.
        */}

            event.preventDefault();
    };
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    render() {
        const { email, password, error } = this.state;
        const isInvalid = password === '' || email === '';
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                />
                <input
                    name="password"
                    value={password}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                />
                <button disabled={isInvalid} type="submit">
                    Sign In
                </button>
                {error && <p>{error.message}</p>}
                <Link to={ROUTES.SIGN_UP}><Icon type="login" />Sign Up</Link>
            </form>
        );
    }
}
const SignInForm = compose(
    withRouter,
    withFirebase,
)(SignInFormBase);
export default SignInPage;
export { SignInForm };