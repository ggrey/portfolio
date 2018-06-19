import React from 'react';

export const languages = {
  en:
    {
        header: {
            intro: `Crafting code from the tropics, based in beautiful Costa Rica. I work hard so my dog can have a better life. Then I can spend the rest of my money on travel, music and food.\n\nFor the past 6+ years I've had the opportunity to use a wide range of technologies, but C#, NodeJS and React hold a special place in my heart`,
            details: "I build Web Apps"
        },
        experience: {
            intro: `Back-end development is my strongest suit since it was my entry point to programming, though for the last two years I've been working a lot with Javascript (thanks to NodeJS), that eventually led me to my current front-end role.\n\nNow I'm focusing on sharpening my web skills, from design to performance plus looking to get my AWS game ON!.`,
            title: "EXPERIENCE",
            cardFrontend: `FRONT-END`,
            cardBackend: `BACK-END`,
            backendDesc: "I've worked extensively in large-scale applications using .NET frameworks (C# & VB), SQL Server and Oracle. I started learning JS because of NodeJS, it also lead me to implement some cool AWS tools.\n\nI take pride in my ability to solve complex problems involving code and infrastructure, it began during my first job as a solo developer, which required me to learn new skills, develop and support systems with little help and supervision.",
            frontendDesc: ""
        },
        contact: {
            title: 'CONTACT',
            content: "Do you have a cool project in mind or just want to get in touch? Just shoot me a message by filling the form below and I'll get back to you as soon as I can."
        }
    },
    es: {
        header: {
            intro: `Escribiendo código desde el trópico, viviendo en la hermosa Costa Rica. Trabajo duro para que mi perro pueda tener una mejor vida. Para luego poder gastar el resto de mi dinero en viajes, música y comida.\n\nDurante los últimos 6 años he tenido la oportunidad de utilizar una amplia variedad de tecnologías, pero C#, NodeJS y React tienen un lugar especial en mi corazón`,
            details: "Construyo Aplicaciones Web"
        },
        experience: {
            intro: "",
            title: "EXPERIENCIA",            
            cardFrontend: 'FRONT-END',
            cardBackend: 'BACK-END',
            backendDesc: "He trabajado en aplicaciones de gran escala usando frameworks de .NET (C# & VB), SQL Server y Oracle. Empecé a aprender JS por NodeJS, que también me llevó a implementar algunas herramientas de AWS.\n\nMe enorgullezco de mi habilidad para resolver problemas complejos involucrando código e infrastructura, todo empezó durante mi primer trabajo como la única programadora, que me demandaba aprender nuevas habilidades, desarrollar y soportar sistemas con poca ayuda y supervisión.",
            frontendDesc: ``
        },
        contact: {
            title: 'CONTACTO',
            content: "¿Tenés algún proyecto cool en mente o solo querés ponerte en contacto? Solo envíame un mensaje llenando el formuario de abajo y te responderé lo más pronto posible."
        }
    }
}
  
  export const LanguageContext = React.createContext({
    langText: languages.en,
    toggleLanguage: () => {}
  });