'use strict'
/* Importing the node modules, child components, services and controllers used */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './common/header';
import Footer from './common/footer';
import Home from './components/Home/home';


/* Load the components based on Local storage elements empty or not */

export default <Router history={browserHistory}>
				    <div>
					<Header/>
				      <Switch>
				        <Route exact path="/" component={Home}></Route>
				       </Switch>
					   <Footer/>
				    </div>
				</Router>
