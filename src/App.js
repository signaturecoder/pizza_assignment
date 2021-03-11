import React from 'react'
import './App.css';
import Header from './components/Header';
import PizzaList from './containers/PizzaList';
function App() {
  return (
    <div className="App">
      <Header />
        <PizzaList />
    </div>
  );
}

export default App;
