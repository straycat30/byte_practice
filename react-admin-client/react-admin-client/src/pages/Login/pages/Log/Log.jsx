import React, { Component } from 'react'
import NormalLoginForm from '../../../../components/NormalLoginForm/NormalLoginForm.jsx'

import './Log.css'

export default class Log extends Component {
    jumpToAdmin = () => {
        // console.log(this.props)
        this.props.history.push('/admin')
    }
    render() {
        return (
            <div className="login-body">
                <div className="login-region-title">用户登录</div>
                <div className="login-region-main">
                    <NormalLoginForm jumpToAdmin={this.jumpToAdmin} />
                </div>
            </div>
        )
    }
}
