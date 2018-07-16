import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import { css } from 'emotion';
import { LanguageContext } from "./LanguageContext";
import { color } from './Theme';

const main = css({
  label: 'menu',
  display: 'flex',
  width: '100%',
  fontWeight: '600',
  padding: '0.07em',
  backgroundImage: 'linear-gradient(90deg, #F95151 0%, #F9E35F 24%, #83D45A 49%, #62AFDF 74%, #8678DD 100%)',
  boxShadow: '0 0 0.1em 0 #000000',
  zIndex: '10',

  ul: {
    display: 'flex',
    justifyContent: 'space-evenly',
    listStyleType: 'none',
    padding: '0',
    background: '#2d4a60',
    width: '100%'
  },

  'ul li': {
    alignSelf: 'center',
    textAlign: 'center',
    margin: '0',
    padding: '0.4em 0',
    width: '100%',
    fontFamily: 'FontAwesome',
    fontWeight: 'normal',
    fontSize: '3em',

    a: {
      display: 'flex',
      flexDirection: 'column',

      span: {
        fontFamily: "'Poiret One', 'sans-serif'",
        fontSize: '0.28em',
        padding: '0.8em 0'
      }
    },

    ':nth-child(odd)': {
      background: '#141E30'
    },

    ':nth-child(even)': {
      background: '#202d44'
    },
  },

  'ul li a': {
    textDecoration: 'none',
    color: '#FBFCFF',
    transition: '0.1s all linear',
    lineHeight: '0',
  },

  svg: {
    height: '0.8em',
  },

  '.active': {
    color: color,
    transform: 'scale(1.15)',
  },

  '@media all and (min-width: 1280px)': {
    flexDirection: 'column',
    width: '22vh',
    minWidth: '22vh',
    fontSize: '1.3em',
    backgroundImage: 'linear-gradient(180deg, #F95151 0%, #F9E35F 24%, #83D45A 49%, #62AFDF 74%, #8678DD 100%)',

    ul: {
      flexDirection: 'column',
      height: 'calc(100vh - 4px)',
    },

    li: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },

    'ul li': {
      height: '100vh'
    },

    '@media all and (min-width: 1280px)': {
      position: 'fixed'
    }

  }
});

class Menu extends Component {
  render() {
    return (
      <LanguageContext.Consumer>
        {({ langText }) =>
          <nav className={main}>
            <ul>
              <li>
                <NavLink to="/" exact activeClassName="active">
                  <svg aria-hidden="true" data-prefix="fas" data-icon="user-astronaut" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M64 224h13.5c24.7 56.5 80.9 96 146.5 96s121.8-39.5 146.5-96H384c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16h-13.5C345.8 39.5 289.6 0 224 0S102.2 39.5 77.5 96H64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16zm40-88c0-22.1 21.5-40 48-40h144c26.5 0 48 17.9 48 40v24c0 53-43 96-96 96h-48c-53 0-96-43-96-96v-24zm72 72l12-36 36-12-36-12-12-36-12 36-36 12 36 12 12 36zm151.6 113.4C297.7 340.7 262.2 352 224 352s-73.7-11.3-103.6-30.6C52.9 328.5 0 385 0 454.4v9.6c0 26.5 21.5 48 48 48h80v-64c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v64h80c26.5 0 48-21.5 48-48v-9.6c0-69.4-52.9-125.9-120.4-133zM272 448c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm-96 0c-8.8 0-16 7.2-16 16v48h32v-48c0-8.8-7.2-16-16-16z"></path></svg>
                  <span>{langText.menu.home}</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/experience" exact activeClassName="active">
                  <svg aria-hidden="true" data-prefix="fas" data-icon="code" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path></svg>
                  <span>{langText.menu.experience}</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" exact activeClassName="active">
                  <svg aria-hidden="true" data-prefix="fas" data-icon="comment-dots" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32zM128 272c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"></path></svg>
                  <span>{langText.menu.contact}</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" exact activeClassName="active">
                  <svg aria-hidden="true" data-prefix="fas" data-icon="coffee" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M192 384h192c53 0 96-43 96-96h32c70.6 0 128-57.4 128-128S582.6 32 512 32H120c-13.3 0-24 10.7-24 24v232c0 53 43 96 96 96zM512 96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32V96h32zm47.7 384H48.3c-47.6 0-61-64-36-64h583.3c25 0 11.8 64-35.9 64z"></path></svg>
                  <span>{langText.menu.about}</span>
                </NavLink>
              </li>
              {/* <li onClick={() => this.props.toggleLanguage()}>
								<svg aria-hidden="true" data-prefix="fas" data-icon="globe-americas" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"></path></svg>
								<span>{this.props.language}</span>
							</li> */}
            </ul>
          </nav>
        }
      </LanguageContext.Consumer>
    )
  }
}

export default Menu;