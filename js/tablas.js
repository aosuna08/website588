// declaracion de Objetos
const id = document.getElementById("idInput")
const nombre = document.getElementById("nombreInput")
const escuela = document.getElementById("escuelaInput")
const tabla = document.getElementById('tabla')
const tbody = document.getElementById('tablaBody')
const btnAgregar = document.getElementById('btnAgregar')

// funcion
function agregarFila() {
    let txtId = id.value.trim()
    let txtNombre = nombre.value.trim()
    let txtEscuela = escuela.value.trim()

    // Validacion
    if (!txtId || !txtNombre || !txtEscuela) {
        alert("Por favor, completa todos los campos.")
        return
    }

    // Crear una nueva fila
    const fila = document.createElement("tr")

    // Crear y agregar celdas
    const celdaId = document.createElement("td")
    celdaId.textContent = txtId
    fila.appendChild(celdaId)

    const celdaNombre = document.createElement("td")
    celdaNombre.textContent = txtNombre
    fila.appendChild(celdaNombre)

    const celdaEscuela = document.createElement("td")
    celdaEscuela.textContent = txtEscuela
    fila.appendChild(celdaEscuela)

    // Agregar la fila al cuerpo de la tabla
    tbody.appendChild(fila)
    tabla.appendChild(tbody)

    // limpiar campos
    document.getElementById("idInput").value = ''
    document.getElementById("nombreInput").value = ''
    document.getElementById("escuelaInput").value = ''
}

// eventos
btnAgregar.addEventListener('click',agregarFila)