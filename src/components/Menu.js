import React, { Component } from "react";
import '../css/Menu.css';
import { LanguageContext } from "./LanguageContext";
import { goToAnchor } from 'react-scrollable-anchor';

class Menu extends Component {
  render() {
    return (
      <LanguageContext.Consumer>        
        {({ langText }) =>
          <nav className="menu">
            <ul>
              <li onClick={() => goToAnchor('home', false)}>Home</li>
              <li onClick={() => goToAnchor('experience', false)}>Experience</li>
              <li onClick={() => goToAnchor('contact', false)}>Contact</li>
              <li onClick={() => this.props.toggleLanguage()}></li>
            </ul>
          </nav>
        }
      </LanguageContext.Consumer>
    )
  }
}
 
export default Menu;