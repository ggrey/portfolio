import React, { Component } from "react";
import '../css/Menu.css';
import { LanguageContext } from "./LanguageContext";
import Scrollchor from 'react-scrollchor';

class Menu extends Component {
  render() {
    return (
      <LanguageContext.Consumer>        
        {({ langText }) =>
          <nav className="menu">
            <ul>
              <li>
                <Scrollchor to="#home"
                className={this.props.activeLink === 'home' ? 'active' : 'inactive'}
                afterAnimate={() => this.props.changeActiveLink('home')}>{langText.menu.home}</Scrollchor>
              </li>
              <li>
                <Scrollchor to="#experience"
                className={this.props.activeLink === 'experience' ? 'active' : 'inactive'}
                afterAnimate={() => this.props.changeActiveLink('experience')}>{langText.menu.experience}</Scrollchor></li>
              <li>
                <Scrollchor to="#contact"
                className={this.props.activeLink === 'contact' ? 'active' : 'inactive'}
                afterAnimate={() => this.props.changeActiveLink('contact')}>{langText.menu.contact}</Scrollchor></li>
              <li onClick={() => this.props.toggleLanguage()}><span>{this.props.language}</span></li>
            </ul>
          </nav>
        }
      </LanguageContext.Consumer>
    )
  }
}
 
export default Menu;