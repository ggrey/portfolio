import React from 'react';
import '../css/Footer.css';

const Footer = () => (
  <footer className="footer">
    <section className="social">
      <a href="https://www.linkedin.com/in/georginagrey" className="linked-in" target="_blank" rel="noopener noreferrer"></a>
      <a href="https://github.com/ggrey" className="github" target="_blank" rel="noopener noreferrer"></a>
      <a href="https://open.spotify.com/user/georgina_grey" className="spotify" target="_blank" rel="noopener noreferrer"></a>
    </section>
    <p>&#169; {new Date().getFullYear()} Georgina Grey</p>
  </footer>
)

export default Footer;