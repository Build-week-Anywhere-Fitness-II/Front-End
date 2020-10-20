import React from 'react';
import Login from "./login";
import Register from './register';
import {Route, Switch} from "react-router-dom";
import Home from './marketing';
import About from './about';
import UserProfile from './userProfile';
import PrivateRoute from '../utils/PrivateRoute'
import classList from './classList';
import classDetail from './classDetail'
import ClassDetail from './classDetail';

const Routes = () => {

    
return (
    <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/About" component={About}/>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path='/user/:id' component={UserProfile}/>
        <Switch>
            <Route exact path ="/classes" component={classList}/>
            <Route exact path ="/classes/:classId" component={classDetail}/>
        </Switch>
    </div>
)
}

export default Routes;