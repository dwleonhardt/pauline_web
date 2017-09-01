import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './index.css';
import Home from './components/Home';
import Items from './components/Items';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/add-items" component={Items}></Route>
    </div>
  </BrowserRouter>,
  // document.querySelector('.app')
  document.getElementById('root'));
registerServiceWorker();
