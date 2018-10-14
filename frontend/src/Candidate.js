import React, { Component } from 'react';

class Candidate extends Component {
  render() {
      
    return (
      <div>
        <div>
              <div className="uk-card uk-card-default uk-card-body">
                <h3 className="uk-card-title">{this.props.data.name}</h3>
                <img className="uk-border-circle" width={100} height={100} src={this.props.data.picture} alt={this.props.data.name}/>
                <p>Age: {this.props.data.age}</p>
              </div>
        </div>
      </div>
    );
  }
}

export default Candidate;
