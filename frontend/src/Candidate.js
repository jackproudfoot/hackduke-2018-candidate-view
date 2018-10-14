import React, { Component } from 'react';

class Candidate extends Component {
  render() {
      
    return (
      <div>
        <img className="uk-border-circle" width={100} height={100} src={this.props.data.picture} alt={this.props.data.name}/>
      </div>
    );
  }
}

export default Candidate;
