import React, { Component } from 'react';

import Candidate from './Candidate.js'

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
            candidates.push(<Candidate key={i} data={this.state.candidates[i]} />);
        }
        
        return (
            <div className="uk-child-width-1-3@m uk-margin uk-grid-small uk-text-center" data-uk-grid data-uk-scrollspy="cls: uk-animation-fade; target: > div > .uk-card; delay: 200; repeat: true">
                {candidates}
            </div>
        );
  
  }
}

export default Candidates;
