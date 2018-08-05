import React from 'react';
import { css } from 'emotion';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Experience from './Experience';
import Contact from './Contact';
import Projects from './Projects';
import NotFound from './NotFound';
import { color } from './Theme';

const main = css({
  label: 'main',
  minHeight: '100vh',
  position: 'relative',
  padding: ' 0.5em 1.2em',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  whiteSpace: 'pre-wrap',
  fontFamily: "'Poiret One', Helvetica, 'sans-serif'",
  fontSize: '1.05em',
  color: '#FBFCFF',
  lineHeight: '1.3em', 

  a: {
		color: color
	},

  '@media all and (min-width: 2300px)': {
    fontSize: '1.2em',
    minHeight: '95vh',
    padding: '3em 13em',
    marginLeft: '10vw',
  },

  '@media all and (min-width: 1690px) and (max-width: 2299px)': {
    fontSize: '1.2em',
    minHeight: '95vh',
    padding: '3em 15em',
    marginLeft: '10vw',
  },

  '@media all and (min-width: 1280px) and (max-width: 1689px)': {
    minHeight: '95vh',
    padding: '3em 15em',
    marginLeft: '10vw',
    fontSize: '1.1em'
  },

  '@media all and (min-width: 736px) and (max-width: 1279px)': {
    padding: '0.5em 4em'
  }
});

const Main = () => (
  <main id="main" className={main}>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/experience" component={Experience}></Route>
      <Route path="/contact" component={Contact}></Route>
      <Route path="/projects" component={Projects}></Route>
      <Route component={NotFound}></Route>
    </Switch>
  </main>
)

export default Main;