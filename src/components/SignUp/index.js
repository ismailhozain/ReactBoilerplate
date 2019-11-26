import React, {Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { compose } from 'recompose';

import  {withFirebase}  from '../Firebase';
import 'antd/dist/antd.css';
import './signup.css';

const SignUpPage = () => (
    <div>
        <h1>SignUp</h1>
        <SignupForm/>
    </div>

);

const INITIAL_STATE = {
    firstName: '',
    lastName: ' ',
    email: '',
    schoolId: ' ',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};


class SignupFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE};
    }

    onSubmit = event => {
        const { firstName, lastName, schoolId, email, passwordOne} = this.state;
        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error });
            });
        event.preventDefault();
    };

    onChange = event => {
        this.setState({[event.target.name]: event.target.value });
    };

    render()  {
        const {
           firstName,
           lastName,
           email,
           schoolId,
           passwordOne,
           passwordTwo,
           error,
        } = this.state;

       const isInvalid =
           passwordOne !== passwordTwo ||
           passwordOne === ' ' ||
           email === ' ';
       return (
            <div className={"center wholeDiv"}>
                <form onSubmit={this.onSubmit}>
                    <input
                        name="firstName"
                        value={firstName}
                        onChange={this.onChange}
                        type="text"
                        placeholder="First Name"
                    />
                    <input
                        name="lastName"
                        value={lastName}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Last Name"
                    />
                    <input
                        name="email"
                        value={email}
                        onChange={this.onChange}
                        type="email"
                        placeholder="School Email"
                    />
                    <input
                        name="schoolId"
                        value={schoolId}
                        onChange={this.onChange}
                        type="text"
                        placeholder="School Id Number"
                    />
                    <input
                        name="passwordOne"
                        value={passwordOne}
                        onChange={this.onChange}
                        type="password"
                        placeholder="Canvas Password"
                    />
                    <input
                        name="passwordTwo"
                        value={passwordTwo}
                        onChange={this.onChange}
                        type="password"
                        placeholder="Confirm Canvas Password"
                    />
                    <button disabled={isInvalid} type="submit">Sign Up</button>
                    {error && <p>{error.message}</p>}
                </form>
            </div>
        );
    }
}
const SignupForm = compose(
        withRouter,
        withFirebase,
        )(SignupFormBase);

export default SignUpPage;

export {SignupForm};