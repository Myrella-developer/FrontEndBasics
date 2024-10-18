const buttonsLang = document.querySelectorAll(".btn-lang")

//Se carga idioma por defecto
if (localStorage.getItem("lang")) {
    if (localStorage.getItem("lang") == "es") setLanguage("es")
    else if (localStorage.getItem("lang") == "en") setLanguage("en")
} else localStorage.setItem("lang", "es")

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

