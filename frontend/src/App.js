import React, { Component } from 'react';

import Main from './Main.js'

class App extends Component {
    state = {user: undefined}
    
    responseFacebook = (response) => {
        console.log(response);
        this.setState({user: response})
    }
  
  render() {
    return (
      <Main user={this.state.user} responseFacebook={this.responseFacebook}/>
    );
  }
}

export default App;
