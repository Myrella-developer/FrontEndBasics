let botonTema = document.querySelector(".btn-theme")

//Se verifica si hay tema por defecto en localStorage
if (localStorage.getItem("theme")) setTema(localStorage.getItem("theme"))   
else setTema('dark')

botonTema.addEventListener("click", () => {
    localStorage.getItem("theme") == "light" ? setTema("dark") : setTema("light")
})

function setTema(tema) {
        document.querySelector("#style").href = `./styles/${tema}.css`
        botonTema.innerText = tema == "dark" ? "😎" : "🌛"
        localStorage.setItem("theme", tema)    
}