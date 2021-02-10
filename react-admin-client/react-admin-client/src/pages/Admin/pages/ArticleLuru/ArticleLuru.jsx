import React, { Component } from 'react';
import { Form, Input, Card, Button, Select, message, Spin } from 'antd';

import store from '../../../../utils/storageUtils.js'
import articletypelist from '../../../../config/articleTypeConfig.js'
import { submitArt, changeContent } from '../../../../api/index.js'
import PictureWall from '../../../../components/PictureWall/PictureWall.jsx'
import RichTextEditor from '../../../../components/RichTextEditor/RichTextEditor.jsx'
import './ArticleLuru.css'

const { TextArea } = Input;


export default class RegistrationForm extends Component {
    formRef = React.createRef();
    state = {
        title: "文章录入",
        toEditArticle: {},
        showloading: false
    }
    //存放照片墙组件的ref容器
    picw = React.createRef()
    //存放文本框组件的ref狂气
    textAreaRef = React.createRef()
    onFinish = async (values) => {
        //  console.log(values)
        if (this.state.title === '文章录入') {
            const { title_name, type } = values
            const content = this.textAreaRef.current.getHTMLfromtext()
            const title_imgs = this.picw.current.getImgUrl()
            const title_img = title_imgs[0]
            const nickname = store.getUser().nickname
            this.setState({ showloading: true })
            const result = await submitArt(nickname, title_name, content, type, title_img)
            if (result.err_code === 0) {
                this.setState({ showloading: false })
                message.success('文章上传成功', 1)

            } else {
                this.setState({ showloading: false })
                message.error('文章上传失败', 1)
            }
        } else {
            const { title_name, type } = values
            const { _id } = this.state.toEditArticle
            const content = this.textAreaRef.current.getHTMLfromtext()
            const title_imgs = this.picw.current.getImgUrl()
            const title_img = title_imgs[0]
            this.setState({ showloading: true })
            const result = await changeContent(_id, title_name, content, type, title_img)
            // console.log(result)
            if (result.err_code === 0) {
                this.setState({ showloading: false })
                message.success('文章修改成功', 1)

            } else {
                this.setState({ showloading: false })
                message.error('文章修改失败', 1)
            }
        }

    };
    changeToEdit = () => {
        const { ie } = this.props.match.params
        //  console.log(ie)
        if (ie === "input") {
            this.setState({ title: "文章录入" })
        } else {
            //从localStorage里拿到要编辑的图片信息
            const catchArticle = store.getArticle()
            this.setState({ title: "文章编辑", toEditArticle: catchArticle })
        }
    }

    UNSAFE_componentWillMount() {
        //  console.log('willmount')
        this.changeToEdit()
    }

    render() {
        const { title_name, type, content, title_img } = this.state.toEditArticle
        return (
            <Card title={this.state.title} className="luru-card" >
                <Form
                    ref={this.formRef}
                    name="submitarticle"
                    onFinish={this.onFinish}
                    scrollToFirstError
                >

                    <Form.Item
                        style={{ width: '80%' }}
                        name="title_name"
                        initialValue={title_name || ''}
                        label="标题："
                        rules={[
                            {
                                required: true,
                                message: '请输入标题',
                                whitespace: true,
                            }, {
                                type: 'string',
                                message: ' '
                            }, {
                                min: 5,
                                message: '最小标题长度为5个字'
                            }, {
                                max: 30,
                                message: '最大标题长度为30个字'
                            }
                        ]}
                    >
                        <TextArea
                            className="article-title"
                            showCount
                            maxLength={30}
                            placeholder="请输入文章标题（5-30字）"
                            autoSize
                        />
                    </Form.Item>

                    <Form.Item
                        style={{ width: '30%' }}
                        initialValue={type || ''}
                        name="type"
                        label="类型："
                        rules={[
                            {
                                required: true,
                            }
                        ]}
                    >
                        <Select>
                            {
                                articletypelist.map((typeObj) => {
                                    return (
                                        <Select.Option key={typeObj.value} value={typeObj.value}>{typeObj.type}</Select.Option>
                                    )
                                })
                            }
                        </Select>
                    </Form.Item>

                    <Form.Item
                        style={{ width: '80%' }}
                        name="content"
                        label="内容："
                        hasFeedback
                    >
                        <RichTextEditor ref={this.textAreaRef} HTMLtext={this.state.title === '文章编辑' ? content : ''} />
                    </Form.Item>

                    <Form.Item
                        label="标题图片："
                    >
                        <PictureWall initialImg={title_img} ref={this.picw} />
                    </Form.Item>

                    <Form.Item >
                        <Button type="default" htmlType="submit" className="submit-article-btn">
                            录入
                        </Button>
                    </Form.Item>
                    <div style={{ textAlign: 'center' }}>
                        <Spin spinning={this.state.showloading} />
                    </div>
                </Form>
            </Card>

        )
    }
}


