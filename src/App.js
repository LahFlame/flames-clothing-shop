import React from 'react';
import HomePage from './pages/homepage/homedirectory.component';
import ShopPage from './pages/shopPage/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sigin-in-and-sign-up.component';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { auth,createUserProfileDocument } from './firebase/firebase.utils';



class App extends React.Component {
  constructor () {
    super();
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot( snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }else{
        this.setState({
          currentUser: userAuth
        })
      }
      
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render () {
    return (
      <div >
        <Header currentUser = {this.state.currentUser}/>
        <Switch>
          <Route  exact path='/' component={HomePage}/>
          <Route  exact path='/signin' component={SignInAndSignUp}/>
          <Route exact path='/shop' component={ShopPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
