import React from 'react';
import { css } from 'emotion';
import { LanguageContext } from './LanguageContext';

const main = css({
  // height: '100%'
});

const About = () => (
  <div id="about" className={main}>
    <LanguageContext.Consumer>
      {({ langText }) => (
        <p>{langText.about.intro}</p>
      )}
    </LanguageContext.Consumer>
  </div>
)

export default About;