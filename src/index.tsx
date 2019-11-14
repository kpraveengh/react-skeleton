import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import App from './App';
import Login from './pages/auth/login.page';
import Register from './pages/auth/register.page';
import JobList from './pages/jobs/jobs.list';
import JobCreate from './pages/jobs/job.create';

ReactDOM.render((
  <BrowserRouter>
  <Switch>   
    <Route path="/login" component={Login}/>    
    <Route path="/register" component={Register}/>
    <Route path="/jobs" component={JobList}/>
    <Route path="/jobpost" component={JobCreate}/>
    <App />

  </Switch>
  </BrowserRouter>
), document.getElementById('root'))