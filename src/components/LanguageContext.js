import React from 'react';

export const languages = {
	en:
	{
		home: {
			intro: "Hi there! I'm a ",
			occupation: "Web Developer ",
			intro2: `based in San José, Costa Rica.\n\nI create Web Apps that are intuitive and work as expected, big deal huh? But I do have a knack for finding simple solutions to complex problems.\n\nMy goal is to write code that's `,
			intro3: "efficient, readable and tested.",
			details: "I design & code Web Apps"
		},
		experience: {
			intro: "  I started my career as a back-end developer, working with databases and architectural design. I've been part of small and large (distributed) teams, I understood how crucial documentation, version control, and team communication are in terms of having a sane workflow.\n\n  Today I'm working as a front-end developer and reaching a personal milestone, which is feeling confident in both sides of the spectrum to develop Web Apps from back to front.",
			quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
			title: "EXPERIENCE",
			backendDesc: "  Back-end development is my strongest suit. I've worked extensively in large-scale applications using .NET frameworks (C#, VB, Entity, Web API), SQL Server and Oracle. I have also worked with NodeJS integrating cloud storage from Amazon Web Services.\n\n  Architectural design is something I enjoy doing because is one of the most important and challenging stages. My short-term goal is to keep learning how to leverage cloud services platforms (like AWS) to enhance my development process.",
			frontendDesc: "  Front-end is where I've been focused for the last couple of years. Today I'm working as a front-end developer using HTML5, CSS3 and javascript on a daily basis.\n\n  I'm also working with ReactJS which has become one of my favorite tools in web development. In the near future, I'd like to take my JS and CSS3 skills to the next level while learning more about UI/UX and progressive web apps."
		},
		contact: {
			title: 'CONTACT',
			content: "  Do you have a cool project in mind or just want to get in touch? Shoot me a message filling the form below and I'll get back to you as soon as I can."
		},
		menu: {
			home: "The Home",
			experience: "Work work",
			contact: "Let's chat",
			about: "Know more"
		},
		notFound: {
			message: `The page you're looking for is not here`,
			link: 'Take me Home'
		},
		about: {			
			intro: `For the past 6+ years I've had the opportunity to work in design, development and implementation of software applications participating in every phase of the development life-cycle within distributed teams for clients from Costa Rica, Canada, United States and Sweden.\n\nC# is one of my favorite languages but on my never-ending list of stuff I want to learn, I'd like to add Go in the near future.\n\n My time as a solo developer allowed me to become very proficient and even resilient towards solving complex problems involving code and infrastructure.`,
		},
		social: "I'm on the internerd!"
	},
	es: {
		home: {
			intro: "¡Hola! Soy una ",
			occupation: "Desarrolladora Web Full-Stack ",
			intro2: "viviendo en San José, Costa Rica.\n\nMe esfuerzo por crear aplicaciones web que sean fáciles de usar y  funcionen según lo esperado, puede sonar obvio ¿eh? Pero tengo una habilidad especial para encontrar soluciones simples a problemas complejos.\n\nMe encanta traducir código a valor. Mi objetivo final es escribir programas que sean ",
			intro3: 'eficientes, legibles y probados.',
			details: "Diseño & programo Web Apps"
		},
		experience: {
			intro: '',
			title: "EXPERIENCIA",
			backendDesc: "He trabajado en aplicaciones de gran escala usando frameworks de .NET (C# & VB), SQL Server y Oracle. Empecé a aprender JS con NodeJS, que también me llevó a implementar algunas herramientas de AWS.\n\nMe enorgullezco de mi habilidad para resolver problemas complejos involucrando código e infrastructura, todo empezó durante mi primer trabajo como la única programadora, que me demandaba aprender nuevas habilidades, desarrollar y soportar sistemas con poca ayuda y supervisión.",
			frontendDesc: ``
		},
		contact: {
			title: 'CONTACTO',
			content: "¿Tenés algún proyecto cool en mente o solo querés ponerte en contacto? Envíame un mensaje llenando el formuario de abajo y te responderé lo más pronto posible."
		},
		menu: {
			home: "Inicio",
			experience: "Experiencia",
			contact: "Contacto",
			about: "Sobre mí"
		},
		notFound: {
			message: `La página que estás buscando no está aquí`,
			link: 'Llévame al Inicio'
		},
		about: {			
			intro: "",
		},
		social: "Estoy en el internerd!"
	}
}

export const LanguageContext = React.createContext({
	langText: languages.en,
	toggleLanguage: () => { }
});