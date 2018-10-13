import React, { Component } from 'react';

import Main from './Main.js'

class App extends Component {
    state = {user: undefined}
    
    responseFacebook = (user) => {
        console.log(user);
        this.setState({user: user})
    }
  
  render() {  
      
    return (
      <Main user={this.state.user} responseFacebook={this.responseFacebook}/>
    );
  }
}

export default App;
