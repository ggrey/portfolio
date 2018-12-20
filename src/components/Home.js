import React, { Component } from 'react';
import { css } from 'emotion';
import { LanguageContext } from './LanguageContext';
import { color } from './Theme';
import me from '../assets/grey.svg';
import ServiceBox from './ServiceBox';
import SEO from './SEO';

const main = css({
  label: 'home',

  '.intro': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',

    span: {
      color: "#000",
      fontWeight: '500',
      background: color,
      padding: '0 6px'
    }
  },

  img: {
    height: '13em',
    width: '7em'
  },

  '.serviceBox': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'baseline',
    border: `1px solid #414141`,
    height: '17em',
    textAlign: 'center',
    boxShadow: `2px 3px ${color}`,
    margin: '2.5em 0',
    background: '#3a3838',
    padding: '0.3em',
    fontSize: '0.9em',

    '.serviceBox:active': {
      border: '1px solid red'
    },

    p: {
      margin: 0
    },

    'p:nth-child(2)': {
      fontWeight: 500,
      color: color
    },

    svg: {
      height: '7em'
    }
  },

  '@media all and (min-width: 1366px)': {
    '.services': {
      display: 'flex'
    },

    '.serviceBox': {
      width: 'calc(100% / 3)',
      margin: '2em 0',
      height: '18em',

      ':hover': {
        transform: 'scale(1.02) translateY(-5px)',
        transition: '0.1s all linear',
      }
    },

    '.serviceBox:nth-child(2)': {
      marginRight: '0.9em',
      marginLeft: '0.9em'
    }
  },

  '@media all and (min-width: 736px) and (max-width: 1365px)': {
    '.services': {
      width: '60%',
      alignSelf: 'center'
    },

    '.serviceBox': {
      margin: '1em 0'
    }
  }
});

const title = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',

  h1: {
    fontSize: '2.1em',
    margin: '0.5em 0 0',
    color: color,
    letterSpacing: 4
  },

  '@media all and (min-width: 2500px)': {
    h1: {
      fontSize: '3.5em'
    },
  },

  '@media all and (min-width: 1690px) and (max-width: 2499px)': {
    h1: {
      fontSize: '3.5em'
    },
  },

  '@media all and (min-width: 1280px) and (max-width: 1689px)': {
    h1: {
      fontSize: '2.8em'
    },

    h2: {
      margin: '1em auto'
    }
  },

  '@media all and (min-width: 736px) and (max-width: 1279px)': {
    h1: {
      fontSize: '2.7em'
    },
  },

  '@media all and (max-width: 340px)': {
    h1: {
      fontSize: '1.8em'
    },
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
    fontWeight: 'bold',
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
        <SEO
          isBlogPost={false}
          postData={{
            description: `I'm a Web Developer focused on making Web Applications that load fast, look good and are easy to use.`,
            title: 'Georgina Grey | Full-Stack Web Developer',
            slug: '/'
          }}
          postImage={'./assets/georginagrey.png'}
        />
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
                </p>
                <div className="services">
                  <ServiceBox
                    icon='static'
                    question={lang.home.q1}
                    answer={lang.home.a1}
                  />
                  <ServiceBox
                    icon='custom'
                    question={lang.home.q2}
                    answer={lang.home.a2}
                  />
                  <ServiceBox
                    icon='dev'
                    question={lang.home.q3}
                    answer={lang.home.a3}
                  />
                </div>
              </div>
            </section>
          )}
        </LanguageContext.Consumer>
      </div>
    )
  }
}

export default Home;