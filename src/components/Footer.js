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
	},

	'.linked-in::after, .github::after, .spotify::after, .mail::after': {
		content: "'\f0e1'",
		fontFamily: 'FontAwesome',
		color: '#fff',
		fontSize: '1.5em',
		marginLeft: '0.5em'
	},

	'.linked-in::after': {
		marginLeft: '0'
	},

	'.github::after': {
		content: "'\f113'"
	},

	'.spotify::after': {
		content: "'\f1bc'"
	},

	'.mail::after': {
		content: "'\f1fa'"
	},

	'@media all and (min-width: 1280px)': {
		height: '5vh',
		fontSize: '1em',
		marginLeft: '22vh',

		'.linked-in::after, .github::after, .spotify::after, .mail::after': {
			marginLeft: '1em'
		}
	}
});

const Footer = (props) => (
	<footer className={main}>
		<section className="social">
			<a href="https://www.linkedin.com/in/georginagrey" className="linked-in" target="_blank" rel="noopener noreferrer"></a>
			<a href="https://github.com/ggrey" className="github" target="_blank" rel="noopener noreferrer"></a>
			<a href="https://open.spotify.com/user/georgina_grey" className="spotify" target="_blank" rel="noopener noreferrer"></a>
			<a href="mailto:ggreype@gmail.com" className="mail" target="_top" rel="noopener noreferrer"></a>
		</section>
		<LanguagePicker {...props} />
		<p>&copy;Georgina Grey {new Date().getFullYear()}</p>
	</footer>
)

export default Footer;