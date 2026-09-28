// =========================================
// LOGICA DE CHECKOUT Y CONFIRMACION DE PEDIDO
// =========================================

document.addEventListener('DOMContentLoaded', () => {
    cargarResumenPedido();
    configurarValidacionFormulario();
});

/**
 * Lee los datos del carrito almacenados en LocalStorage 
 * y despliega la lista de productos y el total en el checkout.
 */
function cargarResumenPedido() {
    const contenedorResumen = document.getElementById('resumen-pedido');
    const elementoTotal = document.getElementById('total-pedido');

    if (!contenedorResumen || !elementoTotal) return;

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
        const subtotal = item.precio * (item.quantity || item.cantidad || 1);
        total += subtotal;

        htmlContent += `
            <li class="list-group-item d-flex justify-content-between align-items-center px-0 bg-transparent">
                <div>
                    <h6 class="my-0 fw-semibold">${item.nombre}</h6>
                    <small class="text-muted">Cantidad: ${item.quantity || item.cantidad || 1} x $${item.precio.toFixed(2)}</small>
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
 * Activa las validaciones del formulario y procesa la confirmacion del pedido.
 */
function configurarValidacionFormulario() {
    const formulario = document.getElementById('formulario-checkout');

    if (!formulario) return;

    formulario.addEventListener('submit', (event) => {
        event.preventDefault();
        event.stopPropagation();

        const carrito = JSON.parse(localStorage.getItem('turrazo_carrito')) || [];
        if (carrito.length === 0) {
            alert('No puedes confirmar el pedido porque tu carrito está vacío.');
            return;
        }

        if (!formulario.checkValidity()) {
            formulario.classList.add('was-validated');
            return;
        }

        formulario.classList.add('was-validated');

        // Procesar confirmacion si el formulario es valido
        procesarConfirmacionPedido(formulario);
    });
}

/**
 * Genera el numero de pedido, guarda la orden en LocalStorage,
 * vacia el carrito y muestra la vista de exito.
 */
function procesarConfirmacionPedido(formulario) {
    const carrito = JSON.parse(localStorage.getItem('turrazo_carrito')) || [];
    const totalPedido = document.getElementById('total-pedido')?.textContent || '$0.00';

    // Generar numero de pedido unico simulado
    const numeroOrden = 'TUR-' + Math.floor(10000 + Math.random() * 90000);

    // Obtener datos del cliente
    const datosCliente = {
        nombre: formulario.querySelector('#nombre')?.value || 'Cliente',
        direccion: formulario.querySelector('#direccion')?.value || '',
        telefono: formulario.querySelector('#telefono')?.value || ''
    };

    // Guardar orden confirmada en LocalStorage
    const orden = {
        numeroOrden,
        fecha: new Date().toISOString(),
        cliente: datosCliente,
        productos: carrito,
        total: totalPedido
    };
    localStorage.setItem('turrazo_ultima_orden', JSON.stringify(orden));

    // Vaciar el carrito en LocalStorage
    localStorage.removeItem('turrazo_carrito');

    // Actualizar contador del navegador si existe la funcion de 
    if (typeof updateCartCount === 'function') {
        updateCartCount();
    }

    // Mostrar modal o vista de exito
    mostrarPantallaExito(numeroOrden, datosCliente.nombre);
}

/**
 * Reemplaza el contenedor del formulario por la tarjeta de confirmacion exitosa.
 */
function mostrarPantallaExito(numeroOrden, nombreCliente) {
    const contenedorPrincipal = document.querySelector('.checkout-container') || document.querySelector('main') || document.body;

    contenedorPrincipal.innerHTML = `
        <div class="row justify-content-center my-5">
            <div class="col-md-8 col-lg-6 text-center">
                <div class="card border-0 shadow-lg p-4">
                    <div class="card-body">
                        <div class="text-success mb-3" style="font-size: 4rem;">
                            ✓
                        </div>
                        <h2 class="fw-bold mb-2">¡Pedido Confirmado!</h2>
                        <p class="text-muted mb-4">Gracias por tu compra, <strong>${nombreCliente}</strong>. Tu pedido ha sido recibido y esta en preparación.</p>
                        
                        <div class="p-3 bg-light rounded mb-4 text-start">
                            <p class="mb-1"><strong>Número de Pedido:</strong> <span class="badge bg-danger fs-6">${numeroOrden}</span></p>
                            <p class="mb-0 text-muted small">Te enviamos los detalles de la entrega a tu correo.</p>
                        </div>

                        <a href="restaurantes.html" class="btn btn-danger btn-lg px-4 fw-semibold">
                            Volver a Restaurantes
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
}