import React, { Component } from 'react';
import { vedioApi } from "../../asset/server/getData";
import { layer } from '../../asset/js/common';
import { Table } from "antd";
import { spawn } from 'child_process';
import '../../style/home/video.scss'

function merge(Obj, obj) {
    return Object.assign(Obj, obj)
}

class Video extends Component {
    constructor(props) {
        super(props)
        this.columns = [{
            title: '缩略图',
            dataIndex: 'thumbnail',
            align: 'center',
            render(key, record, index) {
                return (
                    <img src={'data:image/png;base64,' + key}></img>
                )
            }
        }, {
            title: 'IMEI',
            align: 'center',
            dataIndex: 'imei',
        }, {
            title: '地址信息',
            align: 'center',
            dataIndex: 'address',
        }, {
            title: "操作",
            align: 'center',
            render: (key, record) => {
                return (
                    <span className='action'>
                        <span onClick={() => { this.read(record)} }>查看</span>
                        <span>删除</span>
                    </span>
                )
            }
        }]
    } 

    state = {
        
        dataSource: [],
        pagination:{
            total: 0,
            current: 0,
            onChange:null,
            pageSize: 10,
            showQuickJumper: true
        },
        pramas:{
            start: 0,
            count: 10
        }
    }
    
    componentDidMount() {
        this.initVideo(vedioApi, this.state.pramas)
    }

    async initVideo(api, obj) {
        let data = await api('get',obj)

        if (data.code === 0) {
            this.setState({
                dataSource: data.res.videos,
                pagination: merge(this.state.pagination,{
                    total: data.res.totalCount,
                    onChange: this.pageChange
                }),
                total: data.res.totalCount
            })
        } else {
            layer(data.ch ||'数据错误')
        }
    }

    read(row) {
       layer(row.imei, 'info')
        
    }

    pageChange = (current, size) => {
        this.setState({
            pagination: merge(this.state.pagination,{
                current: current
            }),
            pramas:merge(this.state.pramas, {
                start: (current-1)*size
            })
        })

        this.initVideo(vedioApi, this.state.pramas)
    }

    render() {
        return (
            <div>
                <Table 
                columns = {this.columns} 
                dataSource={this.state.dataSource}
                bordered
                pagination={this.state.pagination} 
                ></Table>
            </div>
        );
    }
}

export default Video;