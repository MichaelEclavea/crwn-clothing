import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shop/ShopPage'
import './App.css';

function App() {
  return (
    <Router>
    <Route path='/' exact component={HomePage}/>
    <Route path='/shop' component={ShopPage}/>
    </Router>
  );
}

export default App;
