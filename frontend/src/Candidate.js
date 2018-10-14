import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';

import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

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
  }
}

class Candidate extends Component {
    state = {
        open: false
    }
    
    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    
    calculateRatingColor = (rating) => {  
        
        var percent = rating / 5;
          
        var red = (241 + percent * (-159)) | 0;
        var green = 69 + percent * (105) | 0;
        var blue = 61 + percent * (24) | 0;
        
        var hex = red.toString(16) + "" + green.toString(16) + "" + blue.toString(16)

        console.log(hex)
        
        return hex
    }
    
    render() {
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
                                <Typography variant="h3" style={{color: "#" +this.calculateRatingColor(this.props.data.approval)}}>{this.props.data.approval}</Typography>
                                
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
                        <Grid item>
                            <Avatar className={this.props.classes.avatar} src={this.props.data.picture} alt={this.props.data.name}/>
                            <Typography variant="h5">{this.props.data.name}</Typography>
                                
                                
                        </Grid>
                    </Grid>
                    
                    <DialogContent>
                        <br />
                    
                        <Typography variant="subtitle1" align="left">Political Affiliation: {this.props.data.party}</Typography>
                        <Typography variant="subtitle1" align="left">Position: {this.props.data.position}</Typography>
                                 
                        <Typography variant="subtitle1">Approval Rating</Typography>
                        <Typography variant="h3" style={{color: "#" +this.calculateRatingColor(this.props.data.approval)}}>{this.props.data.approval}</Typography>
                    </DialogContent>
                    
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
