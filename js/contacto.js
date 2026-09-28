// js/contacto.js - Validación y simulación de envío del formulario de contacto

document.addEventListener('DOMContentLoaded', () => {
    const formContacto = document.getElementById('form-contacto');
    const alertaExito = document.getElementById('alerta-exito');

    if (formContacto) {
        formContacto.addEventListener('submit', (event) => {
            event.preventDefault();
            event.stopPropagation();

            if (formContacto.checkValidity()) {
                // Simulación de envío exitoso
                formContacto.reset();
                formContacto.classList.remove('was-validated');
                
                alertaExito.classList.remove('d-none');
                
                // Ocultar la alerta después de 5 segundos
                setTimeout(() => {
                    alertaExito.classList.add('d-none');
                }, 5000);
            } else {
                formContacto.classList.add('was-validated');
            }
        });
    }
});