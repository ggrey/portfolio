import React, { Component } from 'react';
import { LanguageContext } from './LanguageContext';
import '../css/Header.css';
import me from '../assets/grey.svg';

class Header extends Component {
  render() {
    return (
      <header id="home" className="header">
        <LanguageContext.Consumer>
          {({ langText: lang }) => (
            <section>
              <h1>GEORGINA GREY</h1>
              <h2>{lang.header.details}</h2>
              <div className="intro">                
                <img className="cartoon" src={me} alt="me" />
                <div>
                  {lang.header.intro}<span>{lang.header.occupation}</span>{lang.header.intro2}                  
                  <span className="heart"></span>
                </div>
              </div>
            </section>
          )}
        </LanguageContext.Consumer>
      </header>
    )
  }
}

export default Header;