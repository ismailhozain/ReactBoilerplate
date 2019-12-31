import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import {Switch, Icon, Card} from 'antd';
import 'antd/dist/antd.css';
import Button from "antd/lib/button";
import Form from "antd/lib/form";
import * as firebase from "firebase";
import {withAuthorization} from '../Session';
import './settings.css';
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
                <Card title="Dark Theme" style={{ width: 300 }}>
                        <Switch
                            checkedChildren={<Icon type="check" />}
                            unCheckedChildren={<Icon type="close" />}
                            defaultunChecked
                        />
                    </Card>
                <Card title="Change Password" style={{ width: 300 }}>
                    <Link to={ROUTES.PASSWORD_CHANGE}>Lets go!</Link>
                </Card>
                <Card title="Delete Account?" style={{ width: 300 }}>
                    <Button type={"danger"} onClick={this.onSubmit}>
                        Delete Account Permanently!
                    </Button>
                </Card>
            </div>
        );
    }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Settings);