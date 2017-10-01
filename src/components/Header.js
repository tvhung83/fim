import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
        <header id="header">
            <Link to="/" className="logo"><strong>Fim</strong> <span>by Râu Bắp</span></Link>
            <nav>
                <a href="#menu">Menu</a>
            </nav>
        </header>
    );
  }
}

export default Header;
