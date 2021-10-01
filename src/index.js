import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./components/Login/register";
import Shop from "./components/Shop";
import Lipstick from "./components/Shop/lipstick";
import Perfume from "./components/Shop/perfume";
import Mask from "./components/Shop/mask";
import Order from "./components/Order";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/"><Login /></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/new" component={Shop}></Route>
        <Route path="/lipstick" component={Lipstick}></Route>
        <Route path="/perfume" component={Perfume}></Route>
        <Route path="/mask" component={Mask}></Route>
        <Route path="/order" component={Order}></Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

