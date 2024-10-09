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
    console.log(linksNavbar);
    linksNavbar.forEach((element) => {
        element.textContent = navbar[lang][element.id]
    })
    //titulos de seccián
    titulosSeccion = document.querySelectorAll('h2')
    titulosSeccion.forEach((element, index) => {
        element.textContent = titulos[lang][`titulo${(index+1)*10}`]
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
        titulo10: 'Quiénes somos?',
        titulo20: 'Nuestros servicios',
        titulo30: 'Portafolio',
        titulo40: 'Ubicación',
        titulo50: 'Contáctanos'
    },
    en : {
        titulo10: 'Who we are?',
        titulo20: 'Our Services',
        titulo30: 'Portfolio',
        titulo40: 'Location',
        titulo50: 'Email US'
    }
}