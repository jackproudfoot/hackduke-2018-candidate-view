import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login'

class Home extends Component {
  render() {
    return (
      <div>
        <FacebookLogin
            appId="354049905333802"
            autoLoad={true}
            fields="name,email"
            onClick={this.componentClicked}
            callback={this.props.responseFacebook}
        />
      </div>
    );
  }
}

export default Home;
