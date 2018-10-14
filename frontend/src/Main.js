import React, { Component} from 'react'
import { Switch, Route } from 'react-router-dom';

import NavBar from './NavBar.js'
import Candidates from './Candidates.js'
import NotFound from './NotFound.js'

class Main extends Component {
	render() {
        
		return (
			<main>
				<Switch>
					<Route exact path='/' render={(props) => (
						<div>
			 				<NavBar active='candidates' user={this.props.user} responseFacebook={this.props.responseFacebook}/>
							<Candidates user={this.props.user} {...props}/>
						</div> 
					)}/>
					<Route component={NotFound} />
				</Switch>
			</main>
		)
	}
}
export default Main;