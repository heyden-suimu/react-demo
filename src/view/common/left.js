import React, { Component } from 'react';
import  Menu  from "../../asset/element-react/src/menu/index";
import "../../style/common/left.scss";
import { menuList } from "../../asset/server/Data";
import { withRouter } from 'react-router-dom' 

function Mlist(props) {
    let List = menuList.map((item, index) =>
        <div onClick={(event) => toPath(props.fn, item.path, event)} key={index}><Menu.Item index={String(index)}><i className="el-icon-message"></i>{item.name}</Menu.Item></div>   
    )

    function toPath(history, path, event) {
        event.preventDefault()
        history.push(path)
    }

    return List
}

class Left extends Component {

    constructor(props) {
        super(props)

    }

    LefSelect(index, indexPath, indexpath) {

    }

    render() {
        return (
            <section id='left'>
                <Menu defaultActive="0" className="el-menu-vertical-demo" theme="dark" onSelect={this.LefSelect}>

                    {/* <Menu.Item v-for='(item, index) in nav' : index="`/home/${item.route}`"  onClick="gorouter(item.route)" v-if="getPrority(item.pname)"><i : class="item.icon" ></i>{ item.text  } </Menu.Item > */}
                    <Mlist fn={this.props.history}></Mlist>
                 </Menu >
            </section >
        );
    }
}

export default withRouter(Left);