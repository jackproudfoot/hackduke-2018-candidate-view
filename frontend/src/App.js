import React, { Component } from 'react';

import Main from './Main.js'

class App extends Component {
    state = {user: undefined}
    
    responseFacebook = (user) => {
        fetch(('/api/auth'), {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({accessToken: user.accessToken})
        })
        .then(res => res.json())
        .then(res => {
        	this.setState({user: res})
        });
        
        
        /*var tempdata = {
            ratings: [
                {candidate: 0, ratings: [{category: 0, rating: 4}, {category: 1, rating: 2}, {category: 2, rating: 4}]},
                {candidate: 2, ratings: [{category: 0, rating: 3}, {category: 1, rating: 1}, {category: 2, rating: 2}]}
            ]
        }*/
        
    }
  
  render() {  
      
    return (
      <Main user={this.state.user} responseFacebook={this.responseFacebook}/>
    );
  }
}

export default App;
