import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <nav className="uk-navbar-container" uk-navbar>
            <div className="uk-navbar-left">
                <ul className="uk-navbar-nav">
                    <li className="uk-active"><a href="">Home</a></li>
                    <li className="uk-parent"><a href="">Candidates</a></li>
                    <li className="uk-parent"><a href="">About Us</a></li>
                    <li><a href=""></a></li>
                </ul>
            </div>
        </nav>
    );
  }
}

export default Header;
