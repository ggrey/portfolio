import React from 'react';
import { css } from 'emotion';

const main = css({
  label: 'skills',

  i: {
    marginRight: '3px'
  },

  '.stars i:nth-child(1)': {
    animation: 'jump 0.2s ease-in-out'
  },

  '.stars i:nth-child(2)': {
    animation: 'jump 0.4s ease-in-out'
  },

  '.stars i:nth-child(3)': {
    animation: 'jump 0.6s ease-in-out'
  },

  '.stars i:nth-child(4)': {
    animation: 'jump 0.8s ease-in-out'
  },

  '.stars i:nth-child(5)': {
    animation: 'jump 1s ease-in-out'
  },

  '.on': {
    color: 'yellow'
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

  '@keyframes jump': {
    '0%': {
      transform: 'translateY(-12px)'
    }
  },
});

const Skill = ({ skills }) => (
  <div className={main}>
    {
      skills.map((skill, i) =>
        <div className="skills" key={i}>
          <div className="title">
            <span>{skill.title}</span>
          </div>

          <div className="stars">
            {
              skill.stars.map((star, i) =>
                <i className={`fas fa-star ${star}`} key={i}></i>
              )
            }
          </div>
        </div>
      )
    }
  </div>

)

export default Skill;