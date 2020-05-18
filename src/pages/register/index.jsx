import React, { Component } from 'react';
import { Form , Input , Button } from 'antd';
import { UserOutlined , LockOutlined } from '@ant-design/icons';
import Axios from "axios"


export default class Login extends Component {
    onFinish = values => {
        Axios.post("http://api.baxiaobu.com/index.php/home/v1/register",{
                    username:values.username,
                    pwd:values.password
        }).then( res => {
            if(res.status === 200){
                alert("注册成功")
            }
        })
    }

    SignIn = () =>{
        this.props.history.push("/login")
    }

    render() {
        return (
            <div className="login">
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={this.onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[
                        {
                            required: true,
                            message: '用户名不能为空!',
                        },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                        {
                            required: true,
                            message: '密码不能为空!',
                        },
                        ]}
                    >
                        <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item
                        name="confirm"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(rule, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject('The two passwords that you entered do not match!');
                            },
                        }),
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <p>Not registerd?<span onClick={this.SignIn}>Sign in</span></p>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Sign Up
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}