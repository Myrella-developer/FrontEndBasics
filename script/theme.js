let botonTema = document.querySelector(".btn-theme")

//Se verifica si hay tema por defecto en localStorage
if (localStorage.getItem("theme")) {
    if (localStorage.getItem("theme") == "dark") {
        setTema("dark")
    }
    else {
        setTema("light")
    }
} else setTema('light')


botonTema.addEventListener("click", (e) => {
    if (localStorage.getItem("theme") == "light") {
        setTema("dark")
    }
    else {
        setTema("light")
    }
})

function setTema(tema) {
    if (tema == "dark") {
        console.log('entra a if dark');
        
        console.log(document.querySelector("#style"));        
        document.querySelector("#style").href = "./styles/dark.css"
        botonTema.innerText = "😎"
        localStorage.setItem("theme", "dark")
    } else {
        document.querySelector("#style").href = "./styles/light.css"
        botonTema.innerText = "🌛"
        localStorage.setItem("theme", "light")
    }
}