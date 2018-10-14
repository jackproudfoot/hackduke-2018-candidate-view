import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';

import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

import LinearProgress from '@material-ui/core/LinearProgress';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
      flexGrow: 1,
      margin: 10,
      cursor: "pointer"
  },
  card: {
      padding: 10,
      width: 200,
      height: 300,
  },
  avatar: {
      margin: 10,
      width: 120,
      height: 120
  },
  dialogcontent: {
      marginTop: 10
  },
  category: {
      color: 'grey'
  },
  bar: {
      marginTop: 5
  },
  bartitle: {
      color: 'grey',
      marginTop: 5
  }
}

class Candidate extends Component {
    state = {
        open: false,
        rating: false,
        userRating: 0
    }
    
    
    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false, rating: false });
    };
    
    calculateRatingColor = (rating) => {  
        
        var percent = rating / 5;
          
        var red = (241 + percent * (-159)) | 0;
        var green = 69 + percent * (105) | 0;
        var blue = 61 + percent * (24) | 0;
        
        var hex = red.toString(16) + "" + green.toString(16) + "" + blue.toString(16)
        
        return hex
    }
    
    saveRating = () => {
        this.setState({rating: false})
    }
    
    render() {
        
        var candidateRanking = undefined;
        if (this.props.user !== undefined) {
            var candidateRankings = this.props.user.ratings.find(obj => obj.candidate === this.props.data.id)
            
            //If the user has ranked the candidate
            if (candidateRankings !== undefined) {
                candidateRankings = candidateRankings.ratings;
                
                candidateRanking = 0;
               
                for (var i = 0; i < candidateRankings.length; i++) {
                    candidateRanking = candidateRanking + candidateRankings[i].rating;
                }
                candidateRanking = (candidateRanking / candidateRankings.length) | 0;
            }
        }
            
        
        /*if (this.props.user !== undefined) {
            var candidateRanking = this.props.user.ratings[this.props.data[0]]
            for (var i = 0; i < candidateRanking.length; i++) {
                console.log(i)
            }
        }*/
        
        var overallRatingColor = "#" + this.calculateRatingColor(this.props.data.approval);
        var userRatingColor = "#" + this.calculateRatingColor(this.state.userRating !== undefined ? this.state.userRating : 0);
        
        var userRating;
        if (candidateRanking !== undefined) {
            userRating = (
                <div>
                    <Typography variant="subtitle1">Your Approval Rating</Typography>
                    <Typography variant="h3" style={{color: userRatingColor}}>{candidateRanking / .05}%</Typography>
                </div>
            )
        }
        
        //Display ratings for politican and interface for user rating
        var ratingScales = [];
        var userRatingScales = [];
        if (this.props.categories.length > 0) {
            if (this.props.data !== undefined && this.props.data.ratings.length > 0) {
                var keys = this.props.data.ratings.keys()
                var category = keys.next()
                
                while(!category.done) {
                    var categoryName = this.props.categories.find(obj => obj.id === category.value).category;
                
                    
                    ratingScales.push(
                        <div key={category.value}>
                            <Typography className={this.props.classes.bartitle} variant="body2">{categoryName}</Typography>
                            <LinearProgress variant="determinate" value={this.props.data.ratings[category.value].ranking / .05} className={this.props.classes.bar}/>
                        </div>
                    )
                    
                    userRatingScales.push(
                        <div key={category.value}>
                            <Typography className={this.props.classes.bartitle} variant="body2">{categoryName}</Typography>
                            <LinearProgress variant="determinate" value={this.props.data.ratings[category.value].ranking / .05} className={this.props.classes.bar}/>
                        </div>
                    )
                    category = keys.next()
                }
            }
        }
        
       
        return (
            <div>
                <div className={this.props.classes.root}>
                    <Card className={this.props.classes.card} onClick={this.handleClickOpen}>
                        <Grid container justify="center" align="center">
                            <Grid item>
                                <Avatar className={this.props.classes.avatar} src={this.props.data.picture} alt={this.props.data.name}/>
                                <Typography variant="h5">{this.props.data.name}</Typography>
                                <Typography variant="subtitle1">{this.props.data.party}</Typography>
                                <Typography variant="h5">{this.props.data.position}</Typography>
                                
                                <Typography variant="subtitle1">Approval Rating</Typography>
                                <Typography variant="h3" style={{color: overallRatingColor}}>{this.props.data.approval / .05}%</Typography>
                                
                            </Grid>
                        </Grid>
                    </Card>
                </div>
         
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    scroll={'body'}
                >
                    
                    <Grid container justify="center" align="center">
                        <Grid item xs={10}>
                            <Avatar className={this.props.classes.avatar} src={this.props.data.picture} alt={this.props.data.name}/>
                            <Typography variant="h3">{this.props.data.name}</Typography>
                                
                            <br /> 
                            
                            <Typography variant="subtitle1" align="left">
                                <span className={this.props.classes.category}>Political Affiliation: </span> 
                                <span className={this.props.classes.value}>{this.props.data.party}</span>
                            </Typography>
                            
                            <Typography variant="subtitle1" align="left">
                                <span className={this.props.classes.category}>Office: </span> 
                                <span className={this.props.classes.value}>{this.props.data.position}</span>
                            </Typography>
                    
                            <Typography variant="subtitle1" align="left">
                                <span className={this.props.classes.category}>Age: </span> 
                                <span className={this.props.classes.value}>{this.props.data.age}</span>
                            </Typography>
                              
                             <br /> 
                            {userRating}  
                                
                            <Typography variant="subtitle1">Overall Approval Rating</Typography>
                            <Typography variant="h3" style={{color: overallRatingColor}}>{this.props.data.approval / .05}%</Typography> 
                            <br />
                        
                        
                            {!this.state.rating ? 
                                (ratingScales.length > 0 ? (
                                    <div>
                                        <Typography variant="subtitle1">Categories</Typography>
                                        {ratingScales}
                                        
                                        <br />
                                        <Button variant="outlined" onClick={() => this.setState({rating: true})}>Rate Candidate</Button>
                            
                                    </div>
                                ) : null)
                              : (
                                  (userRatingScales.length > 0 ? (
                                      <div>
                                          <Typography variant="subtitle1">Categories</Typography>
                                          {userRatingScales}
                                          
                                        <br />
                                        <Button variant="outlined" onClick={this.saveRating}>Save Rating</Button>
                                      </div>
                                  ) : null)
                                )
                            }
                            
                            
                        </Grid>
                    </Grid>
                    
                    
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
    );
  }
}

Candidate.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Candidate);
