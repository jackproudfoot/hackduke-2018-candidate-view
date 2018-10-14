import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
        <nav className="uk-navbar-container" uk-navbar>
            <div className="uk-navbar-left">
                <ul className="uk-navbar-nav"> 
                    <li className = {window.location.href === 'http://localhost:3000/' ? "uk-active" : "uk-parent"}><a href="/">Home</a></li>
                    <li className = {window.location.href === 'http://localhost:3000/candidates' ? "uk-active" : "uk-parent"}><a href="/candidates">Candidates</a></li>
                    <li className = {window.location.href === 'http://localhost:3000/about' ? "uk-active" : "uk-parent"}><a href="/about">About Us</a></li>
                    <li><a href=""></a></li>
                </ul>
            </div>
        </nav>
    );
  }
}

export default NavBar;






