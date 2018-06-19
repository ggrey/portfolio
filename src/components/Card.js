import React from 'react';
import PropTypes from "prop-types";
import '../css/Card.css';

const Card = ({ frontTitle, backText, backgroundColor, icons }) => (
  <label className="card-container">
    <input type="checkbox" />
    <div className="card">
      <div className="front" style={{ background: backgroundColor }}>{frontTitle}</div>
      <div className="back">
        <p>{backText}</p>
        <ul className="dev-icons">
          {
            icons.map((img, i) => <li key={i}><i className={`${img} dev-icon`}></i></li>)
          }
        </ul>
      </div>
    </div>
  </label >
);

Card.propTypes = {
  frontTitle: PropTypes.string.isRequired,
  backText: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  icons: PropTypes.array.isRequired
};

export default Card;