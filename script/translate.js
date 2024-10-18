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
    
    for (const texto in traducciones[lang]) {      
        document.querySelector(`#${texto}`).textContent = contenidoSecciones[lang][texto]
    }
}

