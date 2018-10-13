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
			 				<NavBar />
							<Home {...props}/>
						</div> 
					)}/>
					<Route exact path='/candidates' render={(props) => (
						<div>
			 				<NavBar />
							<Candidates {...props}/>
						</div> 
					)}/>
					<Route exact path='/aboutus' render={(props) => (
						<div>
			 				<NavBar />
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