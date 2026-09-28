let restaurantes = [];

const listaRestaurantes = document.getElementById("listaRestaurantes");
const buscador = document.getElementById("buscador");
const filtroCocina = document.getElementById("filtroCocina");
const sinResultados = document.getElementById("sinResultados");


// Cargar restaurantes desde el archivo JSON
fetch("../data/restaurantes.json")
    .then(response => response.json())
    .then(data => {
        restaurantes = data;

        cargarTiposCocina();
        mostrarRestaurantes(restaurantes);
    })
    .catch(error => {
        console.error("Error al cargar los restaurantes:", error);
    });


// Cargar los tipos de cocina en el filtro
function cargarTiposCocina() {

    const tipos = [];

    restaurantes.forEach(restaurante => {

        if (!tipos.includes(restaurante.tipo_cocina)) {
            tipos.push(restaurante.tipo_cocina);
        }

    });

    tipos.forEach(tipo => {

        const opcion = document.createElement("option");

        opcion.value = tipo;
        opcion.textContent = tipo;

        filtroCocina.appendChild(opcion);
    });
}


// Mostrar restaurantes
function mostrarRestaurantes(lista) {

    listaRestaurantes.innerHTML = "";

    if (lista.length === 0) {
        sinResultados.classList.remove("d-none");
        return;
    }

    sinResultados.classList.add("d-none");

    lista.forEach(restaurante => {

        const tarjeta = document.createElement("div");

        // Bootstrap: 1 columna pequeña, 2 mediana, 3 grande
        tarjeta.className = "col-md-6 col-lg-4";

        tarjeta.innerHTML = `
            <article class="tarjeta-turrazo h-100">

                <img
                    src="../${restaurante.imagen}"
                    alt="${restaurante.nombre}"
                    class="imagen-restaurante"
                >

                <div class="cuerpo d-flex flex-column h-100">

                    <h3>${restaurante.nombre}</h3>

                    <p class="texto-primario fw-bold">
                        ${restaurante.tipo_cocina}
                    </p>

                    <p class="texto-gris">
                        ${restaurante.descripcion}
                    </p>

                    <div class="mt-auto">

                        <p class="mb-1">
                            ⭐ ${restaurante.calificacion}
                        </p>

                        <p class="mb-3">
                            🛵 ${restaurante.tiempo_entrega}
                        </p>

                        <a
                            href="menu.html?restaurante=${restaurante.identificador}"
                            class="btn-turrazo"
                        >
                            Ver menú
                        </a>

                    </div>

                </div>

            </article>
        `;

        listaRestaurantes.appendChild(tarjeta);
    });
}


// Buscar por nombre
buscador.addEventListener("input", aplicarFiltros);


// Filtrar por tipo de cocina
filtroCocina.addEventListener("change", aplicarFiltros);


// Aplicar búsqueda y filtro
function aplicarFiltros() {

    const textoBusqueda = buscador.value.toLowerCase().trim();
    const tipoCocina = filtroCocina.value;

    const resultados = restaurantes.filter(restaurante => {

        const coincideNombre =
            restaurante.nombre.toLowerCase().includes(textoBusqueda);

        const coincideCocina =
            tipoCocina === "todos" ||
            restaurante.tipo_cocina === tipoCocina;

        return coincideNombre && coincideCocina;
    });

    mostrarRestaurantes(resultados);
}