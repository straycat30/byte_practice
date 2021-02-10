import React, { Component } from 'react'
import { Form, Input } from 'antd';
import store from '../../utils/storageUtils.js'

export default class EditNickForm extends Component {
    formRef = React.createRef();

    componentDidMount() {
        this.props.getEditNickForm(this.formRef)
    }
    render() {
        // console.log(this.props.getEditNameForm)
        return (
            <Form ref={this.formRef} name="editnick-ref" >
                <Form.Item
                    name="nickname"
                    label="用户名"
                    initialValue={store.getUser().nickname}
                    rules={[
                        {
                            type: 'string'
                        }, {
                            min: 3,
                            message: '最小用户名长度为3 '
                        }
                    ]}
                >
                    <Input />
                </Form.Item>

            </Form>
        )
    }
}


