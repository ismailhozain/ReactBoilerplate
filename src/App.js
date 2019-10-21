import React from 'react';
import './App.css';
import logo from './logo.svg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Form, Input, Menu, Dropdown, Icon } from 'antd';
const { SubMenu } = Menu;
const searchBar = {


};
function App() {
  return (
      <div className="App">
          <Router>
              <Menu mode="horizontal">
                  <Menu.Item>
                      <Link to={"/"}><Icon type="home" /> Home</Link>
                  </Menu.Item>
                  <Menu.Item>
                      <Link to={"/about"}><Icon type="info-circle" /> About</Link>
                  </Menu.Item>
                  <Menu.Item>
                      <Link to={"/login"}><Icon type="login" /> Login</Link>
                  </Menu.Item>
              </Menu>
              <Form>
                 <Input className="searchBar"
                        prefix={<Icon type="search" />}
                 />
              </Form>
              <div>
                  <h1>
                      What would you like to do today?
                  </h1>
                  <Menu>
                      <Menu.Item>
                          Check On Life.
                      </Menu.Item>
                      <Menu.Item>
                          Learn Something New!
                      </Menu.Item>
                      <Menu.Item>
                          Study Some Content.
                      </Menu.Item>
                  </Menu>
              </div>
          </Router>

      </div>

  )}
export default App;
