import React, { Component } from 'react';

import Header from './Header.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <button className="uk-button uk-button-default">Hello</button>
      </div>
    );
  }
}

export default App;
