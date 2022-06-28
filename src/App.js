//This file is the center of the application (root component/wrapper component that houses all of the other components)
//import React in every component file

import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
