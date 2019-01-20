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
    
    fontSize: '1.8em',
    textAlign: 'center'
  },

  'h1::before': {
    content: "''",
    display: 'block',
    width: '100%',
    borderTop: 'solid 1px',
    margin: '2em auto 1.5em auto'
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

  '.header': {
    background: '#3A3838',
    paddingBottom: '1em'
  },

  '.caf': {
    textAlign: 'center'
  },

  '.img-holder': {
    width: '100%',
    background: 'rgb(0,0,0,.2)',
    border: `1px solid ${color}`,

    '& img': {
      padding: '1em',
      width: '100%'
    }
  },

  '.caf-url': {
    textAlign: 'center'
  },

  h5: {
    background: color,
    color: '#000',
    textAlign: 'center',
    margin: 0
  },

  p: {
    padding: '1.5em'
  },

  blockquote: {
		fontSize: '0.9em',
		width: '100%',
		margin: '1em auto',
		fontStyle: 'italic',
		fontWeight: '500',
		padding: '0.5em 1.2em 0',
		borderLeft: `2px solid ${color}`,
		position: 'relative'
	},

	'blockquote::before': {
		fontFamily: 'Arial',
		content: "'\\201C'",
		color: color,
		fontSize: '2.3em',
		position: 'absolute',
		left: '2px',
		top: '0px'
	},

	'blockquote span': {
		display: 'block',
		fontStyle: 'normal',
		marginTop: '1em',
		fontWeight: 'normal'
  },
  
  '.testimonial': {
    padding: '2em',
    h2: {
      textAlign: 'center',
      color: color,
      textTransform: 'uppercase',
      letterSpacing: 2,
    }
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
              <div className="header">
                <h1>Chicas al Frente</h1>
                <div className="caf-url">
                  <a href="https://chicasalfrente.com" target="_blank" rel="noopener noreferrer">www.chicasalfrente.com</a>
                </div>
                <br />
                <div className="caf">
                  <span>{langText.projects.caf.about}</span>
                </div>
              </div>
              <p>{langText.projects.caf.refAbout}</p>
              <div className="img-holder">
                <a href={images[2].datasrc} target="_blank" rel="noopener noreferrer">
                  <img
                    data-src={images[2].datasrc}
                    src={images[2].src}
                    alt="www.chicasalfrente.com"
                  />
                </a>
              </div>
              <h5>{langText.projects.caf.home}</h5>
              <p>{langText.projects.caf.desc}</p>
              <div className="img-holder">
                <a href={images[0].datasrc} target="_blank" rel="noopener noreferrer">
                  <img
                    data-src={images[0].datasrc}
                    src={images[0].src}
                    alt="www.chicasalfrente.com"
                  />
                </a>
              </div>
              <h5>{langText.projects.caf.ref}</h5>
              <div className="testimonial">
                <h2>{langText.misc.testimonial}</h2>
                <blockquote>{langText.projects.caf.testimonial}<span>Rocío Jiménez</span></blockquote>
              </div>
              <div>Blog post: <a href="https://dev.to/georginagrey/how-i-leveraged-jamstack-to-cut-down-costs-for-a-nonprofit-76f" target="_blank" rel="noopener noreferrer">{langText.projects.caf.devto}</a></div>

              <div className="header">
                <h1>Portfolio</h1>
                <div className="caf-url">
                  <a href="https://georginagrey.com" target="_blank" rel="noopener noreferrer">www.georginagrey.com</a>
                </div>
              </div>
              <p>
                {langText.projects.portfolio}
                <br /><br />
                {langText.projects.devto}
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