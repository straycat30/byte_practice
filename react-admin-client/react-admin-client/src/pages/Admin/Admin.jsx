import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import store from '../../utils/storageUtils.js'
import { Layout } from 'antd';
import TopHeader from '../../components/TopHeader/TopHeader.jsx'
import LeftNav from '../../components/LeftNav/LeftNav.jsx'
import ArticleList from './pages/ArticleList/ArticleList.jsx'
import ArticleEdit from './pages/ArticleEdit/ArticleEdit.jsx'
import ArticleLuru from './pages/ArticleLuru/ArticleLuru.jsx'
import InfoChange from './pages/InfoChange/InfoChange.jsx'
import Home from './pages/Home/Home.jsx'


import './Admin.css'

const { Header, Footer, Sider, Content } = Layout;

export default class Admin extends Component {
    componentWillUnmount() {
        store.removeArticle()
    }
    render() {
        const nickname = store.getUser().nickname
        if (nickname) {
            return (
                <Layout style={{ height: '100%' }}>
                    <Header style={{ backgroundColor: 'white' }}><TopHeader /></Header>
                    <Layout>
                        <Sider style={{ backgroundColor: 'white' }}><LeftNav /></Sider>
                        <Content className="content-region">
                            <div className="sanjiaoxing"></div>
                            <Switch>
                                <Route path='/admin/home' component={Home} />
                                <Route path='/admin/list' component={ArticleList} />
                                <Route path='/admin/luru/:ie' component={ArticleLuru} />
                                <Route path='/admin/edit' component={ArticleEdit} />
                                <Route path='/admin/info' component={InfoChange} />
                                <Redirect to='/admin/home' />
                            </Switch>
                        </Content>
                    </Layout>
                    <Footer style={{ textAlign: 'center', color: 'grey', backgroundColor: 'white' }}>推荐使用Chrome浏览器打开</Footer>
                </Layout>
            )
        }
        return (
            <Redirect to='/login/log' />
        )

    }
}
