import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login'

<<<<<<< HEAD

class Home extends Component {
    
  
=======
class Home extends Component {
>>>>>>> 22c770ddb01fda60c856fb8a36ff8a08d8385f32
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
