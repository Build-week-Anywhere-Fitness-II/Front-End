import React from 'react';
import {withRouter} from 'react-router-dom'
import './App.css';

import Routes from './components/routes';
import NavBar from './components/navbar'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
<Routes/>
<Footer/>


    </div>
  );
}

export default withRouter(App);
