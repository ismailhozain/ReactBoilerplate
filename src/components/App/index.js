import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import TeacherPage from '../Teacher';
import StudyPage from '../Study';
import WritePage from '../Write';
import ClassesPage from '../Classes';
import FeedbackPage from '../Feedback';
import SettingsPage from '../Settings';
import StatsPage from '../Stats';
import ContactPage from '../Contact';
import AboutPage from '../About';
import ErrorPage from '../Error';
import * as ROUTES from '../../constants/routes';
import Footer from "../Footer";
import withAuthentication from "../Session/withAuthentication";

const App = () => (
            <Router>
                <div className={"App"}>
                    <div className={"site-content"}>
                        <Navigation/>
                        <Route exact path={ROUTES.LANDING} component={LandingPage}/>
                        <Route exact path={ROUTES.SIGN_UP} component={SignUpPage}/>
                        <Route exact path={ROUTES.SIGN_IN} component={SignInPage}/>
                        <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage}/>
                        <Route exact path={ROUTES.HOME} component={HomePage}/>
                        <Route exact path={ROUTES.ACCOUNT} component={AccountPage}/>
                        <Route exact path={ROUTES.TEACHER} component={TeacherPage}/>
                        <Route exact path={ROUTES.STUDY} component={StudyPage}/>
                        <Route exact path={ROUTES.WRITE} component={WritePage}/>
                        <Route exact path={ROUTES.CLASSES} component={ClassesPage}/>
                        <Route exact path={ROUTES.FEEDBACK} component={FeedbackPage}/>
                        <Route exact path={ROUTES.SETTINGS} component={SettingsPage}/>
                        <Route exact path={ROUTES.STATS} component={StatsPage}/>
                        <Route exact path={ROUTES.CONTACT} component={ContactPage}/>
                        <Route exact path={ROUTES.ABOUT} component={AboutPage}/>
                        <Route exact path={ROUTES.ERROR} component={ErrorPage}/>
                    </div>
                    <Footer/>
                </div>
            </Router>
);
export default withAuthentication(App);