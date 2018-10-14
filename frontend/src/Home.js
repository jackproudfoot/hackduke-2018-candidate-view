import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import FacebookLogin from 'react-facebook-login'

const styles = {
  root: {
      marginTop: 80
  },
}

class Home extends Component {
  render() {
        
    return (
        <div className={this.props.classes.root}>
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

Home.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home);
