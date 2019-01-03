import React, { Component } from 'react';
import { css } from 'emotion';
import { color } from './Theme';

const main = css({
  label: 'sample',
  display: 'flex',
  justifyContent: 'center',
  cursor: 'pointer',

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
    height: '80vh'
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
    border: '2px solid #32678b',
    fontSize: '0.9em'
  },

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },

  h3: {
    color: '#333',
    // textTransform: 'uppercase',
    letterSpacing: '2px',
    textDecoration: 'underline solid',
    textDecorationSkipInk: 'none'
  },

  '@media all and (min-width: 1280px)': {
    '.flip-container, .front, .back': {
      width: '20vw',
      height: '70vh'
    },

    p: {
      fontSize: '0.8em'
    }
  },

  '@media all and (min-width: 736px) and (max-width: 1279px)': {
    '.flip-container, .front, .back': {
      width: '35vw',
      height: '70vh'
    },
  }
});

class Sample extends Component {
  state = {
    flip: false
  }

  flip = () => {
    this.setState({ flip: !this.state.flip });
  }

  render() {
    return (
      <section className={main}>
        <div className={this.state.flip ? 'flip-container flip' : 'flip-container unflip'} onClick={this.flip}>
          <div className="flipper">
            <div className="front">
              {this.props.children}
              <a href={this.props.url} target="_blank" rel="noopener noreferrer">
                <h3>{this.props.frontText}</h3>
              </a>
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