import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid'

import Radio from '@material-ui/core/Radio';

const styles = {
  root: {
      display: 'flex',
      marginTop: 80
  },
}

class CategoryRating extends Component {
    handleChange = (e) => {
        this.props.handleChange(e, this.props.category)
    }
    
    render() {
        
        return (
            <Grid container justify="center" alignItems="center">
                <Grid item xs={2}>
                    <div style={{fontSize: 8}}>Highly Opposed</div>
                     <Radio checked={this.props.categoryRating === 0} value={"0"} onChange={(e) => this.handleChange(e, this)}/>
                </Grid>
                <Grid item xs={2}>
                    <div style={{fontSize: 8}}>Opposed</div>
                    <Radio checked={this.props.categoryRating === 1} value={"1"}  onChange={(e) => this.handleChange(e, this)}/>
                </Grid>
                    <Grid item xs={2}>
                      <div style={{fontSize: 8}}>Neutral</div>
                      <Radio checked={this.props.categoryRating === 2} value={"2"}  onChange={(e) => this.handleChange(e, this)}/>
                </Grid>
                <Grid item xs={2}>
                    <div style={{fontSize: 8}}>Supportive</div>
                    <Radio checked={this.props.categoryRating === 3} value={"3"} onChange={(e) => this.handleChange(e, this)}/>
                </Grid>
                <Grid item xs={2}>
                    <div style={{fontSize: 8}}>Highly Supportive</div>
                    <Radio checked={this.props.categoryRating === 4} value={"4"}  onChange={(e) => this.handleChange(e, this)}/>
                </Grid>
           </Grid>
        )
    }
}

CategoryRating.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(CategoryRating);