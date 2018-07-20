import React from 'react';
import { css } from 'emotion';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Experience from './Experience';
import Contact from './Contact';
import About from './About';
import NotFound from './NotFound';

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

  '@media all and (min-width: 1280px)': {
    minHeight: '95vh',
    padding: '3em 17em',
    marginLeft: '22vh',
    width: '100%',
    fontSize: '1.2em'
  }
});

const Main = () => (  
    <main id="main" className={main}>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/experience" component={Experience}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/about" component={About}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </main>
  

)

export default Main;