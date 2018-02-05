import React, { Component } from 'react';
import { Menu } from "element-react";

class Report extends Component {

    render() {
        return (
            <div>
                <Menu defaultActive="2" className="el-menu-vertical-demo" onOpen={this.onOpen.bind(this)} onClose={this.onClose.bind(this)} theme="dark" style={{width:'20%'}}>
                    <Menu.SubMenu index="1" title="导航一">
                        <Menu.ItemGroup title="分组一">
                            <Menu.Item index="1-1">选项1</Menu.Item>
                            <Menu.Item index="1-2">选项2</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup title="分组2">
                            <Menu.Item index="1-3">选项3</Menu.Item>
                        </Menu.ItemGroup>
                    </Menu.SubMenu>
                    <Menu.Item index="2">导航二</Menu.Item>
                    <Menu.Item index="3">导航三</Menu.Item>
                </Menu>
            </div>
        );
    }

    onOpen() {

    }

    onClose() {

    }
}

export default Report;