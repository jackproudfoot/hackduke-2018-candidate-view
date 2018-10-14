import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card'
import Avatar from '@material-ui/core/Avatar'

import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
      flexGrow: 1,
      margin: 10,
  },
  card: {
      padding: 10,
      width: 200,
      height: 300
  },
  avatar: {
      margin: 10,
      width: 80,
      height: 80
  }
}

class Candidate extends Component {
  render() {
      
     return (
        <div>
            <div className={this.props.classes.root}>
                <Card className={this.props.classes.card}>
                    <h3>{this.props.data.name}</h3>
                    <Avatar className={this.props.classes.avatar} src={this.props.data.picture} alt={this.props.data.name}/>
                    <p>Age: {this.props.data.age}</p>
                </Card>
            </div>
        </div>
    );
  }
}

Candidate.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Candidate);
