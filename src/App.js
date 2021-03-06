import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/homepage/HomePage'
import Header from './components/header/Header'
import ShopPage from './pages/shop/ShopPage'
import SignInAndUpPage from './pages/sign-in-&-sign-up/SignInAndUpPage'
// import auth from './firebase/firebase.utils'
import firestore from './firebase/firebase.utils'
import './App.css'

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    if(!currentUser) {
      firestore.auth().onAuthStateChanged(user => { setCurrentUser(user) })
    }
  },[currentUser])

  return (
    <Router>
    <Header currentUser={currentUser}/>
    <Switch>
    <Route path='/' exact component={HomePage}/>
    <Route path='/shop' component={ShopPage}/>
    <Route path='/signin' component={SignInAndUpPage}/>
    </Switch>
    </Router>
  );
}

export default App;
