import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/CadastroVideo';

// TODO: adicionar rota e pagina para erro 404
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/cadastro/video' component={CadastroVideo} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

