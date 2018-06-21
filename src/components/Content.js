import React, { Component } from 'react';
import Card from './Card';
import '../css/Content.css';
import { LanguageContext } from './LanguageContext';

class Content extends Component {
  render() {
    return (
      <section id="experience" className="content" >
        <LanguageContext.Consumer>
          {({ langText }) => (
            <section className="experience-content">
              <div className="title">{langText.experience.title}</div>
              <section className="experience-wrapper">
                <p>{langText.experience.intro}</p>
                <div className="skills">
                  <Card
                    frontTitle={langText.experience.cardBackend}
                    backText={langText.experience.backendDesc}
                    backgroundColor="#8678DD"
                    icons={['devicon-csharp-plain', 'devicon-nodejs-plain', 'fas fa-database', 'fab fa-aws']}
                  />
                  <Card
                    frontTitle={langText.experience.cardFrontend}
                    backText={langText.experience.frontendDesc}
                    backgroundColor="#83D45A"
                    icons={['devicon-html5-plain', 'devicon-css3-plain', 'devicon-javascript-plain', 'devicon-react-original']}
                  />
                </div>
              </section>
            </section>
          )}
        </LanguageContext.Consumer>
      </section>
    )
  }
}

export default Content;