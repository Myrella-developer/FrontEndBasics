buttonsLang = document.querySelectorAll(".btn-lang"),

//listener a todos los botones del tipo btn-lang
buttonsLang.forEach(element => {
    element.addEventListener('click', () => {
        setLanguage(element.id)
        //!Aqui ejecutar la funcion de cambiar idioma
    })
});


function setLanguage(lang){
    //titulo Ppal
    document.querySelector('h1').innerText = tituloPpal[lang]
    //titulos de seccion
    titulosSeccion = document.querySelectorAll('h2')
    titulosSeccion.forEach((element, index) => {
        element.textContent = titulos[lang][`titulo${index+1}`]
    })
}

let tituloPpal = {
    es : 'Mi página web de negocios',
    en : 'My Bussines Webpage'
}

let titulos = {
    es : {
        titulo1 : 'Quiénes somos?',
        titulo2 : 'Nuestros servicios',
        titulo3 : 'Portafolio',
        titulo4 : 'Ubicación',
        titulo5 : 'Contáctanos'
    },
    en : {
        titulo1 : 'Who we are?',
        titulo2 : 'Our Services',
        titulo3 : 'Portfolio',
        titulo4 : 'Location',
        titulo5 : 'Email US'
    }
}