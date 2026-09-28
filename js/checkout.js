// =========================================
// LOGICA DE CHECKOUT Y VALIDACIONES
// =========================================

document.addEventListener('DOMContentLoaded', () => {
    cargarResumenPedido();
    configurarValidacionFormulario();
});


function cargarResumenPedido() {
    const contenedorResumen = document.getElementById('resumen-pedido');
    const elementoTotal = document.getElementById('total-pedido');

    const carrito = JSON.parse(localStorage.getItem('turrazo_carrito')) || [];

    if (carrito.length === 0) {
        contenedorResumen.innerHTML = `
            <div class="alert alert-warning text-center m-0" role="alert">
                Tu carrito está vacío. <a href="restaurantes.html" class="alert-link">Ver restaurantes</a>
            </div>
        `;
        elementoTotal.textContent = '$0.00';
        return;
    }

    let htmlContent = '<ul class="list-group list-group-flush mb-3">';
    let total = 0;

    carrito.forEach(item => {
        const subtotal = item.precio * item.cantidad;
        total += subtotal;

        htmlContent += `
            <li class="list-group-item d-flex justify-content-between align-items-center px-0 bg-transparent">
                <div>
                    <h6 class="my-0 fw-semibold">${item.nombre}</h6>
                    <small class="text-muted">Cantidad: ${item.cantidad} x $${item.precio.toFixed(2)}</small>
                </div>
                <span class="fw-bold">$${subtotal.toFixed(2)}</span>
            </li>
        `;
    });

    htmlContent += '</ul>';

    contenedorResumen.innerHTML = htmlContent;
    elementoTotal.textContent = `$${total.toFixed(2)}`;
}

/**
 * Activa las validaciones nativas.
 */
function configurarValidacionFormulario() {
    const formulario = document.getElementById('formulario-checkout');

    if (!formulario) return;

    formulario.addEventListener('submit', (event) => {
        event.preventDefault();
        event.stopPropagation();

        // Validar si el carrito tiene productos antes de enviar
        const carrito = JSON.parse(localStorage.getItem('turrazo_carrito')) || [];
        if (carrito.length === 0) {
            alert('No puedes confirmar el pedido porque tu carrito esta vacio.');
            return;
        }

        // Si el formulario no es valido 
        if (!formulario.checkValidity()) {
            formulario.classList.add('was-validated');
            return;
        }

        formulario.classList.add('was-validated');

        // Si todo esta correcto, procesamos la orden simulada
        alert('Validacion exitosa!');
    });
}