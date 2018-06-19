import React, { Component } from 'react';
import '../css/App.css';
import ReallySmoothScroll from 'really-smooth-scroll';

import Menu from './Menu';
import Header from './Header';
import Content from './Content';
import Contact from './Contact';
import Footer from './Footer';
import ScrollableAnchor from 'react-scrollable-anchor';
import { LanguageContext, languages } from './LanguageContext';
import Separator from './Separator';

ReallySmoothScroll.shim();
ReallySmoothScroll.config({
  mousewheelSensitivity: 6,
  keydownSensitivity: 6
});

class App extends Component {
  constructor(props) {
    super(props);

    this.toggleLanguage = () => {
      let { language, langText } = this.state;
      language = language === 'en' ? 'es' : 'en';
      langText = languages[language];
      console.log({ langText })
      this.setState({ language, langText });
    }

    this.state = {
      visible: false,
      language: 'en',
      langText: languages.en,
      toggleLanguage: this.toggleLanguage
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

  render() {
    return (
      <LanguageContext.Provider value={this.state}>
        <Menu toggleLanguage={this.toggleLanguage} />
        <div className="app">
          <ScrollableAnchor id={'home'}>
            <Header />
          </ScrollableAnchor>
          {/* <Separator /> */}
          <ScrollableAnchor id={'experience'}>
            <Content />
          </ScrollableAnchor>
          {/* <Separator /> */}
          <ScrollableAnchor id={'contact'}>
            <Contact />
          </ScrollableAnchor>
        </div>
        <Footer />
      </LanguageContext.Provider>
    );
  }
}

export default App;
