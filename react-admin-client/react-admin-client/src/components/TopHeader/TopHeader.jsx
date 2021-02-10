import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Avatar } from 'antd';
import store from '../../utils/storageUtils.js'
import ShowSquare from '../ShowSquare/ShowSquare.jsx'
import menuList from '../../config/menuConfig.js'

import PubSub from 'pubsub-js'

import { UserOutlined } from '@ant-design/icons';
import './TopHeader.css'

var token
class TopHeader extends Component {

    state = {
        show: ' none', //该状态决定框框是否显示
    }
    showSquare = () => {
        this.setState({ show: 'block' })
    }
    hideSquare = () => {
        this.setState({ show: 'none' })
    }

    getTitle = (list) => {
        for (let i = 0; i < list.length; i++) {
            if (!list[i].children) {
                if (this.props.location.pathname === list[i].path) {
                    return list[i].title;
                }
            }
            else {
                for (let j = 0; j < list[i].children.length; j++) {
                    if (this.props.location.pathname === list[i].children[j].path) {
                        return list[i].children[j].title;
                    } else if (this.props.location.pathname.substr(0, 16) === '/admin/luru/edit') {
                        return '文章录入'
                    }
                }
            }
        }
    }


    componentDidMount() {
        token = PubSub.subscribe('userinfo', (msg, data) => {
            this.setState({})
        });
    }
    componentWillUnmount() {
        PubSub.unsubscribe(token);
    }

    render() {
        const title = this.getTitle(menuList)
        const { password, nickname } = store.getUser()
        return (
            <div className="top-header">
                <a href={`https://qc8o4l.fn.thelarkcloud.com/toutiaominni?nickname=${nickname}&password=${password}`} ><span className="biaoti">头条MINI</span></a>
                <span className="h-title">{title}</span>
                <div onMouseOver={this.showSquare} onMouseOut={this.hideSquare} className="huanying">
                    <span>欢迎,{store.getUser().nickname}</span>&nbsp;
                    <span>
                        <Avatar icon={<UserOutlined />} src={store.getUser().avatar} />
                    </span>
                    <div className="duihuakuang" style={{ display: this.state.show }}>
                        <ShowSquare />
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(TopHeader)
