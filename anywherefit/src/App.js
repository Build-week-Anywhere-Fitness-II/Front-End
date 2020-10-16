import React from 'react';

import './App.css';
import Login from './components/login';
import Register from './components/register';
import Routes from './components/routes';
import NavBar from './components/navbar'

function App() {
  return (
    <div className="App">
      <NavBar/>
<Routes/>


    </div>
  );
}

export default App;
