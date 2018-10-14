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
        var candidates = []
        for (var i = 0; i < this.state.candidates.length; i++) {
            candidates.push(<Candidate key={i} data={this.state.candidates[i]} />)
        }
        
        return (
            <div>
                {candidates}
            </div>
        );
     }
}

export default Candidates;
