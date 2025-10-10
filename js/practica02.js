const opciones = document.getElementById("opciones")
const operador = document.getElementById("lblOp")
const txtNum1 = document.getElementById("txtNum")
const txtNum2 = document.getElementById("txtNum2")
const resultado = document.getElementById("resultado")
const btnCalcular = document.getElementById("btnCalcular")

// Funciones
// Funcion para actualizar operador aritmetico
function mostrarOperador() {
    const item = parseInt(opciones.value)
    switch(item) {
        case 1:
            operador.textContent = "+"
            break
        case 2:
            operador.textContent = "-"
            break
        case 3:
            operador.textContent = "*"
            break
        case 4:
            operador.textContent = "/"
            break
        default: 
            operador.textContent = ""
    }
}

function calcular() {
    const num1 = parseFloat(txtNum1.value)
    const num2 = parseFloat(txtNum2.value)

    if (isNaN(num1) || isNaN(num2)) {
        resultado.textContent = "Resultado: Error: datos incompletos"
        return
    }

    const item = parseInt(opciones.value)
    res = ""
    switch(item) {
        case 1:
            res = num1 + num2
            resultado.textContent = "Resultado: " + res
            break
        case 2:
            res = num1 - num2
            resultado.textContent = "Resultado: " + res
            break
        case 3:
            res = num1 * num2
            resultado.textContent = "Resultado: " + res
            break
        case 4:
            if (num2 != 0) {
                res = num1 / num2
                resultado.textContent = "Resultado: " + res
                break
            } else {
                resultado.textContent = "Resultado: Error: No se puede dividir entre 0"
            }
    }
}

opciones.addEventListener("change", mostrarOperador)
btnCalcular.addEventListener("click", calcular)