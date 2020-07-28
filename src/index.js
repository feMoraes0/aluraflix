import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path='/' component={App} exact />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

