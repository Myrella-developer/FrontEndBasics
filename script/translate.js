const buttonsLang = document.querySelectorAll(".btn-lang")

//Se carga idioma por defecto
const localLang = localStorage.getItem("lang")
if (localLang == 'es' || localLang == 'en') setLanguage(localLang)
else {
    localStorage.setItem("lang", 'es')   
    setLanguage('es')
} 

//listener a todos los botones del tipo btn-lang
buttonsLang.forEach(element => {
    element.addEventListener('click', () => {
        setLanguage(element.id)
        localStorage.setItem("lang", element.id)   
    })
});


function setLanguage(lang){
//Busca todos los id en el Objeto traducciones y lo modifica uno a uno en el dom segun su id    
    for (const tagId in traducciones[lang]) {      
        document.querySelector(`#${tagId}`).textContent = traducciones[lang][tagId]
    }
}

