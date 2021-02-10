import React, { Component } from 'react'

import './Login.css'
import { Route, Switch, Redirect } from 'react-router-dom'

import Log from './pages/Log/Log.jsx'
import Register from './pages/Register/Register.jsx'


export default class Login extends Component {
    render() {
        return (
            <div className="login">
                <div className="login-header">
                    <h1 className="login-header-content">{this.props.location.pathname === '/login/log' ? '头条MINI登录页' : '头条MINI注册页'}</h1>
                </div>
                <div className="login-region">
                    <Switch>
                        <Route path='/login/log' component={Log} />
                        <Route path='/login/register' component={Register} />
                        <Redirect to='/login/log' />
                    </Switch>
                </div>
            </div >
        )

    }
}
