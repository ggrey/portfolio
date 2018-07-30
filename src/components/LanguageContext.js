import React from 'react';

export const languages = {
	en:
	{
		home: {
			intro: "Hi there! I'm a ",
			occupation: "Web Developer ",
			intro2: `based in San José, Costa Rica.\n\nI create Web Apps that are intuitive and work as expected, big deal huh? But I do have a knack for finding simple solutions to complex problems.\n\nMy goal is to write programs that are `,
			intro3: "efficient, readable ",
			intro4: "and ",
			intro5: "tested.",
			details: "I design & code Web Apps"
		},
		experience: {
			intro: "  I started my career as a back-end developer, working with databases and architectural design. I've been part of small and large (distributed) teams, I understood how crucial documentation, version control, and effective team communication are in terms of having a sane workflow.\n\n  Today I'm working as a front-end developer and reaching a personal milestone, which is feeling confident in both sides of the spectrum to develop Web Apps from back to front.",
			quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
			title: "EXPERIENCE",
			backendDesc: "  Back-end development is my strongest suit. I've worked extensively in large-scale applications using .NET frameworks (C#, VB, Entity, Web API), SQL Server and Oracle. I have also worked with NodeJS integrating cloud storage from Amazon Web Services.\n\n  Architectural design is something I enjoy doing because is one of the most important and challenging stages. My short-term goal is to keep learning how to leverage cloud services platforms (like AWS) to enhance my development process.",
			frontendDesc: "  Front-end is where I've been focused for the last couple of years. Today I'm working in this area using HTML5, CSS3 and Javascript on a daily basis.\n\n  I'm also working with ReactJS which has become one of my favorite tools in web development. In the near future, I'd like to take my JS and CSS3 skills to the next level while learning more about UI/UX and progressive web apps.",
			more: "  If I didn't bore you to death at this point and want to know more details about my previous experience, check my Linked In profile "
		},
		contact: {
			title: 'CONTACT',
			content: "  Do you have a project you'd want me to jump in or want to get in touch? Shoot me a message filling the form below and I'll get back to you as soon as I can.",
			name: "Name",
			subject: "Subject",
			message: "Message",
			required: "required",
			submit: "Submit"
		},
		menu: {
			home: "Home",
			experience: "Experience",
			contact: "Let's talk",
			projects: "Projects"
		},
		notFound: {
			message: "The page you're looking for is not here",
			link: "Take me Home"
		},
		projects: {			
			intro: "  Here's where I'll showcase my projects, soon I'll be adding more examples of my work (pinky promise). Click on each card to flip it!",
			portfolio: "  This is a multi-language website (the language switcher is in the center of the footer) built with ReactJS and Google's Firebase database.\n\n  It is hosted and served by Amazon Web Services infrastructure, the code is published on a S3 bucket and is served faster in America and Europe by CloudFront, which is a content delivery network that greatly improves the website's load time and security.",
			devto: "  I published a post on dev.to explaining a bit how I built this website, if you are curious check it out "
		},
		misc: {
			here: "here"
		}
	},
	es: {
		home: {
			intro: "¡Hola! Soy una ",
			occupation: "Desarrolladora Web ",
			intro2: "viviendo en San José, Costa Rica.\n\nCreo Aplicaciones Web intuitivas y que funcionan según lo esperado, gran cosa ¿no? Pero tengo una habilidad especial para encontrar soluciones sencillas a problemas complejos.\n\nMi objetivo final es escribir programas que sean ",
			intro3: 'eficientes, legibles ',
			intro4: "y ",
			intro5: "probados.",
			details: "Diseño & programo Web Apps"
		},
		experience: {
			intro: "  Empecé mi carrera como desarrolladora back-end, trabajando en bases de datos y diseño de arquitectura. He sido parte de equipos pequeños y grandes (distribuidos), ahí entendí lo crucial que resultan la documentación, versionamiento y la comunicación efectiva del equipo en pos de mantener flujos de trabajos sanos.\n\n Actualmente estoy trabajando como desarrolladora front-end y alcanzando una meta personal, la cual es sentirme cómoda en ambos lados del espectro para desarrollar aplicaciones desde cualquiera de sus frentes.",
			quote: "Todo gran desarrollador que conozcas llegó ahí resolviendo problemas que no estaba cualificado para resolver hasta que finalmente lo hizo.",
			title: "EXPERIENCIA",
			backendDesc: "  El desarrollo back-end es mi fuerte. He trabajado extensamente en aplicaciones a gran escala usando frameworks de .NET (C#, VB, Entity, Web API), SQL Server y Oracle. También trabajé con NodeJS intrgrando almacenamiento en la nube de Amazon Web Services.\n\n  El diseño de arquitectura es algo que disfruto mucho porque es una de las etapas más importantes y desafiantes. Mi meta a corto plazo es seguir aprendiendo sobre servicios en la nube (como AWS) para mejorar mi proceso de desarrollo.",
			frontendDesc: "  En la parte front-end es donde he estado enfocada durante el último par de años. Actualmente estoy trabajando en esta área usando HTML5, CSS3 y Javascript diariamente.\n\n  También estoy trabajando con ReactJS, la cual se ha convertido en una de mis herramientas preferidas en el desarrollo web. En un futuro cercano quiero llevar mis habilidades en CSS3 y Javascript al siguiente nivel mientras aprendo más sobre UI/UX y aplicaciones web progresivas.",
			more: "  Si a este punto no le maté de aburrimiento y quiere saber más detalles sobre mi experiencia anterior, visite mi perfil de Linked In "
		},
		contact: {
			title: 'CONTACTO',
			content: "¿Tiene algún proyecto en el que le gustaría que participe o quiere ponerse en contacto? Envíeme un mensaje llenando el formuario de abajo y te responderé lo más pronto posible.",
			name: "Nombre",
			subject: "Asunto",
			message: "Mensaje",
			required: "requerido",
			submit: "Enviar"
		},
		menu: {
			home: "Inicio",
			experience: "Experiencia",
			contact: "Hablemos",
			projects: "Proyectos"
		},
		notFound: {
			message: "La página que estás buscando no está aquí",
			link: "Llévame al Inicio"
		},
		projects: {			
			intro: "  Aquí mostraré mis proyectos, pronto agregaré más ejemplos de mi trabajo (prometido). Dale clic a cada tarjeta para girarla!",
			portfolio: "  Este es un sitio multi-lenguage (el switch de lenguage está en el centro del pie de página) creado con ReactJS y Firebase una base de datos de Google.\n\n  Es alojado y servido en la infraestructura de Amazon Web Services, el código está publicado en un balde S3 y es servido con más rapidez en América y Europa por CloudFront, la cual es una red de distribución de contenido que mejora muchísimo la velocidad de carga y la seguridad del sitio.",
			devto: "  He publicado una entrada en dev.to en donde explico un poco el proceso de cómo creé este sitio, si te da curiosidad míralo "
		},
		misc: {
			here: "aquí"
		}
	}
}

export const LanguageContext = React.createContext({
	langText: languages.en,
	toggleLanguage: () => { }
});