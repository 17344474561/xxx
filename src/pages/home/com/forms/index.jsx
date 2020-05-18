import React, { Component } from 'react';
import { Form , Input , Button } from 'antd';
import { AddData } from "@/api/index"
import qs from "qs"

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
};
export default class Forms extends Component {
    onFinish = values => {
        AddData(qs.stringify(values)).then(res=>{
            alert("添加成功")
        })
    }
    
    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    }
    render() {
        return (
            <div className="Forms">
                <Form
                 {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
                >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                    {
                        required: true,
                        message: '用户名不能为空!',
                    },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Age"
                    name="age"
                    rules={[
                    {
                        required: true,
                        message: '年龄不能为空!',
                    },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Price"
                    name="msg"
                    rules={[
                    {
                        required: true,
                        message: 'price不能为空!',
                    },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Deadline"
                    name="address"
                    rules={[
                    {
                        required: true,
                        message: 'address不能为空!',
                    },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item  {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>
                </Form>
            </div>
        );
    }
}
