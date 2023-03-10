import React from 'react';

import HomePage from './pages/homepage/homedirectory.component';
import ShopPage from './pages/shopPage/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sigin-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import './App.css';
import { Route, Switch,Redirect } from 'react-router-dom';

import { auth,createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
import { currentUser } from './redux/user/user.selector';

import { createStructuredSelector } from 'reselect';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot( snapShot => {
          this.props.setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }else{
        this.props.setCurrentUser(userAuth)
      }
      
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render () {
    return (
      <div >
        <Header />
        <Switch>
          <Route  exact path='/' component={HomePage}/>
          <Route  exact path='/signin' render={() => this.props.currentUser ? (<Redirect to={"/"}/>) : ( <SignInAndSignUp/>)}/>
          <Route  path='/shop' component={ShopPage}/>
          <Route exact path='/checkout' component={CheckoutPage}/>
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({currentUser: currentUser});
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
