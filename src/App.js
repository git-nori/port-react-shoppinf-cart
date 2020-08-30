import React from 'react';
import Header from './components/header/Header.jsx'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomePage from './features/home/HomePage'
import ProductListPage from './features/product/ProductListPage'
import './App.css';

function App() {
  return (
    <Router>
      <Header></Header>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/catalog' component={ProductListPage}/>
    </Router>
  );
}

export default App;
