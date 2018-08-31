import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import { css } from 'emotion';
import { LanguageContext } from "./LanguageContext";
import { color } from './Theme';

const main = css({
  label: 'menu',
  display: 'flex',
  width: '100%',
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
    fontWeight: '300',
    fontSize: '3em',

    a: {
      display: 'flex',
      flexDirection: 'column',

      span: {
        fontFamily: "Quicksand, 'sans-serif'",
        fontSize: '0.32em',
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

  'li a:hover': {
    color: color
  },

  svg: {
    height: '0.8em',
  },

  '.active': {
    color: color,
    transform: 'scale(1.1)',
  },

  '@media all and (min-width: 1399px)': {
    position: 'fixed',
    flexDirection: 'column',
    width: '10vw',
    minWidth: '10vw',
    fontSize: '1.1em',
    backgroundImage: 'linear-gradient(180deg, #F95151 0%, #F9E35F 24%, #83D45A 49%, #62AFDF 74%, #8678DD 100%)',
    marginLeft: '1px',

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
    }
  },

  '@media all and (min-width: 1280px) and (max-width: 1398px)': {
    position: 'fixed',
    flexDirection: 'column',
    width: '10vw',
    minWidth: '10vw',
    fontSize: '1em',
    backgroundImage: 'linear-gradient(180deg, #F95151 0%, #F9E35F 24%, #83D45A 49%, #62AFDF 74%, #8678DD 100%)',
    marginLeft: '1px',

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
                  <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M64 224h13.5c24.7 56.5 80.9 96 146.5 96s121.8-39.5 146.5-96H384c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16h-13.5C345.8 39.5 289.6 0 224 0S102.2 39.5 77.5 96H64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16zm40-88c0-22.1 21.5-40 48-40h144c26.5 0 48 17.9 48 40v24c0 53-43 96-96 96h-48c-53 0-96-43-96-96v-24zm72 72l12-36 36-12-36-12-12-36-12 36-36 12 36 12 12 36zm151.6 113.4C297.7 340.7 262.2 352 224 352s-73.7-11.3-103.6-30.6C52.9 328.5 0 385 0 454.4v9.6c0 26.5 21.5 48 48 48h80v-64c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v64h80c26.5 0 48-21.5 48-48v-9.6c0-69.4-52.9-125.9-120.4-133zM272 448c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm-96 0c-8.8 0-16 7.2-16 16v48h32v-48c0-8.8-7.2-16-16-16z"></path></svg>
                  <span>{langText.menu.home}</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/experience" exact activeClassName="active">
                  <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M507.73 109.1c-2.24-9.03-13.54-12.09-20.12-5.51l-74.36 74.36-67.88-11.31-11.31-67.88 74.36-74.36c6.62-6.62 3.43-17.9-5.66-20.16-47.38-11.74-99.55.91-136.58 37.93-39.64 39.64-50.55 97.1-34.05 147.2L18.74 402.76c-24.99 24.99-24.99 65.51 0 90.5 24.99 24.99 65.51 24.99 90.5 0l213.21-213.21c50.12 16.71 107.47 5.68 147.37-34.22 37.07-37.07 49.7-89.32 37.91-136.73zM64 472c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"></path></svg>
                  <span>{langText.menu.experience}</span>
                </NavLink>
              </li>              
              <li>
                <NavLink to="/projects" exact activeClassName="active">
                  <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path></svg>
                  <span>{langText.menu.projects}</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" exact activeClassName="active">
                  <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32zM128 272c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"></path></svg>
                  <span>{langText.menu.contact}</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        }
      </LanguageContext.Consumer>
    )
  }
}

export default Menu;