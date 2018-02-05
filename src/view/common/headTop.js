import React, { Component } from 'react';
import { Checkbox, Dropdown } from "element-react";
import { withRouter } from 'react-router-dom' 
import '../../style/common/headTop.scss'

class HeadTop extends Component {

    constructor(props){
        super(props)
        this.name = "admin";
        this.state = {
            checkShow: "hide",
            backShow: "hide",
            name:'admin',
            refresh: false
        }
    }

    getshow = (pathname)=> {
        
        if (this.props.history.location.pathname == pathname) {
            return 'show'
        } else {
            return 'hide'
        }
    }
    
    componentDidMount() {
        
        if (this.props.history.location.pathname == '/home') {
            this.setState({checkShow: 'show'})
        }
        
        if (this.props.history.location.pathname == '/home') {
            this.setState({ backShow: 'show' })
        } 
    } 

    back = ()=>{

    }

    getval = (value)=> {
       this.setState({name: '1q23', refresh: value})
    }

    exit = ()=>{
        // v -if= "$route.path == '/home/devStatus' "
        // v-if='$route.path == "/home/vedio"'
        setTimeout(() => {
            this.props.history.push('/login')
        }, 300);
    }
    render() {
        return (
            <header id='head_top'>
                <div className="tip">行车记录仪</div>
                <div className={"back " + this.getshow('/home1')} onClick={this.back}><span className="el-icon-arrow-left" >返回</span></div>
                <div className="user">
                    <Checkbox checked={this.state.refresh} className={`refresh ${this.state.checkShow}`}  onChange={this.getval}>自动刷新</Checkbox>
                    <Dropdown trigger="click" onCommand={this.exit} menu={(
                        <Dropdown.Menu className="exit">
                            <Dropdown.Item command="a">退出</Dropdown.Item>
                        </Dropdown.Menu>
                    )}>
                        <span className="el-dropdown-link" style={{cursor:'pointer'}}>
                        { this.state.name } <img src={require("../..//asset/images/user.png")} alt="" />
                    </span>
                       
                </Dropdown>
                </div >
            </header >
        );
    }
}

export default withRouter(HeadTop);