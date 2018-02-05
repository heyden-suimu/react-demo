import React, { Component } from 'react';
import { withRouter } from 'react-router-dom' 
import { Button } from "element-react";
import "../style/login.scss";
import { layer } from "../asset/js/common";
import { login } from "../asset/server/getData";
import md5  from "js-md5";

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: ""
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        let tg = event.target
        this.setState({[tg.name]: tg.value})    
    }

    login = async (event) => {
        let data = await login('post', {
            username: this.state.username,
            password: md5(this.state.username)
        })
        if (data.code === 0) {
            this.props.history.push('/home/device')
        } else{
            layer('账号或者密码错误')
        }
    }

    enter = (event)=>{
        event.preventDefault()
        if(event.keyCode !== 13){
            return
        } else {
            this.login()
        }
    }

    render() {
        return (
            <div className="Container login">
                <div className="login">
                    <div className="sitename">智能后视镜管理</div>
                    <form className="loginForm" >
                        <div className="item line">
                            <span className="user"></span><input  id="UserName" maxLength="20" name="username" placeholder="登录名" type="text" value={this.state.username} onChange={this.handleChange} />
                        </div>
                        <div className="item line">
                            <span className="pwd"></span><input className="txtbox" id="Password" maxLength="20" name="password" placeholder="密码" type="password" value={this.state.password} onChange={this.handleChange} onKeyUp={this.enter}/>
                        </div>
                        <Button onClick={this.login}>登录</Button>
                    </form>
                </div> 
            </div>
        );
    }
}

export default Login;