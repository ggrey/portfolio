import React from 'react';
import { css } from 'emotion';
import LanguagePicker from './LanguagePicker';

const main = css({
	label: 'footer',
	display: 'flex',
	justifyContent: 'space-evenly',
	alignItems: 'center',
	color: '#fff',
	textAlign: 'end',
	fontSize: '0.8em',
	borderTop: '1px solid #3c759b',
	fontFamily: "'Poiret One', 'sans-serif'",

	p: {
		fontSize: '1em',
		fontWeight: 'bold'
	},

	a: {
		textDecoration: 'none',
		color: '#fff'
	},

	'a:hover': {
		color: '#efefef'
	},

	'.icon': {
		height: '1.5em',
		marginLeft: '1em'
	},

	'@media all and (min-width: 2500px)': {
    fontSize: '1.5em'
  },

  '@media all and (min-width: 1690px) and (max-width: 2499px)': {
      fontSize: '1em'
  },

	'@media all and (min-width: 1280px) and (max-width: 1689px)': {
		height: '5vh',
		fontSize: '1em',
		marginLeft: '22vh',

		'.icon': {
			marginLeft: '1.5em'
		}
	}
});

const Footer = () => (
	<footer className={main}>
		<section className="social">
			<a href="https://www.linkedin.com/in/georginagrey" target="_blank" rel="noopener noreferrer">
				<svg className="icon" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
			</a>
			<a href="https://github.com/ggrey" target="_blank" rel="noopener noreferrer">
				<svg className="icon" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
			</a>
			<a href="https://dev.to/georginagrey" target="_blank" rel="noopener noreferrer">				
				<svg className="icon" xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 408 410"><path fill="currentColor" d="M10.5 2.5C5.6 4.2 2.4 7.8 1 12.9.3 15.6.1 77.2.2 207.1.5 396.6.5 397.5 2.5 401c1.2 1.9 3.6 4.3 5.5 5.5 3.5 2 4.2 2 196 2s192.5 0 196-2c1.9-1.2 4.3-3.6 5.5-5.5 2-3.5 2-4.2 2-196s0-192.5-2-196c-1.2-1.9-3.6-4.3-5.5-5.5-3.5-2-4.4-2-194.5-2.2-162.9-.2-191.6 0-195 1.2zm96.8 124c9 1.9 15.5 5.6 22.2 12.6 6.1 6.4 9.9 13.7 11.5 21.9 1.3 6.9 1.3 81.1 0 88.1-3.4 18.2-18.9 32.4-38.1 34.9-4 .5-17.4 1-29.6 1H51V125h24.8c17.6 0 26.6.4 31.5 1.5zm130.7 13V154h-51v36h31v29h-31l.2 18.2.3 18.3 25.3.3 25.2.2v29h-29.5c-32.8 0-37.9-.6-43.1-5.2-7.3-6.4-6.9-2.3-7.2-72.6-.2-43.8.1-64.5.8-67.3 1.4-5.2 7.3-11.6 12.5-13.4 3.1-1.1 10.9-1.4 35.3-1.5H238v14.5zm48.9-12.3c.4 1.3 6.8 25.6 14.2 54 7.4 28.5 13.6 51.2 13.8 50.5.3-.7 6.6-24.8 14.1-53.7l13.7-52.5 15.6-.3c11.8-.2 15.7.1 15.7 1s-34.6 132.4-36.6 139c-1.4 4.6-8.9 14-13.1 16.5-5.3 3-13.1 3.5-17.9 1-4.3-2.2-10-8.8-12.9-15-1.8-3.8-31.2-112-38-140l-.7-2.7h15.6c15.3 0 15.7 0 16.5 2.2z"/><path fill="currentColor" d="M80 205v51.2l10.3-.4c8.9-.3 10.8-.7 14.8-3 7.8-4.6 7.9-4.9 7.9-48.4 0-42.4 0-42.4-7.3-47.2-3.6-2.4-5.1-2.7-14.9-3.1l-10.8-.3V205z"/></svg>
			</a>
			<a href="mailto:ggreype@gmail.com" target="_top" rel="noopener noreferrer">
				<svg className="icon" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>
			</a>
		</section>
		<LanguagePicker/>
		<p>&copy;Grey {new Date().getFullYear()}</p>
	</footer>
)

export default Footer;