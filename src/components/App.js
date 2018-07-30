import React, { Component } from 'react';
import { css } from 'emotion';
import Menu from './Menu';
import Footer from './Footer';
import { LanguageContext, languages } from './LanguageContext';
import Main from './Main';

const wrapper = css({
	height: '100vh'
});

const app = css({
	label: 'app',
	'@media all and (min-width: 2300px)': {
		fontSize: '1.6em'
	},

	'@media all and (min-width: 1690px) and (max-width: 2299px)': {
		fontSize: '1.1em'
	},

	'@media all and (min-width: 1280px) and (max-width: 1689px)': {
		position: 'relative',
		display: 'flex',
		fontSize: '1.1em'
	},

	'@media all and (min-width: 736px) and (max-width: 1279px)': {
		fontSize: '1.2em'
	}
});

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			language: 'en',
			langText: languages.en,
			toggleLanguage: this.toggleLanguage
		}
	}

	toggleLanguage = () => {
		let { language, langText } = this.state;
		language = language === 'en' ? 'es' : 'en';
		langText = languages[language];
		this.setState({ language, langText });
	}

	render() {
		return (
			<div id="wrapper" className={wrapper}>
				<LanguageContext.Provider value={this.state}>
					<div id="app" className={app}>
						<Menu />
						<Main />
					</div>
					<Footer />
				</LanguageContext.Provider></div>
		)
	}
}

export default App;
