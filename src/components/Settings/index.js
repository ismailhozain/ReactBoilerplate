import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { Switch, Icon } from 'antd';
import 'antd/dist/antd.css';
import Button from "antd/lib/button";
import Form from "antd/lib/form";

const Settings = () => (
    <div>
        <h1>Settings</h1>
        <div className={"darkTheme"}>
            <h3>Dark Theme</h3>
            <Switch
                checkedChildren={<Icon type="check" />}
                unCheckedChildren={<Icon type="close" />}
                defaultChecked
            />
        </div>
        <div className={"accountStuff"}>
            <Form>
                {/*wait on this.*/}
            </Form>
            <h3>Delete account</h3>
            <Button type={"danger"}>
                Delete Account Permanently!
            </Button>
        </div>
    </div>
);

export default Settings;
