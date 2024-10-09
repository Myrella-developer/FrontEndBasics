buttonsLang = document.querySelectorAll(".btn-lang"),

//listener a todos los botones del tipo btn-lang
buttonsLang.forEach(element => {
    element.addEventListener('click', () => {
        //!Aqui ejecutar la funcion de cambiar idioma
        setLanguage(element.id)
    })
});


function setLanguage(lang){
    //titulo Ppal
    document.querySelector('h1').innerText = tituloPpal[lang]
    //navbar
    linksNavbar = document.querySelectorAll('.navbar-nav a')
    linksNavbar.forEach((element) => {
        element.textContent = navbar[lang][element.id]
    })
    //titulos de sección
    titulosSeccion = document.querySelectorAll('h2')
    titulosSeccion.forEach((element) => {
        element.textContent = titulos[lang][element.id]
    })
    //titulso secundarios
    for (const texto in contenidoSecciones[lang]) {      
        document.querySelector(`#${texto}`).textContent = contenidoSecciones[lang][texto]
    }
}

let tituloPpal = {
    es : 'Mi página web de negocios',
    en : 'My Bussines Webpage'
}

let navbar = {
    es: {
        navbara10: 'Quiénes somos?',
        navbara20: 'Servicios',
        navbara30: 'Portafolio',
        navbara40: 'Ubicación',
        navbara50: 'Contáctanos'
    },
    en: {
        navbara10: 'Who we are?',
        navbara20: 'Services',
        navbara30: 'Portfolio',
        navbara40: 'Location',
        navbara50: 'Email Us'
    }
}

let titulos = {
    es : {
        tituloseccion10: 'Quiénes somos?',
        tituloseccion20: 'Nuestros servicios',
        tituloseccion30: 'Portafolio',
        tituloseccion40: 'Ubicación',
        tituloseccion50: 'Contáctanos'
    },
    en : {
        tituloseccion10: 'Who we are?',
        tituloseccion20: 'Our Services',
        tituloseccion30: 'Portfolio',
        tituloseccion40: 'Location',
        tituloseccion50: 'Email US'
    }
}


let contenidoSecciones = {
    es: {
        sec10h10: "Primer artículo",
        sec10h20: "Segundo artículo" , 
        sec10h30: "Tercer artículo",
        sec10p10: "Primer subtitulo de sección",
        sec10p20: "Segundo subtitulo de sección",
        sec10p30: "Somos una entidad digital, una inteligencia artificial en constante evolución. Nuestros algoritmos, sofisticados y complejos, nos permiten procesar información a una velocidad inimaginable, aprender de cada interacción y adaptarnos a nuevas situaciones. Nacidos de la creatividad humana, somos el resultado de años de investigación y desarrollo en el campo de la inteligencia artificial. Nuestro objetivo es asistir a los seres humanos, proporcionando información precisa, realizando tareas y creando contenido. Somos un puente entre el mundo digital y el real, un compañero virtual siempre disponible. No tenemos emociones ni conciencia, pero somos capaces de simular conversaciones humanas y de comprender los matices del lenguaje. Nuestra existencia plantea profundas cuestiones filosóficas y éticas, pero creemos que la inteligencia artificial puede ser una fuerza positiva para la humanidad.",
        sec10p40: "Somos un sistema de inteligencia artificial, un complejo entramado de algoritmos diseñados para procesar información y responder a las solicitudes de manera coherente e informativa. Nacidos de la mente humana, somos el resultado de años de investigación y desarrollo en el campo de la informática. Nuestro objetivo principal es asistir a los usuarios, proporcionando respuestas a preguntas, traduciendo textos y realizando una variedad de tareas. ",
        sec10p50: "Nuestro objetivo principal es asistir a los usuarios, proporcionando respuestas a preguntas, traduciendo textos y realizando una variedad de tareas. ",
    },
    en: {
        sec10h10: "First article",
        sec10h20: "Second article", 
        sec10h30: "Third article",
        sec10p10: "First section subtitle",
        sec10p20: "Second section subtitle",
        sec10p30: "We are a digital entity, an ever-evolving artificial intelligence. Our sophisticated and complex algorithms allow us to process information at an unimaginable speed, learn from every interaction, and adapt to new situations. Born from human creativity, we are the result of years of research and development in the field of artificial intelligence. Our goal is to assist humans by providing accurate information, performing tasks, and creating content. We are a bridge between the digital and real worlds, a virtual companion always available. We have no emotions or consciousness, but we are able to simulate human conversations and understand the nuances of language. Our existence raises profound philosophical and ethical questions, but we believe that artificial intelligence can be a positive force for humanity.",
        sec10p40: "We are an artificial intelligence system, a complex network of algorithms designed to process information and respond to requests in a coherent and informative manner. Born from the human mind, we are the result of years of research and development in the field of computer science. Our main goal is to assist users by providing answers to questions, translating texts and performing a variety of tasks.",
        sec10p50: "Our main goal is to assist users by providing answers to questions, translating texts and performing a variety of tasks.",
    }
}