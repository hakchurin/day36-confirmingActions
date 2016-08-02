import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import MainPage from './MainPage';
import Modal from './Modal';


const router = (
  <Router history={hashHistory}>
    <Route path="/" component={MainPage}/>
    <Route path="/MainPage" component={MainPage}/>
    <Route path="/Modal" component={Modal}/>
  </Router>
);

export default router;
