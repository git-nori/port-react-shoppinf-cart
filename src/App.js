import React from 'react';
import Header from './components/header/Header.jsx'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HomePage from './features/home/HomePage'
import CheckoutInfoPage from './features/checkoutInfo/CheckoutInfoPage'
import ProductListPage from './features/product/ProductListPage'
import ProductDetailPage from './features/product/ProductDetailPage'
import './App.css';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/checkoutInfo' component={CheckoutInfoPage} />
        <Route exact path='/catalog' component={ProductListPage} />
        <Route exact path='/catalog/:productId' component={ProductDetailPage} />
      </Switch>
    </Router>
  );
}

export default App;
