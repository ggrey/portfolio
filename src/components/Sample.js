import React, { Component } from 'react';
import { css } from 'emotion';
import { color } from './Theme';

const main = css({
  label: 'sample',
  display: 'flex',
  justifyContent: 'center',

  '.flip-container': {
    perspective: '1000px'
  },

  '.flip-container .flipper, .flipper, .flip-container.flip .flipper': {
    transform: 'rotateY(180deg)',
  },

  '.flip-container .flipper, .flipper, .flip-container.unflip .flipper': {
    transform: 'rotateY(0deg)',
  },

  '.flip-container, .front, .back': {
    width: '90vw',
    height: '25em'
  },

  '.flipper': {
    transition: '0.6s',
    transformStyle: 'preserve-3d',

    position: 'relative',
  },

  '.front, .back': {
    backfaceVisibility: 'hidden',
    padding: '0.1em 0.1em 4em',

    position: 'absolute',
    top: '0',
    left: '0',
  },

  '.front': {
    zIndex: '2',
    transform: 'rotateY(0deg)',
    background: color,
    textAlign: 'center',
  },

  '.back': {
    transform: 'rotateY(180deg)',
    background: '#333',
    padding: '0 0.5em',
    border: '2px solid #32678b'
  },

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },

  h2: {
    color: '#333',
    textTransform: 'uppercase',
    letterSpacing: '3px'
  },

  '@media all and (min-width: 1280px)': {
    '.flip-container, .front, .back': {
      width: '20vw',
    },

    p: {
      fontSize: '0.8em'
    }
  },

  '@media all and (min-width: 736px) and (max-width: 1279px)': {
    '.flip-container, .front, .back': {
      width: '35vw',
    },
  }
});

class Sample extends Component {
  state = {
    flip: false
  }

  flip = () => {
    this.setState({ flip: !this.state.flip});
  }

  render() {
    return (
      <section className={main}>
        <div className={this.state.flip ? 'flip-container flip' : 'flip-container unflip'} onClick={this.flip}>
          <div className="flipper">
            <div className="front">
              {this.props.children}
              <h2>{this.props.frontText}</h2>
            </div>
            <div className="back">
              <p>{this.props.backText}</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Sample;