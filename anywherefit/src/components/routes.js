import React from 'react';
import Login from "./login";
import Register from './register';
import {Route} from "react-router-dom";
import Home from './marketing';
import About from './about';
import UserProfile from './userProfile';

const Routes = () => {
return (
    <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/About" component={About}/>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path='/user' component={UserProfile}/>
    </div>
)
}

export default Routes;