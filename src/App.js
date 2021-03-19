import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shop/ShopPage'
import CheckoutPage from './pages/checkout/CheckoutPage'
import ContactPage from './pages/contact/ContactPage'
import Header from './components/header/Header'
import SignInAndUpPage from './pages/sign-in-&-sign-up/SignInAndUpPage'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/userActions'


const App = ({ setCurrentUser, currentUser }) => {

  useEffect(() => {
    if(!currentUser) {
      setCurrentUser.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot(snapShot => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
          });
        }
        setCurrentUser(userAuth);
      });
    }
  }, [currentUser, setCurrentUser]);

  return (
    <Router>
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/checkout' component={CheckoutPage} />
      <Route path='/contact' component={ContactPage} />
      <Route path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndUpPage/>)} />
    </Switch>
  </Router>
  )
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
