import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
     <header class="l-header">
            <nav class="nav bd-grid">
                <div>
                    <a href="index.html" class="nav__logo">Khaoula1305</a>
                </div>

                <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list">
                        <li class="nav__item"><a href="#home" class="nav__link active">Home</a></li>
                        <li class="nav__item"><a href="#about" class="nav__link">About</a></li>
                        <li class="nav__item"><a href="#education" class="nav__link">Education</a></li>
                        <li class="nav__item"><a href="#skills" class="nav__link">Skills</a></li>
                        <li class="nav__item"><a href="#projects" class="nav__link">Projects</a></li>
                        <li class="nav__item"><a href="#contact" class="nav__link">Contact</a></li>
                    </ul>
                </div>

                <div class="nav__toggle" id="nav-toggle">
                    <i class='bx bx-menu'></i>
                </div>
            </nav>
        </header>
    );
  }
}

export default Header;
