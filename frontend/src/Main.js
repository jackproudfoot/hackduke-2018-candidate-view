import React, { Component} from 'react'
import { Switch, Route } from 'react-router-dom';

import Home from './Home.js'
import NavBar from './NavBar.js'
import Candidates from './Candidates.js'
import AboutUs from './AboutUs.js'
import NotFound from './NotFound.js'

class Main extends Component {
	render() {
        
		return (
			<main>
				<Switch>
					<Route exact path='/' render={(props) => (
						<div>
			 				<NavBar active='home' user={this.props.user} responseFacebook={this.props.responseFacebook}/>
							<Home {...props} user={this.props.user}/>
						</div> 
					)}/>
					<Route exact path='/candidates' render={(props) => (
						<div>
			 				<NavBar active='candidates' user={this.props.user} responseFacebook={this.props.responseFacebook}/>
							<Candidates user={this.props.user} {...props}/>
						</div> 
					)}/>
					<Route exact path='/about' render={(props) => (
						<div>
			 				<NavBar active='about' user={this.props.user} responseFacebook={this.props.responseFacebook}/>
							<AboutUs {...props}/>
						</div> 
					)}/>
					<Route component={NotFound} />
				</Switch>
			</main>
		)
	}
}
export default Main;