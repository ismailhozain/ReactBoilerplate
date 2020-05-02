import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import PasswordChangePage from "../PasswordChange";
import HomePage from '../Home';
import AccountPage from '../Account';
import AboutPage from '../About';
import ErrorPage from '../Error';
import * as ROUTES from '../../constants/routes';
import withAuthentication from "../Session/withAuthentication";

const App = () => (
            <Router>
                <div className={"App"}>
                    <Navigation/>
                    <div className={"site-content"}>
                        <main>
                        <Route exact path={ROUTES.LANDING} component={LandingPage}/>
                        <Route exact path={ROUTES.SIGN_UP} component={SignUpPage}/>
                        <Route exact path={ROUTES.SIGN_IN} component={SignInPage}/>
                        <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage}/>
                        <Route exact path={ROUTES.PASSWORD_CHANGE} component={PasswordChangePage}/>
                        <Route exact path={ROUTES.HOME} component={HomePage}/>
                        <Route exact path={ROUTES.ACCOUNT} component={AccountPage}/>
                        <Route exact path={ROUTES.ABOUT} component={AboutPage}/>
                        <Route exact path={ROUTES.ERROR} component={ErrorPage}/>
                        </main>
                    </div>
                </div>
            </Router>
);
export default withAuthentication(App);