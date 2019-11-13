import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import App from './App';
import Login from './pages/login.page';
import Register from './pages/register.page';

ReactDOM.render((
  <BrowserRouter>
  <Switch>   
    <Route path="/login" component={Login}/>    
    <Route path="/register" component={Register}/>
    <App />

  </Switch>
  </BrowserRouter>
), document.getElementById('root'))