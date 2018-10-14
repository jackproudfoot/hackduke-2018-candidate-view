import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import GridList from '@material-ui/core/GridList'

import Candidate from './Candidate.js'

const styles = {
  root: {
      flexGrow: 1,
      margin: 10
  },
}

class Candidates extends Component {
    state = {candidates: []}
    
    componentDidMount() {
        this.setState({candidates: [
            {name: "Jack Proudfoot", age: 45, picture: "./img/mauriciofunes.png"},
            {name: "Eddy Lin", age: 45, picture: "./img/mauriciofunes.png"},
            {name: "Siddarth Madala", age: 45, picture: "./img/mauriciofunes.png"},
            
        ]});
        
    }
    
    render() {
        var candidates = []
        for (var i = 0; i < this.state.candidates.length; i++) {
            candidates.push(<Candidate key={i} data={this.state.candidates[i]} data-uk-toggle={"target: #" + i}/>);
        }
        
        return (
            <div className={this.props.classes.root}>
                <GridList cols={3}>
                    {candidates}
                </GridList>
            </div>
        )
    }
}

Candidates.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Candidates);