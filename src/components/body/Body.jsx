import React from 'react'
import Menu from './Menu'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import {Route,Redirect}from 'react-router-dom'

export default function Body() {
    return (
        <div>
         <Route path="/" exact component={Home} /> 
         <Route path="/Menu" exact component={Menu}/>
         <Route path="/Contact" exact component={Contact}/>
         <Route path="/About" exact component={About} /> 
         <Redirect from="/" to="/Home"/>
        </div>
    )
}
