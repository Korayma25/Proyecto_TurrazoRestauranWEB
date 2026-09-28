# Turrazo Restaurant

Aplicación web para consultar restaurantes y sus menús, agregar productos a un carrito y realizar un pedido simulado. Proyecto académico de la asignatura **Manejo y Configuración de Software**, Carrera de Software, Universidad Técnica de Ambato.

## Objetivo

Aplicar Git y GitHub en un entorno de desarrollo colaborativo simulado, usando el modelo **GitFlow** (`main`, `develop`, `feature/*`, `release/*`, `hotfix/*`), con Pull Requests y revisión de código entre compañeros.

## Funcionalidades

- Página de inicio con restaurantes destacados.
- Listado de restaurantes con buscador y filtro por tipo de cocina.
- Menú por restaurante con buscador y filtro por categoría.
- Carrito de compras guardado en LocalStorage (agregar, quitar, cambiar cantidades, total).
- Checkout con formulario validado y confirmación de pedido simulado.
- Páginas Nosotros y Contacto.

## Tecnologías

| Tecnología | Uso |
|------------|-----|
| HTML5 | Estructura de las páginas |
| CSS3 | Estilos personalizados |
| JavaScript | Lógica e interacción |
| Bootstrap 5 | Componentes y diseño responsive |
| JSON | Datos simulados de restaurantes y productos |
| LocalStorage | Carrito y pedido en el navegador |
| Git + GitHub | Control de versiones |
| GitFlow | Organización del trabajo |

## Estructura del proyecto

```
turrazo-restaurant/
├── index.html
├── pages/          (restaurantes, menu, carrito, checkout, nosotros, contacto)
├── css/            (styles.css global y un CSS por módulo)
├── js/             (main.js global y un JS por módulo)
├── data/           (restaurantes.json, productos.json)
├── assets/img/     (branding, inicio, restaurantes, productos, nosotros)
├── docs/           (guía de trabajo del equipo y pruebas)
├── README.md
├── CONTRIBUTING.md
└── .gitignore
```

## Cómo ejecutarlo

El sitio lee archivos JSON con `fetch()`, por eso **no funciona abriendo `index.html` con doble clic**. Usa un servidor local:

**Opción 1: Live Server (VS Code)**
1. Instala la extensión *Live Server*.
2. Clic derecho en `index.html` → *Open with Live Server*.

**Opción 2: Python**
```
python -m http.server 5500
```
Luego abre `http://localhost:5500`.

## Flujo de trabajo (GitFlow)

- `main`: versión estable.
- `develop`: integración.
- `feature/<nombre>-<funcionalidad>`: una rama por funcionalidad, creada desde `develop`.
- `release/x.x.x`: preparación de versiones.
- `hotfix/*`: correcciones urgentes sobre `main`.

Todo cambio llega a `develop` mediante Pull Request con revisión de otro integrante. Ver [CONTRIBUTING.md](CONTRIBUTING.md) y [docs/GUIA_TRABAJO_EQUIPO.md](docs/GUIA_TRABAJO_EQUIPO.md).

## Equipo

| Integrante | Rol |
|------------|-----|
| Pico Coello Britthany Korayma | DevOps / Release Manager y Frontend Developer |
| Taipe Bravo José Francisco | Full Stack Developer y Merge Manager |
| Rosillo Cordova Michael Steve | Data & Frontend Developer |
| Taipe Tixilema Paola Alexandra | Frontend Developer (Catálogo y Menú) |
| Tituaña Capiña Diana Pamela | Frontend Developer (Checkout y Validaciones) |
| Vargas Carrera William Francisco | UI/UX Developer |

## Repositorio

https://github.com/Korayma25/Proyecto_TurrazoRestauranWEB