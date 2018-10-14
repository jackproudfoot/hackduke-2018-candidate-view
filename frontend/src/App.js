import React, { Component } from 'react';

import Main from './Main.js'

class App extends Component {
    state = {user: undefined}
    
    responseFacebook = (user) => {
        console.log(user);
        
        const data = new FormData();
        
        data.append('token', user.accessToken);
        fetch(('/api/auth'), {
            method: "POST",
            body: data
        })
        .then(res => res.json())
        .then(res => {
        	console.log(res)
        });
        
        
        var tempdata = {
            ratings: [
                {candidate: 0, ratings: [{category: 0, rating: 4}, {category: 1, rating: 2}, {category: 2, rating: 4}]},
                {candidate: 2, ratings: [{category: 0, rating: 3}, {category: 1, rating: 1}, {category: 2, rating: 2}]}
            ]
        }
        this.setState({user: tempdata})
    }
  
  render() {  
      
    return (
      <Main user={this.state.user} responseFacebook={this.responseFacebook}/>
    );
  }
}

export default App;
