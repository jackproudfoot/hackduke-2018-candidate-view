import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login'

class Home extends Component {
  render() {
        
    return (
        <div>
            {this.props.user === undefined ? 
                <FacebookLogin
                    appId="354049905333802"
                    autoLoad={true}
                    fields="name,email"
                    onClick={this.componentClicked}
                    callback={this.props.responseFacebook}
                />
            :
                <div>Hello {this.props.user.name}</div>
            }
            
        </div>
    );
  }
}

export default Home;
