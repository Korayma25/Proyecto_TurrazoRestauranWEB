// js/cart.js - Lógica del carrito y gestión con LocalStorage

const CART_STORAGE_KEY = 'turrazo_carrito';

/**
 * Obtiene el carrito actual desde LocalStorage.
 * @returns {Array} Lista de productos en el carrito.
 */
function getCart() {
    const cart = localStorage.getItem(CART_STORAGE_KEY);
    return cart ? JSON.parse(cart) : [];
}

/**
 * Guarda el carrito actual en LocalStorage.
 * @param {Array} cart 
 */
function saveCart(cart) {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    updateCartCount(); // Actualiza el contador global de la barra de navegación
}

/**
 * Agrega un producto al carrito o incrementa su cantidad si ya existe.
 * @param {Object} product - { id, restauranteId, nombre, precio, imagen, cantidad }
 */
function addToCart(product) {
    let cart = getCart();
    const existingIndex = cart.findIndex(item => item.id === product.id);

    if (existingIndex > -1) {
        cart[existingIndex].quantity += (product.quantity || 1);
    } else {
        cart.push({
            id: product.id,
            restauranteId: product.restauranteId,
            nombre: product.name || product.nombre,
            precio: product.price || product.precio,
            imagen: product.image || product.imagen,
            quantity: product.quantity || 1
        });
    }

    saveCart(cart);
}

/**
 * Elimina un producto del carrito por su ID.
 * @param {String|Number} productId 
 */
function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
}

/**
 * Cambia la cantidad de un producto específico.
 * @param {String|Number} productId 
 * @param {Number} delta - Cantidad a sumar o restar (+1 o -1)
 */
function changeQuantity(productId, delta) {
    let cart = getCart();
    const item = cart.find(item => item.id === productId);

    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(productId);
            return;
        }
        saveCart(cart);
    }
}

/**
 * Vacía por completo el carrito.
 */
function clearCart() {
    localStorage.removeItem(CART_STORAGE_KEY);
    updateCartCount();
}

/**
 * Calcula el subtotal general del carrito.
 * @returns {Number}
 */
function getCartTotal() {
    const cart = getCart();
    return cart.reduce((sum, item) => sum + (item.precio * item.quantity), 0);
}

/**
 * Cuenta el número total de ítems en el carrito (para el badge de la navbar).
 * @returns {Number}
 */
function getCartItemCount() {
    const cart = getCart();
    return cart.reduce((sum, item) => sum + item.quantity, 0);
}

/**
 * Actualiza el contador visual del carrito en la barra de navegación.
 */
function updateCartCount() {
    const badge = document.getElementById('cart-count');
    if (badge) {
        badge.textContent = getCartItemCount();
    }
}

// Inicializar el contador al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
});