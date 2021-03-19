import React from 'react'
import { Route, Switch} from 'react-router-dom';
import './App.css';
import Checkout from './components/Checkout';
import Header from './components/Header';
import PizzaList from './containers/PizzaList';
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={PizzaList} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
        
    </div>
  );
}

export default App;
