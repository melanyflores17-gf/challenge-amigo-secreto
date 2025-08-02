// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Paso 1: Crear un array para almacenar los nombres
let listaDeAmigos = [];

// Paso 2: Función para agregar amigos
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    listaDeAmigos.push(nombre);
    input.value = ""; // Limpiar el campo de entrada

    actualizarLista(); // Mostrar nombres en pantalla
}

// Paso 3: Función para actualizar visualmente la lista de amigos
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista anterior

    for (let amigo of listaDeAmigos) {
        const item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    }
}

// Paso 4: Función para sortear al amigo secreto
function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("Primero debes añadir al menos un nombre.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    const nombreSorteado = listaDeAmigos[indiceAleatorio];

    mostrarResultado(nombreSorteado);
}

// Mostrar resultado en la lista con id="resultado"
function mostrarResultado(nombre) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar resultado anterior

    const item = document.createElement("li");
    item.textContent = `🎉 El amigo secreto es: ${nombre}`;
    resultado.appendChild(item);
}
