import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/homepage/HomePage'
import Header from './components/header/Header'
import ShopPage from './pages/shop/ShopPage'
import SignInAndUpPage from './pages/sign-in-&-sign-up/SignInAndUpPage'
import './App.css';

function App() {
  return (
    <Router>
    <Header/>
    <Switch>
    <Route path='/' exact component={HomePage}/>
    <Route path='/shop' component={ShopPage}/>
    <Route path='/signin' component={SignInAndUpPage}/>
    </Switch>
    </Router>
  );
}

export default App;
