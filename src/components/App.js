import React, { Component } from 'react';
import '../css/App.css';
import ReallySmoothScroll from 'really-smooth-scroll';

import Menu from './Menu';
import Header from './Header';
import Content from './Content';
import Contact from './Contact';
import Footer from './Footer';
import { LanguageContext, languages } from './LanguageContext';
import Separator from './Separator';

ReallySmoothScroll.shim();
ReallySmoothScroll.config({
  mousewheelSensitivity: 3,
  keydownSensitivity: 6
});

class App extends Component {
  constructor(props) {
    super(props);

    this.toggleLanguage = () => {
      let { language, langText } = this.state;
      language = language === 'en' ? 'es' : 'en';
      langText = languages[language];
      this.setState({ language, langText });
    }

    this.state = {
      language: 'en',
      langText: languages.en,
      toggleLanguage: this.toggleLanguage,
      activeLink: 'home'
    }
  }

  handleMouseDown = (e) => {
    this.toggleMenu();
    e.stopPropagation();
  }

  toggleMenu = () => {
    let { visible } = this.state;
    visible = !visible;
    this.setState({ visible });
  }

  changeActiveLink = (newActiveLink) => {
    let { activeLink } = this.state;
    activeLink = newActiveLink;
    this.setState({activeLink});
    console.log({activeLink})
  }

  render() {
    return (
      <LanguageContext.Provider value={this.state}>
        <Menu 
          toggleLanguage={this.toggleLanguage}
          activeLink={this.state.activeLink}
          changeActiveLink={this.changeActiveLink}
          language={this.state.language}
        />
        <div className="app">
            <Header />
            <Content />
            <Contact />
        </div>
        <Footer />
      </LanguageContext.Provider>
    );
  }
}

export default App;
