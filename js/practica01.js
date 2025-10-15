// Obtener los objetos
const parrafo = document.getElementById("parrafo")
const btnMayus = document.getElementById("btnMayus")
const btnMinus = document.getElementById("btnMinus")
const btnAgregar = document.getElementById("btnAgregar")
const btnJustificar = document.getElementById("btnJustify")

var col = parrafo.style.color
var tm = parrafo.style.fontSize
var cf = parrafo.style.backgroundColor

// Funciones
function cambiar() {
    parrafo.style.color = "red"
    parrafo.style.fontSize = "30px"
    parrafo.style.backgroundColor = "yellow"
}

function normal() {
    parrafo.style.color = col
    parrafo.style.fontSize = tm
    parrafo.style.backgroundColor = cf
}

function mayuscula() {
    parrafo.textContent = parrafo.textContent.toUpperCase()
}

function minuscula() {
    parrafo.textContent = parrafo.textContent.toLowerCase()
}

function agregarTxt() {
    let txt = txtTexto.value
    parrafo.innerText = parrafo.innerText + txt
}

function justificarTxt() {
    parrafo.style.textAlign = "justify"
    parrafo.style.margin = "3em"
}

// Eventos
parrafo.addEventListener("mouseover", cambiar)
parrafo.addEventListener("mouseout", normal)
btnMayus.addEventListener("click", mayuscula)
btnMinus.addEventListener("click", minuscula)
btnAgregar.addEventListener("click", agregarTxt)
btnJustificar.addEventListener("click", justificarTxt)