import React from 'react';
import ReactDOM from 'react-dom';
import Login from './pages/login.page'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import App from './App'

ReactDOM.render((
  <BrowserRouter>
  <Switch>
    <Route path="/" component={App}>
      <Route path="/login" component={Login}/>
    </Route>
  </Switch>
  </BrowserRouter>
), document.getElementById('root'))