// =========================================
// LÓGICA DE CHECKOUT Y VALIDACIONES
// =========================================

document.addEventListener('DOMContentLoaded', () => {
    cargarResumenPedido();
});

/**
 * Lee los datos del carrito almacenados en LocalStorage por José (cart.js)
 * y despliega la lista de productos y el total en el checkout.
 */
function cargarResumenPedido() {
    const contenedorResumen = document.getElementById('resumen-pedido');
    const elementoTotal = document.getElementById('total-pedido');

    // Clave de LocalStorage acordada en el proyecto
    const carrito = JSON.parse(localStorage.getItem('turrazo_carrito')) || [];

    // Si el carrito está vacío, mostramos mensaje y total $0.00
    if (carrito.length === 0) {
        contenedorResumen.innerHTML = `
            <div class="alert alert-warning text-center m-0" role="alert">
                Tu carrito está vacío. <a href="restaurantes.html" class="alert-link">Ver restaurantes</a>
            </div>
        `;
        elementoTotal.textContent = '$0.00';
        return;
    }

    // Renderizar la lista de ítems del resumen
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