import React, { Component } from 'react';

import Candidate from './Candidate.js'

class Candidates extends Component {
    state = {candidates: []}
    
    componentDidMount() {
        this.setState({candidates: [
            {name: "Mauricio Funes", age: 45, picture: "./img/mauriciofunes.png"}
        ]});
        
    }
    
    render() {
      return (
        <div>
          <div class="uk-child-width-1-3@m" uk-grid uk-scrollspy="cls: uk-animation-fade; target: > div > .uk-card; delay: 200; repeat: true">
            <div>
              <div class="uk-card uk-card-default uk-card-body">
                <h3 class="uk-card-title">Candidate 1</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div>
              <div class="uk-card uk-card-default uk-card-body">
                <h3 class="uk-card-title">Candidate 2</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
           <div>
              <div class="uk-card uk-card-default uk-card-body">
                <h3 class="uk-card-title">Candidate 3</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
      </div>
      <div>
          <div class="uk-card uk-card-default uk-card-body">
              <h3 class="uk-card-title">Siddarth Madala</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
      </div>
      <div>
          <div class="uk-card uk-card-default uk-card-body">
              <h3 class="uk-card-title">Eddy Lin</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
      </div>
      <div>
          <div class="uk-card uk-card-default uk-card-body">
              <h3 class="uk-card-title">Other (shitty) Candidate</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
      </div>
        </div>
        </div>
      );
  
  }
}

export default Candidates;
