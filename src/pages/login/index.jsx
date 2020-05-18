import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { connect } from "react-redux"
import { logData } from "../../action/logAction"
import Axios from "axios"

export default @connect(
    () => {

    },
    {
        logData
    }
)

class Login extends Component {
    onFinish = values => {
        console.log('Received values of form: ', values);
        Axios.post("http://api.baxiaobu.com/index.php/home/v1/login",{username:values.username}).then(res=>{
            if(res.status === 200){
                this.props.logData(values)
                this.props.history.push("/home")
            }
        })
    };

    SignUp = () =>{
        this.props.history.push("/register")
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
                    <Form.Item>
                        <p>Not registerd?<span onClick={this.SignUp}>Sign Up</span></p>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Sign in
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}
