import React, { Component } from 'react';
import { css } from 'emotion';
import { LanguageContext } from './LanguageContext';
import { color, yellow } from './Theme';
import Skill from './Skill';

const main = css({
	label: 'experience',
	display: 'flex',
	flexDirection: 'column',

	h2: {
		textAlign: 'center',
		color: color,
		margin: '1.5em 0 2em 0',
		letterSpacing: '0.2em'
	},

	'h2::before': {
		content: "''",
		display: 'block',
		width: '3em',
		borderTop: 'solid 1px',
		margin: '4em auto 1.5em auto'
	},

	blockquote: {
		fontSize: '0.9em',
		width: '100%',
		margin: '1em auto',
		fontStyle: 'italic',
		fontWeight: 'bold',
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

	ul: {
		listStyleType: 'none',
		padding: '0',
	},

	'.stack': {
		borderTop: `1px dashed ${yellow}`,
		borderBottom: `1px dashed ${yellow}`,
    boxShadow: `inset 0 -1px 0 0 ${yellow}, inset 0 1px 0 0 ${yellow}, 0 1px 0 0 ${yellow}, 0 -1px 0 0 ${yellow}`,
		padding: '0.5em 0',
		margin: '1.5em auto',
		background: '#0000002b'
	},

	'.stack span': {
		fontSize: '0.8em',
		margin: '0 0 0 1.5em',
		padding: '0'
	},

	'.resume-download': {
		position: 'fixed',
		right: '0.3em',
		bottom: '0.3em',
		color: color,

		svg: {
			height: '1.5em'
		},

		a: {
			display: 'flex',
			flexDirection: 'column',
			textDecoration: 'none',
			fontSize: '1em'
		}
	},

	'@media all and (min-width: 1690px)': {
		'.stack': { 
			width: '65%'
		},

		'.resume-download': {				
			right: '10em',
	
			svg: {
				height: '1.7em'
			}
		}
	},

	'@media all and (min-width: 1280px) and (max-width: 1689px)': {
		h2: {
			margin: '3em 0 1em 0',
			fontSize: '2em',
			letterSpacing: '0.2em'
		},

		'.stack': { 
			width: '65%'
		},

		'.resume-download': {				
			right: '10em',
		}		
	},

	'@media all and (min-width: 736px) and (max-width: 1279px)': {
		'.stack': { 
			width: '65%'
		},	
	}
});

class Experience extends Component {
	render() {
		const beSkills = [
			{
				title: '.NET',
				stars: ['on', 'on', 'on', 'on', 'off']
			},
			{
				title: 'NodeJS',
				stars: ['on', 'on', 'on', 'off', 'off']
			},
			{
				title: 'SQL Server',
				stars: ['on', 'on', 'on', 'on', 'off']
			},
			{
				title: 'Oracle',
				stars: ['on', 'on', 'on', 'off', 'off']
			},			
			{
				title: 'AWS',
				stars: ['on', 'on', 'off', 'off', 'off']
			},
		]

		const feSkills = [
			{
				title: 'HTML 5',
				stars: ['on', 'on', 'on', 'on', 'off']
			},
			{
				title: 'CSS 3',
				stars: ['on', 'on', 'on', 'off', 'off']
			},
			{
				title: 'Javascript',
				stars: ['on', 'on', 'on', 'on', 'off']
			},
			{
				title: 'ReactJS',
				stars: ['on', 'on', 'on', 'off', 'off']
			}
		]
		return (
			<section id="experience" className={main} >
				<div className="resume-download">
					<a href="https://s3.amazonaws.com/georginagrey-util/Georgina+Grey+-+Web+Dev.pdf" target="_blank" rel="noopener noreferrer">
						<span>PDF</span>
						<svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm76.45 211.36l-96.42 95.7c-6.65 6.61-17.39 6.61-24.04 0l-96.42-95.7C73.42 337.29 80.54 320 94.82 320H160v-80c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v80h65.18c14.28 0 21.4 17.29 11.27 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"></path></svg>
					</a>					
				</div>
				<LanguageContext.Consumer>
					{({ langText }) => (
						<section className="experience-content">
							<blockquote >{langText.experience.quote}<span>Patrick McKenzie</span></blockquote>						
							<p>{langText.experience.intro}</p>
							
							<h2 className="backend">BACK-END</h2>
							<p>{langText.experience.backendDesc}</p>							
							<section className="stack">								
								<Skill skills={beSkills} side="be" />
							</section>

							<h2 className="frontend">FRONT-END</h2>
							<p>{langText.experience.frontendDesc}</p>							
							<section className="stack">
								<Skill skills={feSkills} side="fe" />
							</section>			

							<p>
								{langText.experience.more}
								<a href="https://www.linkedin.com/in/georginagrey" target="_blank" rel="noopener noreferrer">{langText.misc.here}.</a>
							</p>				
						</section>
					)}
				</LanguageContext.Consumer>
			</section>
		)
	}
}

export default Experience;