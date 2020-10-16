import React from 'react';
import Login from "./login";
import Register from './register';
import {Route} from "react-router-dom";
import Home from './marketing';
import About from './about';
import UserProfile from './userProfile';
import ClassList from './classList';
import ClassSearch from './classSearch'
import ClassDetail from './classDetail';
import PrivateRoute from '../utils/PrivateRoute'

const Routes = () => {
return (
    <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/About" component={About}/>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path='/user/:id' component={UserProfile}/>
        <Route exact path ="/classes" component={ClassSearch}/>
        <Route path = "/classes/:classId" component={ClassDetail}/>
    </div>
)
}

export default Routes;