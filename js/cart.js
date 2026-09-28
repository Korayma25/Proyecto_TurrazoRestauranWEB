// js/cart.js - Lógica del carrito y gestión con LocalStorage

const CART_STORAGE_KEY = 'turrazo_carrito';

function getCart() {
    const cart = localStorage.getItem(CART_STORAGE_KEY);
    return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    updateCartCount();
}

/**
 * Agrega un producto al carrito o incrementa su cantidad si ya existe.
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
 */
function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
}

/**
 * Cambia la cantidad de un producto específico.
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