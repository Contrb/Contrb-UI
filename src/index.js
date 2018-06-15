import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from "./Components/Home";

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
    </div>
  </Router>,
  document.getElementById('root'),
);
registerServiceWorker();