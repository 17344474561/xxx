import React, { Component } from 'react'
import "../assets/css/reset.css"
import { BrowserRouter , Redirect , Route , Switch } from "react-router-dom"
import Login from "../pages/login"
import Register from "../pages/register"
import Home from "../pages/home"
export default class Router extends Component {
    render() {
        return (
            <div className="Router">
              <BrowserRouter>
                <Switch>
                    <Route path="/register" component={Register}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/home" component={Home}/>
                    <Redirect exact from="/" to="/login" />
                </Switch>
                
              </BrowserRouter>
            </div>
        )
    }
}
