import React from 'react';
import Header from './components/header/Header.jsx'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomePage from './features/home/HomePage'
import './App.css';

function App() {
  return (
    <Router>
      <Header></Header>
      <Route exact path='/' component={HomePage}/>
    </Router>
  );
}

export default App;
