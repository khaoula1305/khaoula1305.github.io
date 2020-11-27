import React, { Component } from "react";
import  Social  from './Social';

class Header extends Component {
  render() {
    return (
      <div id="wrapper">
        <div id="main">
          <div className="inner">
            <header id="header">
              <a href="index.html" className="logo">
                <strong>Benchari</strong> Khaoula
              </a>
              <ul className="icons">
                  <Social/>
              </ul>
            </header>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
