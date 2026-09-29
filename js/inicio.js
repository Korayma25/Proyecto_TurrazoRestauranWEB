/**
 * ====================================================================
 * TURRAZO RESTAURANT - LÓGICA DE PÁGINA DE INICIO (inicio.js)
 * Carga dinámica de restaurantes destacados desde data/restaurantes.json
 * ====================================================================
 */

/**
 * Carga y renderiza los primeros 3 restaurantes destacados en la página principal.
 */
async function cargarRestaurantesDestacados() {
  const contenedor = document.getElementById('contenedor-destacados');
  if (!contenedor) return;

  try {
    const respuesta = await fetch('data/restaurantes.json');

    if (!respuesta.ok) {
      throw new Error(`Error en la petición: ${respuesta.status}`);
    }

    const restaurantes = await respuesta.json();

    if (!Array.isArray(restaurantes) || restaurantes.length === 0) {
      throw new Error('El listado de restaurantes está vacío o no es válido');
    }

    // Tomar solo los primeros 3 restaurantes destacados
    const destacados = restaurantes.slice(0, 3);

    // Generar las tarjetas de los restaurantes
    contenedor.innerHTML = destacados.map((restaurante) => {
      const { identificador, nombre, tipo_cocina, imagen, calificacion, descripcion } = restaurante;

      return `
        <div class="col-12 col-md-6 col-lg-4">
          <article class="tarjeta-turrazo h-100 d-flex flex-column">
            <img src="${imagen}" alt="${nombre}" loading="lazy">
            <div class="cuerpo d-flex flex-column flex-grow-1">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <span class="inicio-restaurante-tipo">${tipo_cocina}</span>
                <span class="inicio-restaurante-calificacion">★ ${calificacion}</span>
              </div>
              <h3 class="h5 mb-2">${nombre}</h3>
              <p class="inicio-restaurante-desc flex-grow-1 mb-3">${descripcion}</p>
              <a href="pages/menu.html?restaurante=${identificador}" class="btn btn-turrazo w-100 mt-auto">
                Ver menú
              </a>
            </div>
          </article>
        </div>
      `;
    }).join('');

  } catch (error) {
    console.error('[Turrazo] Error al cargar los restaurantes destacados:', error);
    contenedor.innerHTML = `
      <div class="col-12">
        <div class="estado-vacio">
          No pudimos cargar los restaurantes por ahora
        </div>
      </div>
    `;
  }
}

// Inicializar la carga al estar listo el DOM
document.addEventListener('DOMContentLoaded', () => {
  cargarRestaurantesDestacados();
});
