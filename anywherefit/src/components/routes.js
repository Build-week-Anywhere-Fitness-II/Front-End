import React from 'react';
import Login from "./login";
import Register from './register';
import {Route} from "react-router-dom";
import Home from './marketing';
import About from './about';
import UserProfile from './userProfile';
import ClassList from './classList';
import ClassSearch from './classSearch'

const Routes = () => {
return (
    <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/About" component={About}/>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path='/user' component={UserProfile}/>
        <Route exact path ="/classes" component={ClassSearch}/>
    </div>
)
}

export default Routes;