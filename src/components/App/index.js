import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from '../Navigation';
import LandingPage from '../Landing';
import ErrorPage from '../Error';
import * as ROUTES from '../../constants/routes';


const App = () => (
            <Router>
                <div className={"App"}>
                    <Navigation/>
                    <div className={"site-content"}>
                        <main>
                        <Route exact path={ROUTES.LANDING} component={LandingPage}/>
                        <Route exact path={ROUTES.ERROR} component={ErrorPage}/>
                        </main>
                    </div>
                </div>
            </Router>
);
export default App;