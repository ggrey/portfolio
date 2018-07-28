import React from 'react';
import { css } from 'emotion';
import { NavLink } from 'react-router-dom';
import { color } from './Theme';
import { LanguageContext } from "./LanguageContext";

const main = css({
  label: 'not-found',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',

  h1: {
    fontSize: '3em',
  },

  a: {
    fontSize: '1.5em',
    margin: '1em 0',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: color
  }
});

const NotFound = () => (
  <LanguageContext.Consumer>
    {
      ({ langText }) =>
        <div className={main}>
          <h1>Woops! (404)</h1>
          <span>{langText.notFound.message}</span>
          <NavLink to="/">&#8592; {langText.notFound.link}</NavLink>
        </div>
    }
  </LanguageContext.Consumer>
)

export default NotFound;