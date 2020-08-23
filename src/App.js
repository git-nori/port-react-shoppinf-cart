import React from 'react';
import Header from './components/header/Header.jsx'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';

function App() {
  return (
    <Router>
      <Header></Header>
    </Router>
  );
}

export default App;
