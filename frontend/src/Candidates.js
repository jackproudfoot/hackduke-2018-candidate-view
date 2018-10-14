import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid'

import Candidate from './Candidate.js'

const styles = {
  root: {
      display: 'flex',
      marginTop: 80
  },
}

class Candidates extends Component {
    state = {candidates: []}
    
    componentDidMount() {
        this.setState({candidates: [
            {name: "Jack Proudfoot", age: 45, position: "President", party: "Democrat", picture: "./img/mauriciofunes.png", approval: 5},
            {name: "Eddy Lin", age: 45, position: "Senator", party: "Republican", picture: "./img/mauriciofunes.png", approval: 3},
            {name: "Siddarth Madala", position: "Mayor", party: "Independent", age: 45, picture: "./img/mauriciofunes.png", approval: 1},
        ]});
        
    }
    
    render() {
        var candidates = []
        for (var i = 0; i < this.state.candidates.length; i++) {
            candidates.push(<Grid item key={i}><Candidate data={this.state.candidates[i]} data-uk-toggle={"target: #" + i}/></Grid>);
        }
        
        return (
            <div className={this.props.classes.root}>
                <Grid container justify="center">
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10}>
                        <Grid container justify="flex-start">
                            {candidates}
                            {candidates}
                            {candidates}
                            {candidates}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

Candidates.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Candidates);