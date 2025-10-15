// Seleccionamos los objetos
const valor = document.getElementById("valor")
const btnIncrementar = document.getElementById("incrementar")
const btnDisminuir = document.getElementById("disminuir")
const btnReiniciar = document.getElementById("reiniciar")
var contador = 0 // Inicializamos el contador

// funciones
function incrementar(){
    contador ++
    valor.textContent = contador
}

function decrementar(){
    contador --
    valor.textContent = contador
}

function iniciar(){
    contador=0
    valor.textContent = contador
}

// Evento para aumentar
btnIncrementar.addEventListener("click",incrementar)

// Evento para disminuir
btnDisminuir.addEventListener("click", decrementar)

// Evento para reiniciar
btnReiniciar.addEventListener("click", iniciar)