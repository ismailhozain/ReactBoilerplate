import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import './signup.css';

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
    //NEED TO MAKE SOME OF YHE OTEHR COMPONENTS NEEDED INCLUDING THE HAC/CANVAS IMPLEMENTATION PASWORDS

};

class NormalLoginForm extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                alert("Your password is the same as your canvas password");
                console.log('Received values of form: ', values);
            }
        });
    };

    render()  {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className={"center wholeDiv"}>

                <Form onSubmit={this.handleSubmit} className="login-form">
                    <h2 className={"center title"}>Studyboard</h2>
                    <Form.Item>
                        {getFieldDecorator('firstName', {
                            rules: [{ required: true, message: 'Please input your first name!' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="First Name"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('lastName', {
                            rules: [{ required: true, message: 'Please input your last name!' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Last Name"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('schoolEmail', {
                            rules: [{ required: true, message: 'Please input your school-issued email!' }],
                        })(
                            <Input
                                prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="School Email"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('schoolId', {
                            rules: [{ required: true, message: 'Please input your school ID!' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="School ID"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('canvasPassword', {
                            rules: [{ required: true, message: 'Please input your Canvas password!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Canvas Password"
                                type={"password"}
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(<Checkbox>Remember me</Checkbox>)}
                        <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password</Link>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            <Link to={ROUTES.HOME}>Sign Up!</Link>
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default WrappedNormalLoginForm;