import React, { Component } from 'react';
import { css } from 'emotion';
import { LanguageContext } from './LanguageContext';
import { supportsIntersectionObserver } from '../util';
import { color } from './Theme';

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

  'h1': {
    color: color,
    textTransform: 'uppercase',
    letterSpacing: 2,
    fontSize: '1.8em',
    textAlign: 'center'
  },

  'h1::before': {
    content: "''",
    display: 'block',
    width: '6em',
    borderTop: 'solid 1px',
    margin: '2em auto 1.5em auto'
  },

  h5: {
    textAlign: 'center',
    margin: 0
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
  },

  '.caf': {
    display: 'flex',
    alignItems: 'center',

    img: {
      width: 150,
      height: 150
    }
  },

  '.img-holder': {
    width: '100%',
    '& img': {
      width: '100%'
    }
  },

  '.caf-url': {
    textAlign: 'center'
  }
});

const images = [
  {
    datasrc: 'https://res.cloudinary.com/georginagrey/image/upload/v1547005090/ref1.jpg',
    src: 'https://res.cloudinary.com/georginagrey/image/upload/c_scale,h_12,w_12/v1547005090/ref1.png'
  },
  {
    datasrc: 'https://res.cloudinary.com/georginagrey/image/upload/w_150,h_150/v1547003490/caf_logo_circle.png',
    src: 'https://res.cloudinary.com/georginagrey/image/upload/c_scale,h_12,w_12/v1547003490/caf_logo_circle.png'
  },
  {
    datasrc: 'https://res.cloudinary.com/georginagrey/image/upload/v1547005915/ref2.png',
    src: 'https://res.cloudinary.com/georginagrey/image/upload/c_scale,h_12,w_12/v1547005915/ref2.png'
  }
]

class Projects extends Component {

  componentDidMount() {
    if (supportsIntersectionObserver()) {
      this.observe();
    } else {
      const images = Array.from(document.querySelectorAll('img'));
      images.forEach(img => img.src = img.dataset.src);
    }
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
              {/* <p>{langText.projects.intro}</p> */}
              <h1>Chicas al Frente</h1>
              <div className="caf-url">
                <a href="https://chicasalfrente.com" target="_blank" rel="noopener noreferrer">www.chicasalfrente.com</a>              
              </div>              
              <div className="caf">
                <img
                  data-src={images[1].datasrc}
                  src={images[1].src}
                  alt="www.chicasalfrente.com"
                />
                <h4>{langText.projects.caf.about}</h4>
              </div>
              <p>{langText.projects.caf.role}</p>
              <div className="img-holder">
                <a href={images[2].datasrc} target="_blank" rel="noopener noreferrer">
                  <img
                    data-src={images[2].datasrc}
                    src={images[2].src}
                    alt="www.chicasalfrente.com"
                  />
                </a>
              </div>
              <h5>Home Page</h5>
              <p>{langText.projects.caf.ref}</p>              
              <div className="img-holder">
                <a href={images[0].datasrc} target="_blank" rel="noopener noreferrer">
                  <img
                    data-src={images[0].datasrc}
                    src={images[0].src}
                    alt="www.chicasalfrente.com"
                  />
                </a>
              </div>
              <h5>Economic Feminist Network</h5>
              <p>{langText.projects.caf.desc}</p>

              <h1>Portfolio</h1>
              <p>
                {langText.projects.portfolio}
              </p>
              <p>{langText.projects.devto}
                <a href="https://dev.to/georginagrey/my-first-portfolio-with-react-and-aws-2g73" target="_blank" rel="noopener noreferrer">{langText.misc.here}.</a>
              </p>

            </section>
          )}
        </LanguageContext.Consumer>
      </div>
    )
  }
}

export default Projects;