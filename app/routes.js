'use strict'
/* Importing the node modules, child components, services and controllers used */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';
import {BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';
import NavBar from './common/navBar';
import Header from './common/header';
import Footer from './common/footer';
import AllQuestionsComponent from './components/admin/allQuestionsComponent';
import AddquestionsComponent from './components/admin/addquestionsComponent';
import DashboardComponent from './components/admin/dashboardComponent';
import Home from './components/Home/home';
import Login from './components/login';
import Register from './components/register';
/* Load the components based on Local storage elements empty or not */

function landing() {
	if(Object.keys(localStorage).length === 0) {
		location.href = '/admin/login';
		return true;
	} else {
		return false;
	}
  }

export default <Router history={browserHistory}>
				    <div>
				      <Switch>
					  <Route exact path="/" component={Home}></Route>
					  <Route exact path="/admin/login" component={Login}></Route>
						<Route exact path="/admin/dashboard" render={(data) => {
								return landing() ? <Login {...data}/> : <DashboardComponent {...data}/>;
							}}></Route>

						<Route exact path="/admin/add-question" render={(data) => {
								return landing() ? <Login {...data}/> : <AddquestionsComponent {...data}/>;
							}}></Route>
						 <Route exact path="/admin/all-questions" render={(data) => {
								return landing() ? <Login {...data}/> : <AllQuestionsComponent {...data}/>;
							}}></Route>
							
							<Redirect from="/home" to="/" push />
							<Redirect from="/login" to="/admin/login" push />
							<Redirect from="/admin" to="/admin/login" push />
						{/* <Route exact path="/register" component={Register}></Route> */}
				       </Switch>
					 
				    </div>
				</Router>
