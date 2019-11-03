import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import StudyPage from '../Study';
import WritePage from '../Write';
import ClassesPage from '../Classes';
import FeedbackPage from '../Feedback';
import SettingsPage from '../Settings';
import * as ROUTES from '../../constants/routes';
const App = () => (
    <Router>
        <div>
            <Navigation />
            <hr />
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
            <Route path={ROUTES.HOME} component={HomePage} />
            <Route path={ROUTES.ACCOUNT} component={AccountPage} />
            <Route path={ROUTES.ADMIN} component={AdminPage} />
            <Route path={ROUTES.STUDY} component={StudyPage} />
            <Route path={ROUTES.WRITE} component={WritePage} />
            <Route path={ROUTES.CLASSES} component={ClassesPage} />
            <Route path={ROUTES.FEEDBACK} component={FeedbackPage} />
            <Route path={ROUTES.SETTINGS} component={SettingsPage} />
        </div>
    </Router>
);
export default App;