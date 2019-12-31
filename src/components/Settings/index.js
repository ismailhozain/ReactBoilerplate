import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { Switch, Icon } from 'antd';
import 'antd/dist/antd.css';
import Button from "antd/lib/button";
import Form from "antd/lib/form";
import * as firebase from "firebase";
import {withAuthorization} from '../Session';

const Settings = () => (
    <div className={"titleDiv"}>
        <h1 className={"title"}>Settings</h1>
        <div>
            <SettingsClass/>
        </div>
    </div>
);

class SettingsClass extends Component {

    onSubmit = event => {
        firebase.auth().delete().then(() => {
            window.confirm("Are you sure you want to delete your account?");
            this.props.history.push(ROUTES.LANDING);
        }).catch(function(error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + " " + errorMessage);
        });
        event.preventDefault();
    };

    render() {
        return(
            <div>
                <h1>Settings</h1>
                <div className={"darkTheme"}>
                    <h3>Dark Theme</h3>
                    <Switch
                        checkedChildren={<Icon type="check" />}
                        unCheckedChildren={<Icon type="close" />}
                        defaultunChecked
                    />
                </div>
                <div className={"accountStuff"}>
                    <Form>
                        {/*wait on this.*/}
                    </Form>
                    <h3>Delete account</h3>
                    <Button type={"danger"} onClick={this.onSubmit}>
                        Delete Account Permanently!
                    </Button>
                </div>
            </div>
        );
    }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Settings);