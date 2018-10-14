import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

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
                <div>No User Logged In</div>
            :
                <div>User logged in</div>
            }
            
        </div>
    );
  }
}

Home.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home);
