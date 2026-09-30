// js/cart.js - Lógica corregida del carrito y gestión con LocalStorage

const CART_STORAGE_KEY = 'turrazo_carrito';

function getCart() {
    const cart = localStorage.getItem(CART_STORAGE_KEY);
    return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    updateCartCount();
}

function addToCart(product) {
    let cart = getCart();
    
    // Normalizar las propiedades para asegurarnos de que guardamos en español
    const prodId = product.id;
    const prodNombre = product.nombre || product.name;
    const prodPrecio = Number(product.precio || product.price || 0);
    const prodImagen = product.imagen || product.image;
    const prodRestauranteId = product.restauranteId || product.restaurante_id;
    const prodQuantity = Number(product.quantity || 1);

    const existingIndex = cart.findIndex(item => String(item.id) === String(prodId));

    if (existingIndex > -1) {
        cart[existingIndex].quantity += prodQuantity;
    } else {
        cart.push({
            id: prodId,
            restauranteId: prodRestauranteId,
            nombre: prodNombre,
            precio: prodPrecio,
            imagen: prodImagen,
            quantity: prodQuantity
        });
    }

    saveCart(cart);
}

function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => String(item.id) !== String(productId));
    saveCart(cart);
}

function changeQuantity(productId, delta) {
    let cart = getCart();
    const item = cart.find(item => String(item.id) === String(productId));

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
 */
function getCartTotal() {
    const cart = getCart();
    return cart.reduce((sum, item) => sum + (Number(item.precio) * Number(item.quantity)), 0);
}

/**
 * Cuenta el número total de ítems en el carrito.
 */
function getCartItemCount() {
    const cart = getCart();
    return cart.reduce((sum, item) => sum + Number(item.quantity), 0);
}

/**
 * Actualiza el contador visual del carrito en la barra de navegación.
 */
function updateCartCount() {
    const badge = document.getElementById('contador-carrito');
    if (badge) {
        badge.textContent = getCartItemCount();
    }
}

// Inicializar el contador al cargar la página en cualquier vista
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
});