import React, { Component } from 'react';

import Main from './Main.js'

class App extends Component {
    responseFacebook = (response) => {
        console.log(response);
    }
  
  render() {
    return (
      <Main responseFacebook={this.responseFacebook}/>
    );
  }
}

export default App;
