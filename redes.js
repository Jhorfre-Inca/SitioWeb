/**
         * Función para alternar entre seguir y siguiendo.
         * Cambia el texto del botón y muestra un mensaje apropiado.
         * @param {HTMLButtonElement} boton - Botón que fue presionado.
         * @param {string} redSocial - Nombre de la red social.
         */
function toggleSeguir(boton, redSocial) {
    if (boton.textContent === 'Seguir') {
        boton.textContent = 'Siguiendo'; // Cambia a "Siguiendo"
        alert(`¡Gracias por Seguirnos en ${redSocial}!`);
    } else {
        boton.textContent = 'Seguir'; // Cambia a "Seguir"
        alert(`Dejaste de Seguirnos en ${redSocial}.`);
    }
}

/**
 * Función para mostrar el mapa al hacer clic en "Ver más".
 */
function mostrarMapa() {
    const mapaContainer = document.querySelector('.mapa-container');
    mapaContainer.style.display = 'block'; // Muestra el mapa
    document.querySelector('.ver-mas').style.display = 'none'; // Oculta el botón
}

function irAPagina(url) {
    window.location.href = url; // Redirige al usuario a la URL
} 

