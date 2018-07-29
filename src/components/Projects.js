import React, { Component } from 'react';
import { css } from 'emotion';
import { LanguageContext } from './LanguageContext';
import Sample from './Sample';

const main = css({
  label: 'samples',

  '.box': {
    display: 'flex',
    width: '100%',
    padding: '0.07em',
    backgroundImage: 'linear-gradient(90deg, #F95151, #8678DD)',
    boxShadow: '0 0 0.1em 0 #000000',
    zIndex: '10',
  },

  ul: {
    display: 'flex',
    justifyContent: 'space-evenly',
    listStyleType: 'none',
    padding: '0',
    width: '100%',
    flexWrap: 'wrap',
  },

  'ul li': {
    alignSelf: 'center',
    textAlign: 'center',
    margin: '0',
    padding: '1em 0',
    width: '33.1%',
    cursor: 'pointer',

    ':nth-child(odd)': {
      background: '#141E30'
    },

    ':nth-child(even)': {
      background: '#202d44'
    },
  }
});

const images = [
  {
    datasrc: 'https://res.cloudinary.com/georginagrey/image/upload/v1532709273/portfolio/portfolio.jpg',
    src:  'https://res.cloudinary.com/georginagrey/image/upload/c_scale,h_12,w_12/v1532709273/portfolio/portfolio.jpg'
  }
]

class Proyects extends Component {

  componentDidMount() {
    this.observe();
  }

  observe() {
    var options = {
      threshold: [0.1]
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          const image = entry.target;
          const src = image.dataset.src;

          this.fetchImage(src).then(() => {
            image.src = src;
          });
        }
      });
    }, options);

    const images = document.querySelectorAll('img');
    images.forEach(i => observer.observe(i));
  }

  fetchImage = (src) => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = src;
      image.onload = resolve;
      image.onerror = reject;
    });
  }

  render() {
    return (
      <div id="samples" className={main}>
        <LanguageContext.Consumer>
          {({ langText }) => (
            <section>
              <p>{langText.projects.intro}</p>
              <Sample frontText='Portfolio' backText={langText.projects.portfolio}>
                <img
                  data-src={images[0].datasrc}
                  src={images[0].src}
                  alt="portfolio" 
                />
              </Sample>
            </section>
          )}
        </LanguageContext.Consumer>
      </div>
    )
  }
}

export default Proyects;