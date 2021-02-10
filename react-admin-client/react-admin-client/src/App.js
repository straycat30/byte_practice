import React, { Component } from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'


import Admin from './pages/Admin/Admin.jsx'
import Login from './pages/Login/Login.jsx'

export default class App extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path='/admin' component={Admin} />
                    <Route path='/login' component={Login} />
                    <Redirect to='/admin' />
                </Switch>
            </HashRouter>
        )
    }
}
