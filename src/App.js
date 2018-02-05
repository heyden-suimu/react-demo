import React, { Component } from 'react';
// import logo from './logo.svg';
import Login from "./view/login";
import {
  HashRouter,
  Route,
  Link,
  Redirect,
  indexRedirect,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';
import './App.css';
import './style/common/common.scss'
import 'antd/dist/antd.css';
import 'element-theme-default';
import Home from "./view/home/home";

class App extends Component {
  render() {
    return (
      <Router basename='/'>
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" component={Login}/>
            <Route path="/home" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
