import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shop/ShopPage'
import Header from './components/header/Header'
import './App.css';

function App() {
  return (
    <Router>
    <Header/>
    <Switch>
    <Route path='/' exact component={HomePage}/>
    <Route path='/shop' component={ShopPage}/>
    </Switch>
    </Router>
  );
}

export default App;
