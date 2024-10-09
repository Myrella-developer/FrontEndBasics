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

let tituloPpal = {
    es : 'Mi página web de negocios',
    en : 'My Bussines Webpage'
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