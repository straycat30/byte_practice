import React, { Component } from 'react'
import { Form, Input, Tooltip, Button, message, Spin } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { submitReg } from '../../api/index.js'
import './RegistrationForm.css'

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

export default class RegistrationForm extends Component {
    state = { isloading: false }

    onFinish = async (values) => {
        //console.log('Received values: ', values);
        const { nickname, password, email } = values
        this.setState({ isloading: true })
        const result = await submitReg(nickname, password, email)
        console.log(result)
        if (result.err_code === 0) {
            // 提示注册成功
            message.success('注册成功', 2)
            this.setState({ isloading: false })
        } else {
            //提示注册失败
            message.error('该用户名已被占用，换个用户名试试吧^ ^', 1)
            this.setState({ isloading: false })
        }
    }
    render() {
        return (
            <Form
                {...formItemLayout}
                name="register"
                onFinish={this.onFinish}
                scrollToFirstError
            >

                <Form.Item
                    name="nickname"
                    label={
                        <span>
                            账号/用户名&nbsp;
                             <Tooltip title="您需要记住此账号以便进行登录">
                                <QuestionCircleOutlined />
                            </Tooltip>
                        </span>
                    }
                    rules={[
                        {
                            required: true,
                            message: '请输入您的用户名!',
                            whitespace: true,
                        }, {
                            type: 'string',
                            message: ' '
                        }, {
                            min: 3,
                            message: '最小用户名长度为3 '
                        }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: 'email',
                            message: '请输入合法格式的E-mail',
                        },
                        {
                            required: true,
                            message: '请输入E-mail!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>


                <Form.Item
                    name="password"
                    label="密码："
                    rules={[
                        {
                            required: true,
                            message: '请输入您的密码 ',
                        }, {
                            type: 'string',
                            message: ''
                        }, {
                            min: 6,
                            message: '最小密码长度为6 '
                        }
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="确认密码："
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: '请再次确认您的密码!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }

                                return Promise.reject('请确保您输入的两次密码相同');
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailFormItemLayout} className="submitreg" >
                    <Button type="primary" htmlType="submit">
                        注册
                    </Button>
                </Form.Item>
                <div style={{ textAlign: 'center' }}>
                    <Spin spinning={this.state.isloading} />
                </div>
            </Form>
        )
    }

}
