/**
 * ====================================================================
 * TURRAZO RESTAURANT - COMPORTAMIENTOS GLOBALES (main.js)
 * Archivo compartido: control del contador del carrito, navegación
 * activa y sincronización con LocalStorage.
 * ====================================================================
 */

// Clave oficial de LocalStorage acordada por el equipo (Sección 26 del proyecto)
const CLAVE_CARRITO = 'turrazo_carrito';

/**
 * Obtiene la cantidad total de productos en el carrito desde LocalStorage.
 * Maneja de forma segura errores de parseo, claves inexistentes o datos inválidos.
 * @returns {number} Cantidad total de artículos en el carrito
 */
function obtenerCantidadCarrito() {
  try {
    const datos = localStorage.getItem(CLAVE_CARRITO);
    if (!datos) {
      return 0;
    }

    const carrito = JSON.parse(datos);
    if (!Array.isArray(carrito)) {
      return 0;
    }

    // Sumar las cantidades de cada producto (asegurando conversión numérica)
    return carrito.reduce((acumulado, item) => {
      const cantidad = Number(item && item.cantidad);
      return acumulado + (Number.isFinite(cantidad) && cantidad > 0 ? cantidad : 1);
    }, 0);
  } catch (error) {
    console.warn('[Turrazo] Error al leer el carrito de LocalStorage:', error);
    return 0;
  }
}

/**
 * Actualiza el badge visual del contador en la barra de navegación (#contador-carrito).
 * No falla si el navbar o el elemento no existen en la página actual.
 */
function actualizarContadorCarrito() {
  const elementoContador = document.getElementById('contador-carrito');
  if (!elementoContador) {
    return;
  }

  const cantidadTotal = obtenerCantidadCarrito();
  elementoContador.textContent = cantidadTotal;

  // Actualizar atributos de accesibilidad
  elementoContador.setAttribute('aria-label', `${cantidadTotal} productos en el carrito`);
}

/**
 * Detecta la página actual y asigna dinámicamente la clase 'active'
 * y el atributo 'aria-current="page"' al enlace correspondiente del navbar.
 */
function marcarNavegacionActiva() {
  const rutaActual = window.location.pathname;
  let nombreArchivo = rutaActual.substring(rutaActual.lastIndexOf('/') + 1);

  // Si la ruta es la raíz ('/' o vacía), equivale a index.html
  if (!nombreArchivo || nombreArchivo === '') {
    nombreArchivo = 'index.html';
  }

  const enlacesNav = document.querySelectorAll('.navbar .nav-link');
  enlacesNav.forEach((enlace) => {
    const href = enlace.getAttribute('href');
    if (!href) return;

    // Extraer el nombre de archivo del href del enlace
    const archivoEnlace = href.substring(href.lastIndexOf('/') + 1);

    if (archivoEnlace === nombreArchivo) {
      enlace.classList.add('active');
      enlace.setAttribute('aria-current', 'page');
    } else {
      enlace.classList.remove('active');
      enlace.removeAttribute('aria-current');
    }
  });
}

// Inicialización cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  actualizarContadorCarrito();
  marcarNavegacionActiva();
});

// Sincronización entre distintas pestañas del navegador mediante el evento 'storage'
window.addEventListener('storage', (evento) => {
  if (evento.key === CLAVE_CARRITO) {
    actualizarContadorCarrito();
  }
});

// Evento personalizado para que cart.js, menu.js o checkout.js notifiquen cambios en el carrito
document.addEventListener('carritoActualizado', () => {
  actualizarContadorCarrito();
});

// Exponer la función en el ámbito global para facilitar la invocación directa desde otros módulos
window.actualizarContadorCarrito = actualizarContadorCarrito;
