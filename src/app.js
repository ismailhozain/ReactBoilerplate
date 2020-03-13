import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/navigation';
import LandingPage from './screens/landing';
import SignUpPage from './screens/sign_up';
import SignInPage from './screens/sign_in';
import PasswordForgetPage from './screens/password_forget';
import PasswordChangePage from "./screens/password_change";
import HomePage from './screens/home';
import AccountPage from './screens/account';
import StudyPage from './screens/Study';
import WritePage from './components/write';
import ClassesPage from './screens/classes';
import FeedbackPage from './screens/feedback';
import SettingsPage from './screens/Settings';
import StatsPage from './components/stats';
import ContactPage from './screens/contact';
import AboutPage from './screens/about';
import ErrorPage from './screens/error';
import * as ROUTES from './routes';
import StatusPage from './components/status';
import ResourcesPage from './screens/resources';
import AssignmentsPage from './screens/assignments';
import GradesPage from './screens/grades';
import CalendarPage from './screens/calendar';
import ProfilePage from './screens/profile';
import withAuthentication from "./components/Session/withAuthentication";

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
                        <Route exact path={ROUTES.STUDY} component={StudyPage}/>
                        <Route exact path={ROUTES.WRITE} component={WritePage}/>
                        <Route exact path={ROUTES.CLASSES} component={ClassesPage}/>
                        <Route exact path={ROUTES.FEEDBACK} component={FeedbackPage}/>
                        <Route exact path={ROUTES.SETTINGS} component={SettingsPage}/>
                        <Route exact path={ROUTES.STATS} component={StatsPage}/>
                        <Route exact path={ROUTES.CONTACT} component={ContactPage}/>
                        <Route exact path={ROUTES.ABOUT} component={AboutPage}/>
                        <Route exact path={ROUTES.ERROR} component={ErrorPage}/>
                        <Route exact path={ROUTES.STATUS} component={StatusPage}/>
                        <Route exact path={ROUTES.ASSIGNMENTS} component={AssignmentsPage}/>
                        <Route exact path={ROUTES.GRADES} component={GradesPage}/>
                        <Route exact path={ROUTES.RESOURCES} component={ResourcesPage}/>
                        <Route exact path={ROUTES.CALENDAR} component={CalendarPage}/>
                        <Route exact path={ROUTES.PROFILE} component={ProfilePage}/>
                        </main>
                    </div>
                </div>
            </Router>
);
export default withAuthentication(App);
