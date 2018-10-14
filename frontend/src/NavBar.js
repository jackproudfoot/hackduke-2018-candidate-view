import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  normal: {
      color: 'black',
      textDecoration: 'none',
      margin: 10
  },
  active: {
      color: '#6B7BA8',
      textDecoration: 'none',
      margin: 10
  },
  appbar: {
      backgroundColor: 'white'
  }
};

class NavBar extends Component {
  render() {
      const { classes } = this.props;
      
      return (
          <div className={classes.root}>
              <AppBar position="fixed" className={classes.appbar}>
                  <Toolbar>
                      <Typography variant="h5" color="inherit" className={classes.grow}>
                          <a className={classes.normal} href="https://www.oxfamamerica.org/">Oxfam</a>
                      </Typography>
                    
                      <Link to="/" style={{textDecoration: 'none'}}><div className={this.props.active === 'home' ? classes.active : classes.normal}>Home</div></Link>
                      <Link to="/candidates" style={{textDecoration: 'none'}}><div className={this.props.active === 'candidates' ? classes.active : classes.normal}>Candidates</div></Link>
                      <Link to="/about" style={{textDecoration: 'none'}}><div className={this.props.active === 'about' ? classes.active : classes.normal}>About</div></Link>
                  </Toolbar>
              </AppBar>
          </div>
        );
    }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles, { withTheme: true })(NavBar));





