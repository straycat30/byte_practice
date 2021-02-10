import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { message } from 'antd'
import store from '../../utils/storageUtils.js'
import { deleteUser } from '../../api/index.js'

import './ShowSquare.css'
import {
    LogoutOutlined,
    IdcardOutlined,
    UserDeleteOutlined
} from '@ant-design/icons';



class ShowSquare extends Component {
    changeRoute = (route) => {
        return () => {
            this.props.history.push(route);
        }
    }
    //用户退出登录
    exit = () => {
        //删除用户缓存
        store.removeUser();
        //console.log(store.getUser())
        //改变路由，返回到登录页面
        this.changeRoute('/login/log')()
    }
    delete = async () => {
        const hide = message.loading('正在注销，请稍等...', 0)
        const result = await deleteUser(store.getUser()._id)
        hide()
        //console.log(result)
        if (result.err_code === 0) {
            message.success('您的账号已被成功注销', 2)
            store.removeUser();
            //改变路由，返回到登录页面
            this.changeRoute('/login/')()
        } else {
            message.error('账号注销失败', 1)
        }
    }

    render() {
        return (
            <div className="fangkuang">
                <span className="sanjiao"></span>
                <div onClick={this.exit} className="zhanshi" >
                    <LogoutOutlined />&nbsp;&nbsp;
                    <span>退出登录</span>
                </div>
                <div onClick={this.changeRoute('/admin/info')} className="zhanshi" >
                    < IdcardOutlined />&nbsp;&nbsp;
                <span>修改资料</span>
                </div>
                <div onClick={this.delete} className="zhanshi" >
                    <UserDeleteOutlined />&nbsp;&nbsp;
                <span>注销账户</span>
                </div>
            </div >
        )
    }
}
export default withRouter(ShowSquare)
