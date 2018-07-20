import React, { Component } from 'react';
import { css } from 'emotion';
import { LanguageContext } from './LanguageContext';
import { color } from './Theme';
import me from '../assets/grey.svg';

const main = css({
  label: 'home',

  '.intro': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    'span': {
      color: color,
      fontWeight: 'bold',
    }
  },

  'img': {
    height: '13em',
  }
});

const title = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',

  h1: {
    fontSize: '2.2em',
    margin: 0,
    color: color,
    letterSpacing: 4
  },

  '@media all and (min-width: 1280px)': {
    h1: {
      fontSize: '3.5em'
    },

    h2: {
      margin: '1em auto'
    }
  }
});

const typewritter = css({
  h2: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    margin: '0.5em auto',
    borderRight: '0.04em solid white',
    animation: 'typing 3s steps(25, end), blink-caret 1s step-end infinite',
    fontSize: '1em',
    fontWeight: 'normal',
    letterSpacing: '0.07em',
    lineheight: '0'
  },

  '@keyframes typing': {
    'from': { width: '0' },
    'to': { width: '100%' }
  },

  '@keyframes blink-caret': {
    'from, to': { borderColor: 'transparent' },
    '50%': { borderColor: 'white' }
  },

  '@media all and (min-width: 1280px)': {
    h2: {
      margin: '1em auto'
    }
  }
});

class Home extends Component {
  render() {
    return (
      <div id="home" className={main}>
        <LanguageContext.Consumer>
          {({ langText: lang }) => (
            <section>
              <div className={title}>
                <h1>GEORGINA GREY</h1>
                <div className={typewritter}>
                  <h2>{lang.home.details}</h2>
                </div>
              </div>
              <div className="intro">
                <img src={me} alt="me" />
                <p>
                  {lang.home.intro}
                  <span>{lang.home.occupation}</span>
                  {lang.home.intro2}
                  <span>{lang.home.intro3}</span>
                </p>
              </div>
            </section>
          )}
        </LanguageContext.Consumer>
      </div>
    )
  }
}

export default Home;