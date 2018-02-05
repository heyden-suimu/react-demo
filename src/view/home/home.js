import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import  HeadTop  from "../common/headTop";
import Left from "../common/left";
import Device from "../home/device";
import Report from "../home/report";
import Video from "../home/video";


import "../../style/home/home.scss";

class Home extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="home">
                <HeadTop></HeadTop>
                <Left></Left>
                <div className="content">
                    <Switch>
                        <Redirect exact path="/home" to="/home/device"></Redirect>
                        <Route path="/home/device" component={Device}></Route>
                        <Route path="/home/report" component={Report}></Route>
                        <Route path="/home/video" component={Video}></Route>
                        
                    </Switch>
                    
                </div>
            </div >
        );
    }
}

export default Home;