import React, { Component } from 'react';
import { LanguageContext } from './LanguageContext';
import '../css/Header.css';
import me from '../assets/grey.svg';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <LanguageContext.Consumer>
          {({ langText: lang }) => (
            <section>
              <div className="name">GEORGINA GREY</div>
              <div className="details">{lang.header.details}</div>
              <div className="intro">
                <img className="cartoon" src={me} alt="me" />
                <div>
                  {lang.header.intro}
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