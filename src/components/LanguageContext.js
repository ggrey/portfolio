import React from 'react';

export const languages = {
	en:
	{
		home: {
			intro: "Welcome to my website!\n\nI'm a ",
			occupation: "Web Developer",
			intro2: " with 7+ years of experience focused on making Web Applications that load fast, look good and are easy to use.",
			q1: "Do you need to promote your brand or small shop?",
			a1: "\nA static website might do the trick. Quick and affordable development.",
			q2: "Are you looking to take your business to the next level?",
			a2: "\nI can design a custom web solution tailored to fit your business requirements.",
			q3: "Is your team of developers in need of an extra hand?",
			a3: "\nI've worked with distributed teams across America and Europe, check out my experience & skills.",
			details: "I design & code Web Apps"
		},
		experience: {
			intro: " I started my career as a back-end developer, working with databases and architectural design. I've been part of small and large (distributed) teams, I understood how crucial documentation, version control, and effective team communication are in terms of having a sane workflow.\n\n Today I'm working as a front-end developer and reaching a personal milestone, which is feeling confident in both sides of the spectrum to develop Web Apps from back to front.",
			quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
			title: "EXPERIENCE",
			backendDesc: " I've worked extensively in large-scale applications using .NET frameworks (C#, VB, Entity, Web API), SQL Server and Oracle. I have also worked with NodeJS integrating cloud storage from Amazon Web Services.\n\n Architectural design is something I enjoy doing because is one of the most important and challenging stages. My short-term goal is to keep learning how to leverage cloud services platforms to enhance my development process. Serverless and micro-services? I'm in!",
			frontendDesc: " Front-end is where I've been focused for the last couple of years. Today I'm working in this area using HTML5, CSS3, Javascript, on a daily basis.\n\n I'm also working with Angular and ReactJS, which has become one of my favorite tools in web development",
			more: " If I didn't bore you to death at this point and want to know more details about my previous experience, check my Linked In profile ",
			resume: " or you can download my resume "
		},
		contact: {
			title: 'CONTACT',
			content: " Do you have a project you'd want me to jump in or want to get in touch? Shoot me a message filling the form below and I'll get back to you as soon as I can.",
			name: "Name",
			subject: "Subject",
			message: "Message",
			required: "required",
			submit: "Send Message"
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
			intro: " Here's where I'll showcase my projects. Click on each card to know more about the project.",
			portfolio: "No pics for this one because you're on it! I decided to add it here because it was fun to build, learned a few new tricks and wrote a blog post about it. Is a multi-language website (the language switcher is in the center of the footer) built with ReactJS, AWS and Google's Firebase database.\n\nIt is hosted and served by Amazon Web Services infrastructure, the code is published on a S3 bucket and is served faster in America and Europe by CloudFront, which is a content delivery network that greatly improves the website's load time and security.",
			devto: "The blog post I mentioned was published on dev.to, if you are curious, you can check it out ",
			caf: {
				about: "Chicas al frente is a non-profit feminist collective from Costa Rica",
				role: " Credits: I was provided with the assets and some mock-ups I used as design guidelines. The rest was on me.",
				desc: " For a non-profit, is very important to keep costs as low as possible. After gathering the requirements from the girls, I made my techical recommendations. Aside from the Economic Feminist Network, they required CMS integration for blogging and publishing events. Netlify seemed like a great option, they have an open source CMS, fre hosting and ssl for static websites (this is means no database round trips, hence better load speed, more security and better SEO) and a continuos development pipeline (yay for me!). \n\nI decided to use GatsbyJS to build the static website, the integration with Netlify CMS is very easy thanks to Graphql, it almost feels like magic! The CMS is also extensible, so it was super tailored to the girls needs, making it even more intuitive and easy to use.\n\n Finally, it was optimized for mobile and added some PWA (progressive web app) capabilities like offline loading. We were all very pleased with the end result, I learned lots about GatsbyJS and Netlify! This is most likely an ongoing project, since there's more work to do for the Network.",
				ref: " The main goal of this website was integrating the Economic Feminist Network, a place where women can support each other's businesses. There's a process in place, a user can submit their business information by filling a form, the information is later reviewed by a staff member and if everything is correct, the profile is enabled, and then the user is notified to their email address they're now a part of the Network.\n\n There's sensitive information, so for storing this data I used Google's Firestore, for the email notifications I used Firebase functions with NodeJS nodemailer. I built an admin panel for the girls so they could manage the registered members, granting them access through Firebase authentication."
			},
		},
		misc: {
			here: "here"
		}
	},
	es: {
		home: {
			intro: "¡Bienvenido a mi sitio web!\n\nSoy una ",
			occupation: "Desarrolladora Web",
			intro2: " con 7+ años de experiencia especializada en crear Aplicaciones Web que carguen rápido, se vean bien y sean fáciles de usar.",
			q1: "¿Necesita promover su marca o pequeña empresa?",
			a1: "\nUn sitio web estático podría ser lo que necesita. Desarrollo rápido y asequible.",
			q2: "¿Está buscando llevar su negocio al siguiente nivel?",
			a2: "\nPuedo diseñar una solución web personalizada pensando en las necesidades de su negocio.",
			q3: "¿Tu equipo de desarrolladores necesita una mano extra?",
			a3: "\nHe trabajado con equipos distribuidos en América y Europa, checa mi experiencia y habilidades.",
			details: "Diseño & programo Aplicaciones Web"
		},
		experience: {
			intro: " Empecé mi carrera como desarrolladora back-end, trabajando en bases de datos y diseño de arquitectura. He sido parte de equipos pequeños y grandes (distribuidos), ahí entendí lo crucial que resultan la documentación, versionamiento y la comunicación efectiva dentro del equipo en pos de mantener un flujo de trabajo sano.\n\n Actualmente estoy trabajando como desarrolladora front-end y alcanzando una meta personal, la cual es sentirme cómoda en ambos lados del espectro para desarrollar aplicaciones desde cualquiera de sus frentes.",
			quote: "Todo gran desarrollador que conozcas llegó ahí resolviendo problemas que no estaba cualificado para resolver hasta que finalmente lo hizo.",
			title: "EXPERIENCIA",
			backendDesc: " He trabajado extensamente en aplicaciones a gran escala usando frameworks de .NET (C#, VB, Entity, Web API), SQL Server y Oracle. También trabajé con NodeJS integrando almacenamiento en la nube de Amazon Web Services.\n\n El diseño de arquitectura es algo que disfruto mucho porque es una de las etapas más importantes y desafiantes. Mi meta a corto plazo es seguir aprendiendo sobre servicios en la nube (como AWS) para mejorar mi proceso de desarrollo.",
			frontendDesc: " En la parte front-end es donde he estado enfocada durante el último par de años. Actualmente estoy trabajando en esta área usando HTML5, CSS3 y Javascript diariamente.\n\n También estoy trabajando con Angular y ReactJS, la cual se ha convertido en una de mis herramientas preferidas en el desarrollo web.",
			more: " Si a este punto no le maté de aburrimiento y quiere saber más detalles sobre mi experiencia anterior, visite mi perfil de Linked In ",
			resume: " o puede descargar mi currículum "
		},
		contact: {
			title: 'CONTACTO',
			content: "¿Tiene algún proyecto en el que le gustaría que participe o quiere ponerse en contacto? Envíeme un mensaje llenando el formuario y responderé lo más pronto posible.",
			name: "Nombre",
			subject: "Asunto",
			message: "Mensaje",
			required: "requerido",
			submit: "Enviar Mensaje"
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
			intro: " Aquí mostraré mis proyectos. Dale clic a cada tarjeta para saber más sobre el proyecto.",
			portfolio: " Este es un sitio multi-lenguage (el switch de lenguage está en el centro del pie de página) creado con ReactJS, AWS y Firebase una base de datos de Google.\n\n Es alojado y servido en la infraestructura de Amazon Web Services, el código está publicado en un balde S3 y es servido con más rapidez en América y Europa por CloudFront, la cual es una red de distribución de contenido que mejora muchísimo la velocidad de carga y la seguridad del sitio.",
			devto: " He publicado una entrada en dev.to en donde explico un poco el proceso de cómo creé este sitio, si te da curiosidad míralo ",
			caf: " Chicas al Frente is un colectivo feminista de Costa Rica, necesitaban un website que tuviera un blog, eventos (con galería de fotos) y una red económica feminista con un formulario de registro.\n\n Fue desarrollado con GatsbyJS, integrado con el CMS de Netlify (con campos de texto y plugins personalizados) y Firestore de Google. Al ser una organización sin fines de lucro, seleccioné herramientas que reducen mucho los costos usuales de mantenimiento (tiene alojamiento gratuito con SSL, parches de seguridad no intrusivos y planes gratuitos de aplicaciones externas).\n\n Es un sitio estático, esto se traduce a cargas muy rápidas, más seguridad y mejor SEO. Fue optimizado para móviles con características de Aplicaciones Web Progresivas como funcionamiento sin conexión y una interfaz semejante a una aplicación nativa."
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