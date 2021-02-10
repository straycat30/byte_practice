import React, { Component } from 'react'
import { Statistic } from 'antd';
import { LikeOutlined, UserAddOutlined, DislikeOutlined } from '@ant-design/icons';
import store from '../../../../utils/storageUtils.js'

import './Home.css'

export default class Home extends Component {
    render() {
        const user = store.getUser()
        return (
            <div className="home-body">
                <div className="home-region">
                    <div className="home-data">
                        <Statistic title="点赞量" value={user.good} prefix={<LikeOutlined />} />
                    </div>
                </div>
                <div className="home-region">
                    <div className="home-data">
                        <Statistic title="关注量" value={user.fans} prefix={<UserAddOutlined />} />
                    </div>
                </div>
                <div className="home-region">
                    <div className="home-data">
                        <Statistic title="被踩量" value={user.bad} prefix={<DislikeOutlined />} />
                    </div>
                </div>
            </div>
        )
    }
}
