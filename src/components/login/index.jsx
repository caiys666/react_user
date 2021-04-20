import React, { Component } from 'react'
import './index.less'

export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <div className="login-box">
          <h2>Login</h2>
          <h3>Welcome to Cabbage's Website</h3>
          <div className="login-box-account ipt">
            <i className="iconfont icon-icon-user" />
            <input type="text" placeholder="account" />
          </div>
          <div className="login-box-password ipt">
            <i className="iconfont icon-mima" />
            <input type="password" placeholder="password" />
          </div>
          <button className="login-box-btn">Login</button>
        </div>
      </div>
    )
  }
}
