
        // Alerta de bienvenida al cargar la página
        alert("Bienvenido a la Pagina de Contactanos")

        // Validación y mensaje de éxito
        function validarFormulario(event) {
            event.preventDefault(); /* Prevenir el envío del formulario por defecto */

            // Obtener el valor del campo de celular
            var celular = document.getElementById("celular").value;

            // Verificar si tiene 9 dígitos
            if (celular.length !== 9 || !/^\d+$/.test(celular)) {
                alert("El número de celular debe tener exactamente 9 dígitos y contener solo números.");
                return false; /* No enviar el formulario */
            }

            // Mostrar el mensaje de éxito con un pequeño retraso
            setTimeout(function() {
                document.getElementById("mensajeExito").style.display = "block";
            }, 500); /* 500ms de espera antes de mostrar el mensaje */
            document.getElementById("formContacto").reset(); /* Limpiar el formulario después de enviarlo */
            return true; /* Enviar el formulario */
        }