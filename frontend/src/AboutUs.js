import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
      marginTop: 80
  },
}

class AboutUs extends Component {
  render() {
    return (
      <div className={this.props.classes.root}>
        Oxfam is a global organization working to end the injustice of poverty. 
        We help people build better futures for themselves, hold the powerful accountable, and save lives in disasters. 
        Our mission is to tackle the root causes of poverty and create lasting solutions.
      </div>
    );
  }
}

AboutUs.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AboutUs);
