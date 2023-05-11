import React from 'react';
import './App.css';

import { Link, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Order from './components/Order';
import Checkout from './components/Checkout';
import Payment from './components/Payment';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/order/:crust'>
        <Order />
        </Route>

        <Route path='/checkout/:id'>
        <Checkout />
        </Route>

        <Route path='/payment'>
        <Payment />
        </Route>

        <Route path='/'>
        <Home/>
        </Route>

        <hr />
        <hr />
      </Switch>
    </div>
  );
}

export default App;
