// Variables globales
let productos = [];
let productosFiltrados = [];

// Elementos del DOM
const contenedorProductos = document.getElementById("listaProductos");
const inputBusqueda = document.getElementById("buscador");
const selectCategoria = document.getElementById("filtroCategoria");
const alertaSinResultados = document.getElementById("sinResultados");
const tituloRestaurante = document.getElementById("tituloRestaurante");

// Obtener el ID del restaurante desde los parámetros de la URL 
const urlParams = new URLSearchParams(window.location.search);
const restauranteId = urlParams.get("restaurante");

// Cargar productos desde el JSON
fetch("../data/productos.json")
    .then(response => response.json())
    .then(data => {
        // Filtrar por el restaurante de la URL si existe
        if (restauranteId) {
            productos = data.filter(p => String(p.restaurante_id) === String(restauranteId));
        } else {
            productos = data;
        }
        productosFiltrados = [...productos];
        mostrarProductos(productosFiltrados);
    })
    .catch(error => console.error("Error al cargar productos:", error));

// Función para renderizar las tarjetas de productos
function mostrarProductos(lista) {
    if (!contenedorProductos) return;
    contenedorProductos.innerHTML = "";

    if (lista.length === 0) {
        if (alertaSinResultados) alertaSinResultados.classList.remove("d-none");
        return;
    } else {
        if (alertaSinResultados) alertaSinResultados.classList.add("d-none");
    }

    lista.forEach(prod => {
        const col = document.createElement("div");
        col.className = "col-12 col-md-6 col-lg-4 mb-4";
        col.innerHTML = `
            <article class="tarjeta-producto h-100 d-flex flex-column shadow-sm">
                <img src="../${prod.imagen}" alt="${prod.nombre}" class="imagen-producto card-img-top" style="height: 180px; object-fit: cover;">
                <div class="cuerpo-producto d-flex flex-column flex-grow-1 p-3">
                    <span class="categoria-badge badge bg-secondary align-self-start mb-2">${prod.categoria.toUpperCase()}</span>
                    <h5 class="fw-bold">${prod.nombre}</h5>
                    <p class="text-muted small flex-grow-1">${prod.descripcion}</p>
                    <div class="d-flex justify-content-between align-items-center mt-3">
                        <span class="precio-producto fs-5 fw-bold text-success">$${Number(prod.precio).toFixed(2)}</span>
                    </div>
                    <button class="btn btn-primary btn-agregar mt-3 w-100" onclick="agregarProducto('${prod.id}')">
                        🛒 Agregar al carrito
                    </button>
                </div>
            </article>
        `;
        contenedorProductos.appendChild(col);
    });
}

// Lógica de filtros (buscador y categoría)
function aplicarFiltros() {
    const texto = inputBusqueda ? inputBusqueda.value.toLowerCase().trim() : "";
    const categoria = selectCategoria ? selectCategoria.value : "todos";

    productosFiltrados = productos.filter(p => {
        const coincideTexto = p.nombre.toLowerCase().includes(texto) || p.descripcion.toLowerCase().includes(texto);
        const coincideCategoria = categoria === "todos" || p.categoria === categoria;
        return coincideTexto && coincideCategoria;
    });

    mostrarProductos(productosFiltrados);
}

if (inputBusqueda) inputBusqueda.addEventListener("input", aplicarFiltros);
if (selectCategoria) selectCategoria.addEventListener("change", aplicarFiltros);

// Función para agregar al carrito y mostrar el Toast de Bootstrap
function agregarProducto(id) {
    const productoSeleccionado = productos.find(p => p.id === id);
    if (productoSeleccionado) {
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        carrito.push(productoSeleccionado);
        localStorage.setItem("carrito", JSON.stringify(carrito));

        // Mostrar aviso visual (Toast de Bootstrap)
        const toastElement = document.getElementById("toastAgregar");
        if (toastElement) {
            const toast = new bootstrap.Toast(toastElement);
            toast.show();
        }
    }
}