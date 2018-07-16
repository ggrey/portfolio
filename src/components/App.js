import React, { Component } from 'react';
import { css } from 'emotion';
import Menu from './Menu';
import Footer from './Footer';
import { LanguageContext, languages } from './LanguageContext';
import Main from './Main';

const app = css({
	'@media all and (min-width: 1280px)': {
		label: 'app',
		position: 'relative',
		display: 'flex',
		fontSize: '1.15em'
  }
});

class App extends Component {
	state = {
		language: 'en',
		langText: languages.en,
		toggleLanguage: this.toggleLanguage
	}

	toggleLanguage = () => {
		let { language, langText } = this.state;
		language = language === 'en' ? 'es' : 'en';
		langText = languages[language];
		this.setState({ language, langText });
	}

	render() {
		return (
			<LanguageContext.Provider value={this.state}>
				<div id="app" className={app}>
					<Menu />
					<Main {...this.state} />
				</div>
				<Footer
					toggleLanguage={this.toggleLanguage}
					langText={this.state.language}/>
			</LanguageContext.Provider>
		)
	}
}

export default App;
