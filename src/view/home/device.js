import React, { Component } from 'react';
import { Table, Button } from "element-react";
import { deviceApi } from "../../asset/server/getData";
import { layer } from "../../asset/js/common";

class Device extends Component {
    name = 123
    state = {
        columns: [
            {
                label: "IMEI",
                prop: "imei",
                align: 'center'
            },
            {
                label: '当前位置',
                align: 'center',
                prop: 'address'
            },
            {
                label: '更新时间',
                prop: 'time',
                align: 'center'
            },
            {
                label: "操作",
                align: 'center',
                prop: "address",
                render: (row) => {
                    return (
                        <span>
                            <Button onClick={() => this.readDev(row.imei)} type="text" size="small">详情</Button>
                            <Button type="text" size="small">监控查看</Button>
                        </span>
                    )
                }
            }
        ],
        data: []
    }

    componentDidMount() {
        this.init()
    }

    async init() {

        let data = await deviceApi('get', {
            start: 0,
            size: 10,
            imei: 'all'
        })
        if (data.code === 0) {
            this.setState({
                data: data.res
            })
        } else {
            layer(data.ch||data.message||'数据错误')
        }
    }

    readDev(name) {
        layer(name, 'info')
    }

    render() {
        return (
            <div>
                <Table
                    style={{width: '100%'}}
                    columns={this.state.columns}
                    data={this.state.data}
                    border = {true}
                >

                </Table>
            </div>
        );
    }
}

export default Device;