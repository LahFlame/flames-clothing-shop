import HomePage from './pages/homepage/homedirectory.component';
import ShopPage from './pages/shopPage/shop.component';
import './App.css';
import { Route, Switch } from 'react-router-dom';



function App() {
  return (
    <div >
      <Switch>
        <Route  exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
