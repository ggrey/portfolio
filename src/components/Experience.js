import React, { Component } from 'react';
import { css } from 'emotion';
import { LanguageContext } from './LanguageContext';
import { color, yellow } from './Theme';
import Skill from './Skill';

const main = css({
	label: 'experience',
	display: 'flex',
	flexDirection: 'column',

	'.border': {
		borderBottom: '0.05em solid',
		borderTop: '0.05em solid',
		borderImageSource: 'linear-gradient(90deg, #F95151 0%, #F9E35F 24%, #83D45A 49%, #62AFDF 74%, #8678DD 100%)',
		borderImageSlice: '20',
	},

	h2: {
		textAlign: 'center',
		color: color,
		margin: '1.5em 0 2em 0',
		letterSpacing: '0.2em'
	},

	'h2::before': {
		content: "''",
		display: 'block',
		width: '2em',
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

	'.line': {
		borderTop: `1px solid ${color}`,
		borderRadius: '5px',
		width: '5em',
		margin: '4em auto 0 auto'
	},

	'@media all and (min-width: 1280px)': {
		h2: {
			margin: '3em 0 1em 0',
			fontSize: '2em',
			letterSpacing: '0.2em'
		},

		'.stack': { 
			width: '65%'
		}
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
						</section>
					)}
				</LanguageContext.Consumer>
			</section>
		)
	}
}

export default Experience;