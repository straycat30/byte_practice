import React, { Component } from 'react'
import { Card, Button, Table, message } from 'antd';
import { getArt, changeLine, deleteArt } from '../../../../api/index.js'
import store from '../../../../utils/storageUtils.js'


import {
    PlusOutlined
} from '@ant-design/icons';
import articletypelist from '../../../../config/articleTypeConfig.js'

import './ArticleList.css'
//用于深拷贝对象数组
const _ = require('lodash');

let articlelist = [];
export default class ArticleList extends Component {

    state = {
        loading: true,
        articleList: []
    }
    jumpToLuru = () => {
        this.props.history.push('/admin/luru/input')
    }
    jumpToEdit = (article) => {
        let seletedId = article._id
        const catchArticle = articlelist.find((articleObj) => {
            if (articleObj._id === seletedId) {
                return true
            }
            return false
        })
        store.saveArticle(catchArticle)
        this.props.history.push('/admin/luru/edit')
    }
    checkStatus(article) {
        if (article.status === '线上') {
            return '下线'
        } else {
            return '上线'
        }
    }
    changeArticleStatus = async (article) => {
        let result = {}
        let hide
        if (article.status === '线上') {
            hide = message.loading('正在下线文章，请稍等', 0);
            result = await changeLine(article._id, 1)

        } else {
            hide = message.loading('正在上线文章，请稍等', 0);
            result = await changeLine(article._id, 0)
        }
        if (result) {
            //   console.log(result)
            hide();
            if (result.err_code === 0) {
                message.success("文章状态修改成功", 1)
                // 深拷贝获取对象列表并修改再赋值，才会引起更新
                const articleList = [...this.state.articleList]
                for (let i = 0; i < articleList.length; i++) {
                    if (articleList[i]._id === article._id) {
                        let article2 = { ...article, status: (article.status === '线上' ? '线下' : '线上') }
                        articleList[i] = article2
                        this.setState({ articleList: articleList })
                    }
                }

            } else {
                message.error("修改失败", 1)
            }
        }
    }

    deleteArticle = async (article) => {
        let hide = message.loading('正在删除文章，请稍等', 0);
        let result = await deleteArt(article._id)
        //console.log(result)
        if (result) {
            hide();
            if (result.err_code === 0) {
                message.success("文章删除成功", 1)
                // 深拷贝获取对象列表并修改再赋值，才会引起更新
                const articleList = [...this.state.articleList]
                let articleList2 = articleList.filter((articleObj) => {
                    return articleObj._id !== article._id
                })
                this.setState({ articleList: articleList2 })

            } else {
                message.error("文章删除失败", 1)
            }
        }
    }

    initColumns = () => {

        this.columns = [
            {
                title: '序号',
                dataIndex: '_id',
                width: 170,
                ellipsis: true,
                align: 'center',
            },
            {
                title: '标题',
                dataIndex: 'title_name',
                ellipsis: true,
                width: 230,
                defaultSortOrder: 'descend',
                align: 'center',
            },
            {
                title: '类型',
                width: 100,
                dataIndex: 'type',
                align: 'center',
            },
            {
                title: '发布日期',
                dataIndex: 'updatedAt',
                align: 'center',
                sorter: (a, b) => (+new Date(a.updatedAt)) - (+new Date(b.updatedAt)),
                sortDirections: ['descend', 'ascend'],
            },
            {
                title: '状态',
                width: 100,
                dataIndex: 'status',
                align: 'center',
            },
            {
                title: '被踩量',
                dataIndex: 'bad_num',
                align: 'center',
                width: 100,
                sorter: (a, b) => a.read_num - b.read_num,
                sortDirections: ['descend'],
            },
            {
                title: '点赞量',
                dataIndex: 'good_num',
                align: 'center',
                width: 100,
                sorter: (a, b) => a.good_num - b.good_num,
                sortDirections: ['descend'],
            },
            {
                title: '操作',
                key: 'operation',
                width: 150,
                align: 'center',
                render: (article) => {
                    return (
                        <span>
                            <span className="bianji" onClick={() => { this.jumpToEdit(article) }}>编辑</span>&nbsp;
                            <span className="bianji" onClick={() => { this.changeArticleStatus(article) }} >{this.checkStatus(article)}</span>&nbsp;
                            <span className="bianji" onClick={() => { this.deleteArticle(article) }} >删除</span>
                        </span>
                    )
                }
            },
        ];
    }
    getAllArticle = async () => {
        const nickname = store.getUser().nickname
        const result = await getArt(nickname)
        //console.log(result)
        articlelist = result.result_2
        if (result) {
            let myarticle = _.cloneDeep(result.result_2);
            // 更改类型为对应汉字
            for (let i = 0; i < myarticle.length; i++) {
                for (let j = 0; j < articletypelist.length; j++) {
                    if (myarticle[i].type === articletypelist[j].value) {
                        myarticle[i].type = articletypelist[j].type
                    }
                }
            }
            //更改状态和日期格式
            for (let i = 0; i < myarticle.length; i++) {
                myarticle[i].status = myarticle[i].status === 0 ? '线下' : '线上'
                let d = new Date(Date.parse(myarticle[i].updatedAt))
                let year = d.getFullYear()
                year = year < 10 ? '0' + year : year
                let month = d.getMonth() + 1
                month = month < 10 ? '0' + month : month
                let day = d.getDate()
                day = day < 10 ? '0' + day : day
                let h = d.getHours()
                h = h < 10 ? '0' + h : h
                let m = d.getMinutes()
                m = m < 10 ? '0' + m : m
                let s = d.getSeconds()
                s = s < 10 ? '0' + s : s
                myarticle[i].updatedAt = year + '-' + month + '-' + day + ' ' + h + ':' + m + ':' + s
            }
            // 一定在async函数里setState，因为异步函数总是最后调用的
            this.setState({ articleList: myarticle, loading: false })
        }
    }

    componentDidMount() {
        this.initColumns()
        //请求我的文章
        this.getAllArticle()
    }
    componentWillUnmount() {
        this.setState = () => false;
    }

    render() {
        const extra = (
            <Button type="primary" style={{ borderRadius: '5px' }} onClick={this.jumpToLuru}>
                <PlusOutlined /> 录入
            </Button>)

        return (
            <Card title="文章列表" extra={extra} className="card" >
                <Table className="article-table"
                    bordered
                    columns={this.columns}
                    loading={this.state.loading}
                    rowKey="_id"
                    dataSource={this.state.articleList}
                    pagination={{ disabled: false, defaultPageSize: 6, responsive: true, showQuickJumper: true }}
                />
            </Card>
        )
    }

}
