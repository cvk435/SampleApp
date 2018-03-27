/* Importing the node modules, child components, services and controllers used */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


// Import routing components
import {browserHistory} from 'react-router';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';


import routes from './routes';


ReactDOM.render(
  <div>{routes}</div>,document.getElementById('root')
);
