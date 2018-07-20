import React, { Component } from 'react';
import { css } from 'emotion';
import { yellow } from './Theme';

const main = css({
  label: 'skills',

  svg: {
    marginRight: '3px',
    height: '0.9em'
  },

  '.on': {
    color: yellow
  },

  '.off': {
    color: '#808080'
  },

  '.skills': {
    display: 'flex',
    width: '90%',
    margin: '0.5em auto',
    background: '#0000001c'
  },

  '.title': {
    width: '35%'
  },

  span: {
    fontWeight: 'bold'
  },

  '.stars': {
    flexGrow: '1',
    textAlign: 'end'
  },

  '.jump1': {
    animation: 'jump 0.2s ease-in-out'
  },

  '.jump2': {
    animation: 'jump 0.4s ease-in-out'
  },

  '.jump3': {
    animation: 'jump 0.6s ease-in-out'
  },

  '.jump4': {
    animation: 'jump 0.8s ease-in-out'
  },

  '.jump5': {
    animation: 'jump 1s ease-in-out'
  },

  '@keyframes jump': {
    '0%': {
      transform: 'translateY(-12px)'
    }
  },

});

class Skill extends Component {
  state = {
    animations: [],
    animationsArray: []
  }

  loadAnimationsState() {
    let { animationsArray } = this.state;
    this.setState({animations: animationsArray });

    setTimeout(() => {
     animationsArray = [];
     this.setState({animations: animationsArray });
    }, 2000);
  }

  loadAnimationsArray() {
    const { skills } = this.props;
    let { animationsArray } = this.state;

    skills.map((skill) => {
      skill.stars.map((star, i) => {
        animationsArray.push(`jump${i + 1}`);
      });
    });
  }

  componentDidMount() {
    this.observe();
  }

  observe() {
    var options = {
      threshold: [0.5]
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          this.loadAnimationsState();
        }
      });
    }, options);

    const sb = document.querySelectorAll('#skills-box')[0];
    observer.observe(sb);
  }

  componentWillMount() {
    this.loadAnimationsArray();
  }

  render() {
    const { skills } = this.props;

    return (
      <div className={main} id="skills-box">
        {
          skills.map((skill, i) =>
            <div className="skills" key={i}>
              <div className="title">
                <span>{skill.title}</span>
              </div>

              <div className="stars">
                {
                  skill.stars.map((star, i) =>
                    <React.Fragment key={i}><svg viewBox="0 0 576 512" className={`star ${this.state.animations[i] || ''} ${star}`}><path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg></React.Fragment>
                  )
                }
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

export default Skill;