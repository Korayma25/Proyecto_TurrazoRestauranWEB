# Proyecto_TurrazoRestauranWEB
# GUIA DE TRABAJO DEL EQUIPO

> **Proyecto:** Turrazo Restaurant
> **Asignatura:** Manejo y Configuración de Software — Proyecto Primer Parcial
> **Versión del documento:** 1.0
> **Lectura y cumplimiento obligatorios para los 6 integrantes.**

---

## 1. Objetivo del documento

Este documento establece las **reglas obligatorias** de trabajo colaborativo del equipo: desarrollo, uso de GitFlow, Pull Requests, revisión de código, integración y publicación de versiones del proyecto **Turrazo Restaurant**.

Sirve como manual de trabajo: cualquier integrante que lo lea debe saber exactamente qué le corresponde desarrollar, qué ramas crear, desde dónde, qué archivos puede modificar, cuándo hacer commit, push y Pull Request, quién revisa su trabajo, cuándo se permite el merge, cómo resolver conflictos y qué evidencias guardar.

**Este documento no contiene código de la aplicación.** Su único fin es organizar y estandarizar el trabajo.

---

## 2. Información general del proyecto

| Campo | Detalle |
| ----- | ------- |
| **Nombre del proyecto** | Turrazo Restaurant |
| **Descripción breve** | Aplicación web para consultar restaurantes y sus menús, agregar productos a un carrito y realizar un pedido simulado. |
| **Estado inicial** | Proyecto creado desde cero. No existe código previo. |
| **Tecnologías** | HTML5, CSS3, JavaScript |
| **Framework de interfaz** | Bootstrap 5 |
| **Datos** | Archivos JSON con restaurantes y productos simulados |
| **Persistencia** | LocalStorage del navegador (carrito y pedido) |
| **Backend / Base de datos** | No existen. Todo se ejecuta en el navegador. |
| **Control de versiones** | Git + GitHub |
| **Modelo de ramas** | GitFlow (`main`, `develop`, `feature/*`, `release/*`, `hotfix/*`) |
| **Arquitectura** | Sitio web estático multipágina. Cada página tiene su HTML, su CSS y su JS. Los datos se leen desde JSON y el estado del pedido se guarda en LocalStorage. |
| **Repositorio remoto** | GitHub — `[URL_DEL_REPOSITORIO]` *(Britthany completa este dato al crear el repositorio)* |
| **Rama principal** | `main` |
| **Rama de desarrollo** | `develop` |

### Estructura de carpetas aprobada

```
turrazo-restaurant/
├── index.html
├── pages/
│   ├── restaurantes.html
│   ├── menu.html
│   ├── carrito.html
│   ├── checkout.html
│   ├── nosotros.html
│   └── contacto.html
├── css/
│   ├── styles.css            (estilos globales)
│   ├── inicio.css
│   ├── restaurantes.css
│   ├── menu.css
│   ├── carrito.css
│   ├── checkout.css
│   └── contacto.css
├── js/
│   ├── main.js               (navbar, footer y utilidades compartidas)
│   ├── inicio.js
│   ├── restaurantes.js
│   ├── menu.js
│   ├── cart.js
│   ├── checkout.js
│   └── contacto.js
├── data/
│   ├── restaurantes.json
│   └── productos.json
├── assets/
│   └── img/
│       ├── branding/
│       ├── inicio/
│       ├── restaurantes/
│       ├── productos/
│       └── nosotros/
├── docs/
│   ├── GUIA_TRABAJO_EQUIPO.md
│   └── pruebas/              (opcional: pruebas manuales por módulo)
├── README.md
├── CONTRIBUTING.md
└── .gitignore
```

---

## 3. Integrantes y roles

| Integrante | Rol | Responsabilidad principal | Funcionalidades asignadas |
| ---------- | --- | ------------------------- | ------------------------- |
| **Pico Coello Britthany Korayma** (Britthany) | DevOps / Release Manager y Frontend Developer | Configuración y gobierno del repositorio (GitFlow, protecciones, releases) y diseño base compartido de la interfaz. | Estructura del repositorio y `.gitignore`; layout base (Bootstrap, navbar, footer, estilos globales). |
| **Taipe Bravo José Francisco** (José) | Full Stack Developer y Merge Manager | Lógica del carrito y gestión de estado con LocalStorage, más integración de PRs y versiones. | Lógica del carrito; vista del carrito. |
| **Rosillo Cordova Michael Steve** (Michael) | Data & Frontend Developer | Catálogo de restaurantes (datos y vista) y documentación técnica del repositorio. | Datos de restaurantes; listado con filtros; `README.md`. |
| **Taipe Tixilema Paola Alexandra** (Paola) | Frontend Developer | Catálogo de productos y menú de cada restaurante con búsqueda y filtros. | Datos de productos; página de menú. |
| **Tituaña Capiña Diana Pamela** (Diana) | Frontend Developer (Checkout y Validaciones) | Proceso de compra: formulario, validaciones y confirmación del pedido simulado. | Checkout con formulario validado; confirmación de pedido. |
| **Vargas Carrera William Francisco** (William) | UI/UX Developer | Páginas de presentación y contacto, y reglas de colaboración del grupo. | Página de inicio; Nosotros y Contacto; `CONTRIBUTING.md`. |

> **Nota de identificación:** hay dos integrantes con apellido Taipe. En todo el documento, en los nombres de rama y en los PR se les identifica **por su primer nombre**: `jose` y `paola`.

**Responsables autorizados para el merge:** Britthany y José (ver sección 14). Ambos también desarrollan funcionalidades.

---

## 4. División EQUITATIVA del trabajo

### 4.1 Cómo se equilibró la carga

Cada integrante tiene desarrollo real, mínimo 2 Pull Requests y participa en la revisión de código. Nadie tiene solamente documentación, solamente Git o solamente pruebas.

| Integrante | PRs propios | Revisiones que realiza | Merges que ejecuta | Compensación de carga |
| ---------- | :---------: | :--------------------: | :----------------: | --------------------- |
| Britthany | 2 (estructura y layout base; layout es pieza fundamental de todo el sitio) | 2 | 7 | Gobierno del repositorio, creación de la release, protección de ramas. |
| José | 2 (lógica y vista del carrito; el carrito es el módulo más complejo) | 2 | 7 | Etiquetado de versiones y coordinación de hotfix. |
| Michael | 3 | 3 | 0 | El tercer PR es documentación liviana (`README.md`). |
| Paola | 2 | 3 | 0 | Mayor volumen de datos (catálogo de productos) y buscador/filtros del menú. |
| Diana | 2 | 2 | 0 | Validaciones de formulario y flujo de confirmación. |
| William | 3 | 2 | 0 | El tercer PR es documentación liviana (`CONTRIBUTING.md`). |

### 4.2 Britthany — DevOps / Release Manager y Frontend Developer

**Funcionalidades propias**
- Estructura base del repositorio y `.gitignore` (PR 1).
- Layout base compartido de todo el sitio (PR 2).

**Tareas técnicas**
1. Crear el repositorio en GitHub y configurar GitFlow (ver sección 5, Fase 0).
2. Crear la estructura de carpetas con archivos `.gitkeep` para las carpetas vacías.
3. Crear el `.gitignore` con reglas para **al menos tres tecnologías** (Node.js, Python y Java), más archivos de editor y sistema operativo, con un comentario breve que justifique cada bloque (por qué se ignora).
4. Incluir esta guía en `docs/GUIA_TRABAJO_EQUIPO.md`.
5. Incorporar Bootstrap 5, definir los estilos globales (colores de marca, tipografía, espaciados), la barra de navegación responsive con enlaces a todas las páginas y un espacio para el contador del carrito, el pie de página y el `main.js` con los comportamientos compartidos.
6. Documentar en la descripción del PR de layout cómo debe enlazar cada integrante los estilos y scripts en sus páginas.
7. Crear la rama `release/1.0.0` cuando corresponda (sección 17).

**Puede modificar:** `.gitignore`, `.gitkeep`, `docs/GUIA_TRABAJO_EQUIPO.md`, `css/styles.css`, `js/main.js`, `assets/img/branding/`.
**Debe evitar modificar:** cualquier página, CSS, JS o JSON de otro integrante.

### 4.3 José — Full Stack Developer y Merge Manager

**Funcionalidades propias**
- Lógica del carrito (PR 1) y vista del carrito (PR 2).

**Tareas técnicas**
1. Implementar en `js/cart.js` las operaciones del carrito: agregar producto, quitar producto, cambiar cantidad, calcular subtotal y total, vaciar y contar ítems.
2. Guardar y leer el carrito en LocalStorage con la clave acordada (sección 26).
3. Documentar en el PR la lista de funciones que ofrece `cart.js`, porque Paola y Diana dependen de ellas.
4. Construir `pages/carrito.html` con: listado de productos, controles de cantidad, eliminación, total, botón para vaciar, estado de carrito vacío y botón para continuar al pago.
5. Actualizar el contador del carrito en la barra de navegación.
6. Ejecutar merges autorizados, etiquetar versiones y coordinar hotfix.

**Puede modificar:** `js/cart.js`, `pages/carrito.html`, `css/carrito.css`.
**Debe evitar modificar:** `css/styles.css` y `js/main.js` (de Britthany), y todo lo de los demás integrantes.

### 4.4 Michael — Data & Frontend Developer

**Funcionalidades propias**
- Datos de restaurantes (PR 1), listado de restaurantes (PR 2), `README.md` (PR 3).

**Tareas técnicas**
1. Crear `data/restaurantes.json` con mínimo **6 restaurantes** (sugerido) y los campos acordados en la sección 26.
2. Agregar imágenes en `assets/img/restaurantes/`.
3. Construir `pages/restaurantes.html` con tarjetas Bootstrap, buscador por nombre, filtro por tipo de cocina, mensaje cuando no hay resultados y enlace de cada tarjeta a la página de menú con el identificador del restaurante.
4. Redactar el `README.md`: descripción, objetivo académico, tecnologías, estructura de carpetas, cómo ejecutar el sitio, resumen del flujo GitFlow, integrantes y enlace a `CONTRIBUTING.md`.

**Puede modificar:** `data/restaurantes.json`, `pages/restaurantes.html`, `js/restaurantes.js`, `css/restaurantes.css`, `assets/img/restaurantes/`, `README.md`.
**Debe evitar modificar:** `data/productos.json` (de Paola), `css/styles.css`, `js/main.js`, y todo lo de los demás.

### 4.5 Paola — Frontend Developer (Catálogo y Menú)

**Funcionalidades propias**
- Datos de productos (PR 1) y página de menú (PR 2).

**Tareas técnicas**
1. Crear `data/productos.json` con mínimo **4 productos por restaurante** (sugerido), repartidos en al menos 3 categorías (por ejemplo entradas, platos fuertes, bebidas, postres), vinculados a cada restaurante según el contrato de la sección 26. Coordinar con Michael los identificadores de restaurantes.
2. Agregar imágenes en `assets/img/productos/`.
3. Construir `pages/menu.html`: recibe el restaurante por parámetro en la URL, muestra su encabezado y sus productos agrupados por categoría, con buscador y filtro por categoría.
4. Agregar el botón "Agregar al carrito" usando las funciones publicadas por José y mostrar un aviso visual (componente Bootstrap) al agregar.

**Puede modificar:** `data/productos.json`, `pages/menu.html`, `js/menu.js`, `css/menu.css`, `assets/img/productos/`.
**Debe evitar modificar:** `data/restaurantes.json`, `js/cart.js`, `css/styles.css`, `js/main.js`, y todo lo de los demás.

### 4.6 Diana — Frontend Developer (Checkout y Validaciones)

**Funcionalidades propias**
- Formulario de checkout (PR 1) y confirmación del pedido (PR 2).

**Tareas técnicas**
1. Construir `pages/checkout.html` con el resumen del pedido leído del carrito y un formulario de datos del cliente (nombre, teléfono, dirección, método de pago simulado y notas).
2. Implementar validaciones con Bootstrap: campos obligatorios y formato de teléfono y correo, con mensajes claros.
3. Confirmación: generar un número de pedido simulado, guardar el resumen del pedido confirmado en LocalStorage, mostrar la pantalla de confirmación con detalle y total, y vaciar el carrito.
4. Impedir confirmar un pedido si el carrito está vacío.

**Puede modificar:** `pages/checkout.html`, `js/checkout.js`, `css/checkout.css`.
**Debe evitar modificar:** `js/cart.js` (de José), `css/styles.css`, `js/main.js`, y todo lo de los demás.

### 4.7 William — UI/UX Developer

**Funcionalidades propias**
- Página de inicio (PR 1), Nosotros y Contacto (PR 2), `CONTRIBUTING.md` (PR 3).

**Tareas técnicas**
1. Construir `index.html`: portada con llamada a la acción hacia los restaurantes, sección de restaurantes destacados (leyendo `data/restaurantes.json` de Michael), sección "cómo funciona" en pasos y llamada a la acción final.
2. Construir `pages/nosotros.html` con historia ficticia de Turrazo, valores y presentación del equipo.
3. Construir `pages/contacto.html` con formulario validado, mensaje de éxito simulado (sin envío real) y datos de horarios/ubicación ficticios.
4. Redactar `CONTRIBUTING.md` con las reglas de colaboración basadas en esta guía: ramas, commits, PR, revisión, conflictos y conducta.

**Puede modificar:** `index.html`, `js/inicio.js`, `css/inicio.css`, `pages/nosotros.html`, `pages/contacto.html`, `js/contacto.js`, `css/contacto.css`, `CONTRIBUTING.md`, `assets/img/inicio/`, `assets/img/nosotros/`.
**Debe evitar modificar:** `data/*.json`, `css/styles.css`, `js/main.js`, y todo lo de los demás.

### 4.8 Regla para archivos ajenos y compartidos

- `css/styles.css` y `js/main.js` pertenecen a Britthany. Si necesitas un cambio, se lo solicitas; ella lo realiza o te autoriza a incluirlo en tu PR mencionándolo.
- Cada integrante usa **su propio** archivo CSS y JS por módulo para evitar conflictos.
- Si necesitas modificar un archivo de otro integrante, primero lo coordinas por el canal del equipo (sección 26).

### 4.9 Entregables académicos del PDF (informe y presentación)

Además del código, el proyecto exige informe y exposición. Se reparten así:

**Informe** (formato de deberes de la plataforma; contenido mínimo del PDF)

| Sección del informe | Responsable |
| ------------------- | ----------- |
| Introducción y objetivos del proyecto | Michael |
| Descripción del uso de Git y GitFlow | José |
| Detalles del repositorio (configuración, protecciones, README, `.gitignore`, CONTRIBUTING) | Britthany |
| Descripción técnica del sitio web desarrollado | Paola |
| Consolidación de evidencias (capturas de commits, ramas, PRs) | Diana |
| Revisión final de formato, portada, ortografía y referencias | William |
| Lecciones aprendidas sobre el trabajo colaborativo | Todos (un párrafo individual cada uno) |

**Presentación grupal (10 a 12 minutos)**

| Orden | Expositor | Contenido | Tiempo |
| :---: | --------- | --------- | :----: |
| 1 | Britthany | Introducción, repositorio y configuración GitFlow, layout base | 2 min |
| 2 | José | Demostración del flujo de trabajo en Git (feature → PR → revisión → merge, release y hotfix) y carrito | 2 min |
| 3 | Michael | Restaurantes y datos | 1,5 min |
| 4 | Paola | Menú y productos | 1,5 min |
| 5 | Diana | Checkout y confirmación | 1,5 min |
| 6 | William | Inicio, Nosotros, Contacto y experiencias del trabajo colaborativo (cierre) | 2 min |
| | | **Total aproximado** | **10,5 min** |

Se debe ensayar con cronómetro. El límite máximo es 12 minutos.

### 4.10 Orden de trabajo por olas

Algunas funcionalidades dependen de otras. Se trabaja en olas. Dentro de una ola, el orden de merge lo decide quien esté disponible, salvo los PR marcados como prioritarios.

| Ola | PRs incluidos | Condición |
| --- | ------------- | --------- |
| **Fase 0** | Creación del repositorio, rama `develop` y protecciones (Britthany) | Nadie crea su feature hasta que Britthany confirme por el canal del equipo que `develop` existe y está protegida. |
| **Ola 1** | Britthany: estructura (PR prioritario) y layout base (PR prioritario). José: carrito-logica. Michael: datos-restaurantes. Paola: datos-productos. Diana: checkout-formulario. William: contributing. | Se puede trabajar en paralelo. Las páginas se integran con el layout cuando este esté en `develop`. |
| **Ola 2** | José: carrito-vista. Michael: listado-restaurantes. Paola: menu-productos. Diana: pedido-confirmacion. William: pagina-inicio. | Crear la rama desde `develop` actualizado, con la Ola 1 ya integrada. |
| **Ola 3** | William: nosotros-contacto. Michael: readme. | Se hace al final para que el README refleje el proyecto terminado. |
| **Release** | `release/1.0.0` (sección 17) | Solo cuando los 14 PRs estén integrados en `develop`. |

---

## 5. Estructura GitFlow del proyecto

| Rama | Para qué sirve | Se crea desde | Se integra en | Quién trabaja en ella |
| ---- | -------------- | ------------- | ------------- | --------------------- |
| `main` | Versión estable de producción. Solo contiene versiones publicadas. | Creada al iniciar el repositorio | — | Nadie directamente. Solo recibe PR de `release/*` y `hotfix/*`. |
| `develop` | Rama de integración: reúne todas las funcionalidades terminadas y revisadas. | `main` | `release/*` | Nadie directamente. Solo recibe PR de `feature/*`. |
| `feature/*` | Desarrollo de una funcionalidad concreta. Una rama por funcionalidad. | `develop` | `develop` (mediante PR) | El autor de la funcionalidad. |
| `release/*` | Preparación de una versión: pruebas finales y correcciones menores. | `develop` | `main` y luego `develop` | Todo el equipo, solo con correcciones (sección 17). |
| `hotfix/*` | Corrección urgente de un error crítico encontrado en `main`. | `main` | `main` y luego `develop` | Quien corresponda al módulo afectado, coordinado. |

### Fase 0 — Configuración inicial del repositorio (solo Britthany)

Es la única fase donde se permite crear estructura sin PR, y solo lo indicado aquí.

1. Crear el repositorio `turrazo-restaurant` en GitHub, marcando la opción **Add a README file** (esto genera el commit inicial en `main` sin push manual).
2. Crear la rama `develop` desde `main` (desde la interfaz de GitHub o con `git push origin develop`).
3. Agregar como colaboradores a los otros 5 integrantes con permiso de escritura. Verificar que el docente tenga acceso de lectura.
4. Configurar protección de `main` y `develop`: exigir Pull Request, exigir al menos 1 aprobación, bloquear force push y bloquear eliminación de la rama, y no permitir que los administradores se salten las reglas. *(Si el plan de GitHub no permite estas protecciones, la regla se cumple igualmente por disciplina del equipo.)*
5. Establecer `develop` como rama por defecto, para que los PR apunten ahí de forma predeterminada.
6. Completar `[URL_DEL_REPOSITORIO]` en este documento (vía PR) y comunicar la URL al equipo.

---

## 6. REGLAS DE RAMAS

### RAMAS PROTEGIDAS

> ## **NO TOCAR DIRECTAMENTE main NI develop.**

#### main

- Es la rama de producción/estable.
- **NO se desarrolla directamente aquí.**
- Ningún integrante debe hacer `git push` directamente.
- No se deben crear commits manuales directamente sobre `main`.
- Los cambios llegan únicamente mediante Pull Request.
- Solo se utiliza para versiones estables.
- Los merges deben realizarse únicamente mediante el flujo establecido: `release/*` → `main` y `hotfix/*` → `main`.

#### develop

- Es la rama de integración.
- **NO se debe desarrollar directamente sobre `develop`.**
- Cada integrante debe crear su `feature/*` desde `develop`.
- Los cambios llegan mediante Pull Request.
- No hacer trabajo directamente sobre `develop`, ni siquiera "cambios pequeños".

#### Ramas donde sí se trabaja

| Rama | Quién puede modificarla |
| ---- | ----------------------- |
| `feature/<tu-nombre>-*` | Solo su autor. Otros solo con coordinación previa. |
| `release/*` | Todo el equipo, únicamente con commits `fix:`/`docs:` coordinados. |
| `hotfix/*` | Quien corrija el error, coordinado con el equipo. |

---

## 7. Ramas que debe crear cada integrante

Cada integrante crea **exactamente** las ramas indicadas, **siempre desde `develop` actualizado**, y solo cuando llegue la ola correspondiente (sección 4.10).

Comandos base para crear cualquier rama feature:

```
git checkout develop
git pull origin develop
git checkout -b feature/nombre-funcionalidad
```

| Integrante | Ola | Rama a crear | Se crea desde |
| ---------- | :-: | ------------ | ------------- |
| **Britthany** | 1 | `feature/britthany-estructura-repositorio` | `develop` |
| | 1 | `feature/britthany-layout-base` | `develop` |
| **José** | 1 | `feature/jose-carrito-logica` | `develop` |
| | 2 | `feature/jose-carrito-vista` | `develop` |
| **Michael** | 1 | `feature/michael-datos-restaurantes` | `develop` |
| | 2 | `feature/michael-listado-restaurantes` | `develop` |
| | 3 | `feature/michael-readme` | `develop` |
| **Paola** | 1 | `feature/paola-datos-productos` | `develop` |
| | 2 | `feature/paola-menu-productos` | `develop` |
| **Diana** | 1 | `feature/diana-checkout-formulario` | `develop` |
| | 2 | `feature/diana-pedido-confirmacion` | `develop` |
| **William** | 1 | `feature/william-contributing` | `develop` |
| | 2 | `feature/william-pagina-inicio` | `develop` |
| | 3 | `feature/william-nosotros-contacto` | `develop` |

**Ramas de release y hotfix:** `release/1.0.0` la crea Britthany (sección 17). Los `hotfix/*` se crean solo si aparece un error crítico (sección 18).

---

## 8. Reglas para trabajar en feature

### Paso 0 — Preparación (una sola vez por integrante)

- Clonar el repositorio: `git clone [URL_DEL_REPOSITORIO]`.
- Configurar identidad **igual a tu cuenta de GitHub**, para que tus commits queden atribuidos a ti:
  ```
  git config user.name "Tu Nombre"
  git config user.email "correo-de-tu-cuenta-github"
  ```

### Pasos por cada feature

1. **Actualizar `develop`:** `git checkout develop` y `git pull origin develop`.
2. **Crear la feature desde `develop`:** `git checkout -b feature/nombre-funcionalidad`.
3. **Trabajar exclusivamente en la feature.** Verifica con `git branch --show-current` que estás en tu rama.
4. **Realizar los cambios** solo sobre los archivos que te corresponden (sección 4).
5. **Probar** la funcionalidad en el navegador (revisar también la consola del navegador y la vista móvil).
6. **Revisar tus cambios** con `git status` y `git diff` antes de confirmar.
7. **Hacer commit** con la convención de la sección 10. Mínimo **3 commits significativos por feature**, cada uno con un solo propósito.
8. **Hacer push:** `git push -u origin feature/nombre-funcionalidad` (la primera vez) y `git push` después.
9. **Crear Pull Request** hacia `develop`, con la plantilla de la sección 11 y el revisor asignado.
10. **Esperar revisión.** No sigas mezclando trabajo nuevo en el PR mientras se revisa.
11. **Corregir observaciones** si existen, en la misma rama (sección 12).
12. **Obtener aprobación** del revisor.
13. **Merge:** lo realiza el responsable autorizado (sección 14), no el autor.

> **No se hace merge inmediatamente sin revisión.** Un PR sin revisión y aprobación no se integra, sin excepciones.

### Cuándo hacer commit

- Al terminar una unidad de trabajo pequeña y coherente (una sección de la página, una función, un ajuste de estilos).
- Antes de cambiar de tarea.
- Antes de actualizar tu rama con `develop`.
- Nunca al final del día con todo el trabajo junto en un único commit gigante.

### Cuándo hacer push

- Al menos al terminar cada sesión de trabajo, para respaldar tu avance.
- Siempre antes de crear el PR.
- Solo después de pasar la checklist de la sección 23.

---

## 9. Convención de nombres de ramas

Formato obligatorio, todo en **minúsculas, sin tildes, sin espacios y con guiones**:

| Tipo | Formato | Ejemplos reales del proyecto |
| ---- | ------- | ---------------------------- |
| Feature | `feature/<nombre>-<funcionalidad>` | `feature/paola-menu-productos`, `feature/diana-checkout-formulario`, `feature/jose-carrito-logica` |
| Release | `release/<x.x.x>` | `release/1.0.0` |
| Hotfix | `hotfix/<descripcion-del-error>` | `hotfix/total-carrito-incorrecto` *(ejemplo)* |
| Tag de versión | `v<x.x.x>` | `v1.0.0` |

Reglas:
- `<nombre>` es tu **primer nombre**: `britthany`, `jose`, `michael`, `paola`, `diana`, `william`.
- La funcionalidad se describe con 2 a 4 palabras.
- No usar nombres como `feature/prueba`, `feature/nueva` o `feature/cambios`.

---

## 10. Convención de commits

Formato: `tipo: descripcion breve en minusculas, en presente y sin punto final`. Máximo 72 caracteres. Un commit = un propósito.

| Tipo | Cuándo usarlo | Ejemplo del proyecto |
| ---- | ------------- | -------------------- |
| `feat:` | Se agrega una funcionalidad o una parte visible de ella. | `feat: agregar navbar responsive con contador del carrito` |
| `fix:` | Se corrige un error. | `fix: corregir total del carrito al cambiar la cantidad` |
| `refactor:` | Se reorganiza código sin cambiar su comportamiento. | `refactor: separar funciones de LocalStorage del carrito` |
| `test:` | Se agregan o modifican casos de prueba (en este proyecto, principalmente pruebas manuales documentadas en `docs/pruebas/`). | `test: agregar casos de prueba manual del formulario de checkout` |
| `docs:` | Cambios solo en documentación. | `docs: completar seccion de instalacion en el README` |
| `chore:` | Tareas de mantenimiento, configuración o estructura. | `chore: agregar .gitignore para Node.js, Python y Java` |

Más ejemplos por funcionalidad:

- `feat: crear listado de restaurantes con filtro por tipo de cocina`
- `feat: agregar buscador de productos en la pagina de menu`
- `feat: generar numero de pedido simulado en la confirmacion`
- `fix: corregir validacion del formato de telefono en checkout`
- `chore: crear estructura base de carpetas del proyecto`

**Mensajes prohibidos:** `cambio`, `prueba`, `cosas`, `arreglo`, `listo`, `update`, `fix`, `asdf`, o cualquier mensaje que no diga qué se hizo.

---

## 11. Pull Requests

### Cuándo crear un PR

Se crea **un PR por feature**, cuando se cumplen todas estas condiciones:

1. La funcionalidad está terminada y probada.
2. Todos los commits están subidos con `git push`.
3. Actualizaste tu rama con `develop` y no hay conflictos (sección 15).
4. Pasaste la checklist de la sección 24.

Cada integrante realiza **mínimo 2 Pull Requests**. La distribución completa está en la sección 12.

### Configuración del PR en GitHub

- **Base (destino):** `develop`. *(Releases y hotfix tienen otro destino, ver secciones 17 y 18.)*
- **Compare (origen):** tu rama `feature/...`.
- **Título:** sigue la convención de commits, por ejemplo `feat: agregar menu por restaurante con buscador y filtros`.
- **Assignee:** el autor.
- **Reviewers:** el revisor que figura en la sección 12.

### Plantilla de descripción del PR

```markdown
## Titulo
<tipo>: <resumen de la funcionalidad>

## Funcionalidad desarrollada
<Que hace esta funcionalidad y por que existe>

## Rama
feature/<nombre-funcionalidad> -> develop

## Cambios realizados
- <Cambio 1>
- <Cambio 2>
- <Cambio 3>

## Archivos modificados o creados
- <ruta/archivo>
- <ruta/archivo>

## Pruebas realizadas
- [ ] <Prueba 1: que se probo y con que resultado>
- [ ] <Prueba 2>
- [ ] Revise la consola del navegador: sin errores
- [ ] Probe en vista movil y de escritorio

## Evidencia
<Capturas de pantalla o GIF de la funcionalidad funcionando>

## Dependencias o avisos al equipo
<Funciones, datos o archivos que otros integrantes usaran; o "Ninguno">

## Revisor asignado
@<usuario-github-del-revisor>

## Checklist del autor
- [ ] Probe la funcionalidad
- [ ] Mi rama esta actualizada con develop
- [ ] No hay archivos ajenos a mi funcionalidad
- [ ] No hay credenciales ni archivos innecesarios
```

---

## 12. REVISIÓN DE CÓDIGO

### Tabla de revisión cruzada

La revisión es cruzada: **nadie revisa ni aprueba su propio PR**. Cada PR tiene un revisor asignado y un responsable de merge distinto del autor y del revisor.

| Autor del PR | Revisor | PR | Merge realizado por |
| ------------ | ------- | -- | ------------------- |
| Britthany | William | `feature/britthany-estructura-repositorio` | José |
| Britthany | Michael | `feature/britthany-layout-base` | José |
| José | Diana | `feature/jose-carrito-logica` | Britthany |
| José | Paola | `feature/jose-carrito-vista` | Britthany |
| Michael | José | `feature/michael-datos-restaurantes` | Britthany |
| Michael | Paola | `feature/michael-listado-restaurantes` | José |
| Michael | William | `feature/michael-readme` | Britthany |
| Paola | Britthany | `feature/paola-datos-productos` | José |
| Paola | José | `feature/paola-menu-productos` | Britthany |
| Diana | Michael | `feature/diana-checkout-formulario` | José |
| Diana | Paola | `feature/diana-pedido-confirmacion` | Britthany |
| William | Michael | `feature/william-contributing` | José |
| William | Britthany | `feature/william-pagina-inicio` | José |
| William | Diana | `feature/william-nosotros-contacto` | Britthany |
| Britthany | Diana | PR `release/1.0.0` → `main` | José |
| José | William | PR `main` → `develop` (sincronización tras release) | Britthany |

**Carga de revisión por integrante (PRs de feature):** Britthany 2, José 2, Michael 3, Paola 3, Diana 2, William 2.

### Qué debe revisar el revisor

- **Código:** legible, ordenado, sin código comentado innecesario, sin duplicados.
- **Funcionamiento:** descargar la rama del PR, abrir el sitio y probar la funcionalidad de verdad.
- **Errores:** revisar la consola del navegador y casos límite (carrito vacío, campos vacíos, datos faltantes).
- **Convenciones:** nombre de rama, mensajes de commit y estructura de archivos.
- **Archivos modificados:** que solo aparezcan los archivos de la funcionalidad, sin cambios ajenos.
- **Posibles conflictos:** que la rama esté actualizada con `develop`.
- **Pruebas:** que la sección "Pruebas realizadas" sea real y suficiente.

### Cómo dejar evidencia de la revisión

Toda revisión se hace desde **Files changed → Review changes** en GitHub y debe incluir:

- Al menos **2 comentarios en línea** sobre el código (observaciones, sugerencias o reconocimientos concretos).
- Un comentario general de resumen.
- Una decisión explícita: **Approve** o **Request changes**.
- Plazo recomendado de revisión: 24 horas desde que se avisa al revisor.

### Qué hace el autor si el revisor solicita cambios

1. Lee todos los comentarios y responde cada uno (acepta, explica o pregunta).
2. Hace las correcciones **en la misma rama**, con nuevos commits (`fix:` o el tipo que corresponda).
3. Hace `git push` a la misma rama. El PR se actualiza solo. **No se crea un PR nuevo y no se usa force push.**
4. Marca cada conversación como resuelta cuando corresponda.
5. Vuelve a solicitar la revisión al mismo revisor.
6. Espera la aprobación. Solo entonces se puede solicitar el merge.

Si autor y revisor no están de acuerdo, lo resuelven por el canal del equipo; si no llegan a un acuerdo, deciden Britthany y José.

---

## 13. CUÁNDO SE PUEDE HACER MERGE

Un PR **solamente** puede hacerse merge cuando se cumplen **todas** estas condiciones:

- [ ] La funcionalidad está terminada.
- [ ] El código fue probado.
- [ ] El PR tiene descripción completa (plantilla de la sección 11).
- [ ] Otro integrante realizó la revisión (el revisor asignado).
- [ ] Se corrigieron las observaciones.
- [ ] El revisor aprobó (Approve en GitHub).
- [ ] No existen conflictos pendientes.
- [ ] Las pruebas necesarias funcionan.

> **NO se hace merge solamente porque "ya funciona en mi computadora".** Que funcione localmente no reemplaza la revisión, la aprobación ni las pruebas del revisor.

---

## 14. Quién realiza el merge

Solo tienen autorización para ejecutar merge:

- **Britthany Pico**
- **José Taipe**

Reglas:

1. El **autor** crea el PR.
2. Otro integrante (**el revisor**) lo revisa y lo aprueba.
3. El **responsable autorizado** verifica la checklist de la sección 25 y realiza el merge.
4. Nadie fusiona su propio PR. Los PR de Britthany los fusiona José y los de José los fusiona Britthany.
5. Idealmente, el responsable del merge no es el mismo que revisó. La tabla de la sección 12 ya lo respeta.
6. Método de merge en GitHub: **Create a merge commit** (no squash ni rebase and merge), para conservar los commits individuales de cada integrante como evidencia.
7. **Las ramas feature no se eliminan** después del merge hasta que el informe y las evidencias estén entregados. Solo Britthany o José pueden eliminarlas después, con aviso al equipo.

---

## 15. Actualización de las ramas

### Antes de comenzar una tarea

```
git checkout develop
git pull origin develop
git checkout -b feature/mi-funcionalidad
```

Si la rama ya existe y vuelves a trabajar en ella:

```
git checkout develop
git pull origin develop
git checkout feature/mi-funcionalidad
```

### Cuando `develop` avanzó mientras trabajas

Ocurre cuando otro PR se integró después de que creaste tu rama. Debes traer esos cambios a tu feature **antes de crear el PR** y periódicamente durante el trabajo:

1. Guarda tu trabajo: `git add` y `git commit` (o `git stash` si no está listo para commit).
2. Trae lo último del remoto: `git fetch origin`.
3. Actualiza tu copia de `develop`: `git checkout develop` y `git pull origin develop`.
4. Vuelve a tu rama: `git checkout feature/mi-funcionalidad`.
5. Integra `develop` en tu rama:
   ```
   git merge develop
   ```
6. Si hay conflictos, sigue la sección 16.
7. Prueba de nuevo tu funcionalidad y haz `git push`.

### Mecanismo definido por el equipo: `git merge develop`

El equipo usa **`git merge develop`** para actualizar las features. **No se usa `git rebase` sobre ramas compartidas.**

> **Riesgo del rebase:** reescribe el historial de commits. Si alguien más ya descargó esas ramas, sus copias quedan inconsistentes, se pueden duplicar o perder commits y suele obligar a hacer force push, lo cual está prohibido. Como este proyecto se evalúa por la trazabilidad de commits, no se utiliza rebase.

---

## 16. Manejo de conflictos

Un conflicto aparece cuando dos personas modificaron las mismas líneas de un archivo. Sigue estos pasos:

1. **Actualiza `develop`:** `git checkout develop` y `git pull origin develop`. Luego vuelve a tu rama y ejecuta `git merge develop`.
2. **Identifica el conflicto:** Git indicará los archivos afectados. Confírmalos con `git status` (aparecen como *both modified*).
3. **Revisa qué cambios pertenecen a cada integrante:** abre el archivo. Las marcas `<<<<<<<`, `=======` y `>>>>>>>` separan tu versión de la versión de `develop`. Usa `git log develop -- <archivo>` para saber quién hizo el otro cambio.
4. **Coordina con el autor del otro cambio** por el canal del equipo antes de decidir. Si el archivo es de otro integrante o es compartido (`styles.css`, `main.js`), la decisión es conjunta.
5. **Resuelve manualmente:** deja el contenido final correcto y elimina las marcas de conflicto.
6. **Prueba** que el sitio funciona y que ambas funcionalidades siguen operando.
7. **Marca como resuelto y crea el commit de resolución:**
   ```
   git add <archivo-resuelto>
   git commit -m "chore: resolver conflicto con develop en <archivo>"
   ```
8. **Actualiza el PR:** `git push`. Avisa al revisor de que hubo conflicto y cómo se resolvió.

Reglas:
- **Nunca elimines cambios de otro integrante sin revisarlos y hablarlo con él.**
- Si te pierdes durante la resolución, cancela con `git merge --abort` y pide ayuda a Britthany o José.
- Resuelve siempre en tu computadora, no con el editor web de GitHub.
- Comunica el conflicto **inmediatamente** (sección 26).

---

## 17. RELEASE

### Cuándo se crea `release/1.0.0`

Cuando los **14 PRs de feature** están integrados en `develop` y el sitio funciona completo. Si hay una funcionalidad pendiente, no se crea la release.

### Responsables

| Acción | Responsable |
| ------ | ----------- |
| Crear `release/1.0.0` | Britthany |
| Probar la release | Todo el equipo (pruebas cruzadas, ver tabla) |
| Corregir errores encontrados en la release | El dueño del módulo afectado, coordinado |
| Hacer merge de la release a `main` | José |
| Crear el tag `v1.0.0` | José |
| Sincronizar `develop` con `main` | PR creado por José, merge por Britthany |

### Desde qué rama y cómo se crea

Desde `develop` actualizado:

```
git checkout develop
git pull origin develop
git checkout -b release/1.0.0
git push -u origin release/1.0.0
```

### Qué cambios puede contener

- **Solo:** correcciones de errores (`fix:`), ajustes de documentación (`docs:`) y actualización de textos de versión.
- **Nunca:** funcionalidades nuevas. Si se te ocurre una mejora, va a `develop` en una versión futura.

Para corregir un error en la release, el dueño del módulo avisa por el canal del equipo y:

```
git checkout release/1.0.0
git pull origin release/1.0.0
# corregir y probar
git add <archivos>
git commit -m "fix: <descripcion del error corregido>"
git push origin release/1.0.0
```

Una persona a la vez sobre la rama de release, sin force push.

### Pruebas de la release (cruzadas: nadie prueba su propio módulo)

| Quién prueba | Qué prueba |
| ------------ | ---------- |
| Britthany | Navegación, enlaces y diseño responsive en todas las páginas (móvil, tablet, escritorio). |
| José | Recorrido restaurantes → menú → agregar al carrito (integración de módulos). |
| Michael | Carrito: agregar, cambiar cantidades, quitar y que persista al recargar la página. |
| Paola | Checkout y confirmación: validaciones, número de pedido y carrito vaciado. |
| Diana | Inicio, Nosotros y Contacto: enlaces, textos y formulario. |
| William | Menú: buscador, filtros y datos JSON completos; consola del navegador sin errores. |

Los errores se reportan por el canal del equipo con: página, pasos para reproducir y captura.

### Integración a `main`

1. Con las pruebas aprobadas, Britthany crea el PR con base `main` y compare `release/1.0.0` (revisor: Diana).
2. Tras la aprobación, José hace el merge.

### Etiquetado de la versión

José, después del merge a `main`:

```
git checkout main
git pull origin main
git tag -a v1.0.0 -m "Turrazo Restaurant v1.0.0 - primera version estable"
git push origin v1.0.0
```

### Integración de nuevo a `develop`

Se crea un PR con base `develop` y compare `main` (creado por José, revisado por William, merge por Britthany), para que `develop` contenga las correcciones hechas en la release. Después, la rama `release/1.0.0` se elimina con autorización de Britthany o José.

---

## 18. HOTFIX

### Cuándo se usa

**Únicamente** para errores **críticos** detectados en la versión estable (`main`), por ejemplo que el flujo de compra deje de funcionar o que el sitio no cargue. Los errores menores se corrigen en `develop` mediante una feature normal.

> Para efectos de evidencia académica (el PDF exige mostrar la estructura `hotfix`), el equipo puede registrar como hotfix un error real, aunque sea menor, detectado durante las pruebas de la release. No se inventan errores falsos.

### Flujo

```
main
  ↓
hotfix/error
  ↓
main
  ↓
develop
```

### Comandos de ejemplo

```
git checkout main
git pull origin main
git checkout -b hotfix/total-carrito-incorrecto
# corregir y probar
git add <archivos>
git commit -m "fix: corregir total del carrito en la version estable"
git push -u origin hotfix/total-carrito-incorrecto
```

Luego:

1. Crear PR con base `main` y compare `hotfix/...`, con revisor distinto del autor.
2. Tras la aprobación, Britthany o José (no el autor) hace el merge.
3. José etiqueta la nueva versión:
   ```
   git checkout main
   git pull origin main
   git tag -a v1.0.1 -m "Hotfix: total del carrito incorrecto"
   git push origin v1.0.1
   ```
4. Crear PR con base `develop` y compare `main` (o `hotfix/...`) para que la corrección no se pierda.
5. Si existe una rama `release/*` abierta, el hotfix también debe integrarse en ella.

---

## 19. FLUJO COMPLETO DE TRABAJO

Ejemplo real con la rama `feature/jose-carrito-logica` (el mismo procedimiento aplica a todos):

1. **Actualizar develop:** `git checkout develop` y `git pull origin develop`.
2. **Crear feature:** `git checkout -b feature/jose-carrito-logica`.
3. **Trabajar:** modificar solo `js/cart.js`. Probar en el navegador.
4. **Commit:** `git add js/cart.js` y `git commit -m "feat: agregar funciones para agregar y quitar productos del carrito"`. Repetir con commits pequeños.
5. **Push:** `git push -u origin feature/jose-carrito-logica`.
6. **Crear PR** hacia `develop`, con la plantilla completa y revisor Diana.
7. **Revisión:** Diana prueba la rama y deja comentarios.
8. **Correcciones:** José responde, corrige con nuevos commits y hace `git push` a la misma rama.
9. **Aprobación:** Diana aprueba.
10. **Merge a develop:** Britthany verifica la checklist y fusiona.
11. **Actualizar nuevamente el proyecto:** `git checkout develop` y `git pull origin develop`.
12. **Continuar con otra feature:** crear `feature/jose-carrito-vista` desde `develop` actualizado.
13. **Crear release:** cuando los 14 PRs estén en `develop`, Britthany crea `release/1.0.0`.
14. **Probar:** pruebas cruzadas de la sección 17.
15. **Merge a main:** PR `release/1.0.0` → `main`, aprobado por Diana y fusionado por José.
16. **Crear tag:** José crea y sube `v1.0.0`.
17. **Sincronizar develop:** PR `main` → `develop`.
18. **Hotfix:** solo si aparece un error crítico en `main` (sección 18).

---

## 20. QUÉ NO SE DEBE HACER

- No trabajar directamente en `main`.
- No trabajar directamente en `develop`.
- No hacer push directo a `main`.
- No hacer push directo a `develop`.
- No hacer merge de un PR sin revisión.
- No aprobar el propio PR.
- No fusionar el propio PR.
- No borrar ramas de compañeros sin autorización.
- No subir contraseñas ni credenciales.
- No subir archivos `.env`.
- No subir `node_modules`.
- No subir archivos generados innecesariamente (temporales, copias de respaldo, archivos del sistema o del editor).
- No subir imágenes sin optimizar o de tamaño excesivo.
- No realizar commits gigantes que mezclen muchas funcionalidades.
- No modificar código de otro integrante sin coordinación.
- No sobrescribir cambios de otro compañero.
- No hacer force push (`git push --force`) sobre ramas compartidas.
- No usar `git rebase` sobre ramas compartidas.
- No usar `git reset --hard` sobre ramas que ya subiste.
- No hacer commits con mensajes como "cambio", "prueba", "cosas", "arreglo", "listo" o similares.
- No editar `css/styles.css` ni `js/main.js` sin coordinar con Britthany.
- No crear ramas con nombres que no sigan la convención.

---

## 21. EVIDENCIAS OBLIGATORIAS

Cada integrante guarda sus propias capturas, **por cada uno de sus PRs**. Sirven para el informe (Diana las consolida) y para la presentación.

**Nombre de archivo:** `<nombre>-<rama-corta>-<NN>-<descripcion>.png`, por ejemplo `paola-menu-01-creacion-rama.png`.

### Qué capturar por cada PR

| N.º | Evidencia | Qué debe verse |
| :-: | --------- | -------------- |
| 01 | Creación de la rama | Terminal con `git checkout -b ...` desde `develop`. |
| 02 | Rama utilizada | `git branch --show-current` o `git status` mostrando tu feature. |
| 03 | Commits realizados | `git log --oneline` con tus commits y sus mensajes. |
| 04 | Push | Terminal con el resultado de `git push`. |
| 05 | Pull Request | Página del PR con título, descripción, base, compare y revisor. |
| 06 | Comentarios del revisor | Conversación del PR con los comentarios. |
| 07 | Correcciones solicitadas | Tus respuestas y los commits posteriores a la revisión. |
| 08 | Aprobación | El estado Approved del revisor. |
| 09 | Merge | El PR marcado como Merged y quién lo fusionó. |
| 10 | Resultado de la funcionalidad | La funcionalidad funcionando en el navegador. |
| 11 | Revisiones que realizaste | Tus comentarios y decisión en los PR que revisaste. |

### Checklist individual de evidencias (repetir por cada PR)

```
PR: feature/______________________

[ ] 01 Creación de la rama
[ ] 02 Rama utilizada
[ ] 03 Commits realizados (mínimo 3)
[ ] 04 Push
[ ] 05 Pull Request creado
[ ] 06 Comentarios del revisor
[ ] 07 Correcciones realizadas
[ ] 08 Aprobación
[ ] 09 Merge
[ ] 10 Resultado de la funcionalidad
[ ] 11 Evidencia de las revisiones que realicé
```

**Entrega de evidencias:** cada integrante entrega sus capturas a Diana en la carpeta compartida del equipo `[ENLACE_CARPETA_COMPARTIDA]`. *(Definir el enlace en la Fase 0.)*

---

## 22. RESPONSABILIDADES INDIVIDUALES

### Integrante 1 — Pico Coello Britthany Korayma

**Rol:** DevOps / Release Manager y Frontend Developer

**Debe desarrollar**
- Estructura del repositorio, `.gitignore` con 3 tecnologías justificadas y guía en `docs/`.
- Layout base: Bootstrap, estilos globales, navbar, footer y `main.js`.

**Ramas**
- `feature/britthany-estructura-repositorio`
- `feature/britthany-layout-base`

**Debe crear**
- PR 1: `feature/britthany-estructura-repositorio` → `develop`
- PR 2: `feature/britthany-layout-base` → `develop`
- PR de release `release/1.0.0` → `main`

**Debe revisar**
- PR `feature/paola-datos-productos` (Paola).
- PR `feature/william-pagina-inicio` (William).

**Debe hacer merge de**
- PRs de José (2), Michael (`datos-restaurantes`, `readme`), Paola (`menu-productos`), Diana (`pedido-confirmacion`), William (`nosotros-contacto`) y la sincronización `main` → `develop`.

**Responsabilidades adicionales:** Fase 0 del repositorio, creación de `release/1.0.0`, sección "Detalles del repositorio" del informe.

**Evidencias:** las de los pasos 01 a 11 por cada PR, más capturas de la configuración del repositorio, protecciones de rama y la rama `release/1.0.0`.

### Integrante 2 — Taipe Bravo José Francisco

**Rol:** Full Stack Developer y Merge Manager

**Debe desarrollar**
- Lógica del carrito con LocalStorage.
- Vista del carrito.

**Ramas**
- `feature/jose-carrito-logica`
- `feature/jose-carrito-vista`

**Debe crear**
- PR 1: `feature/jose-carrito-logica` → `develop`
- PR 2: `feature/jose-carrito-vista` → `develop`
- PR de sincronización `main` → `develop`

**Debe revisar**
- PR `feature/michael-datos-restaurantes` (Michael).
- PR `feature/paola-menu-productos` (Paola).

**Debe hacer merge de**
- PRs de Britthany (2), Michael (`listado-restaurantes`), Paola (`datos-productos`), Diana (`checkout-formulario`), William (`contributing`, `pagina-inicio`) y el PR de `release/1.0.0`.

**Responsabilidades adicionales:** crear los tags `v1.0.0` (y `v1.0.1` si hay hotfix), sección "Uso de Git y GitFlow" del informe, demostración en vivo del flujo en la presentación.

**Evidencias:** las de los pasos 01 a 11 por cada PR, más capturas de los tags y de los merges que ejecutó.

### Integrante 3 — Rosillo Cordova Michael Steve

**Rol:** Data & Frontend Developer

**Debe desarrollar**
- Datos de restaurantes.
- Listado de restaurantes con filtros.
- `README.md`.

**Ramas**
- `feature/michael-datos-restaurantes`
- `feature/michael-listado-restaurantes`
- `feature/michael-readme`

**Debe crear**
- PR 1: `feature/michael-datos-restaurantes` → `develop`
- PR 2: `feature/michael-listado-restaurantes` → `develop`
- PR 3: `feature/michael-readme` → `develop`

**Debe revisar**
- PR `feature/britthany-layout-base` (Britthany).
- PR `feature/diana-checkout-formulario` (Diana).
- PR `feature/william-contributing` (William).

**Responsabilidades adicionales:** sección "Introducción y objetivos" del informe; prueba cruzada del carrito en la release.

**Evidencias:** las de los pasos 01 a 11 por cada uno de sus 3 PRs.

### Integrante 4 — Taipe Tixilema Paola Alexandra

**Rol:** Frontend Developer (Catálogo y Menú)

**Debe desarrollar**
- Datos de productos.
- Página de menú con buscador y filtros.

**Ramas**
- `feature/paola-datos-productos`
- `feature/paola-menu-productos`

**Debe crear**
- PR 1: `feature/paola-datos-productos` → `develop`
- PR 2: `feature/paola-menu-productos` → `develop`

**Debe revisar**
- PR `feature/jose-carrito-vista` (José).
- PR `feature/michael-listado-restaurantes` (Michael).
- PR `feature/diana-pedido-confirmacion` (Diana).

**Responsabilidades adicionales:** sección "Descripción técnica del sitio web" del informe; prueba cruzada de checkout en la release.

**Evidencias:** las de los pasos 01 a 11 por cada PR.

### Integrante 5 — Tituaña Capiña Diana Pamela

**Rol:** Frontend Developer (Checkout y Validaciones)

**Debe desarrollar**
- Formulario de checkout con validaciones.
- Confirmación del pedido simulado.

**Ramas**
- `feature/diana-checkout-formulario`
- `feature/diana-pedido-confirmacion`

**Debe crear**
- PR 1: `feature/diana-checkout-formulario` → `develop`
- PR 2: `feature/diana-pedido-confirmacion` → `develop`

**Debe revisar**
- PR `feature/jose-carrito-logica` (José).
- PR `feature/william-nosotros-contacto` (William).
- PR de `release/1.0.0` → `main` (Britthany).

**Responsabilidades adicionales:** consolidar todas las evidencias para el informe; prueba cruzada de inicio, Nosotros y Contacto en la release.

**Evidencias:** las de los pasos 01 a 11 por cada PR.

### Integrante 6 — Vargas Carrera William Francisco

**Rol:** UI/UX Developer

**Debe desarrollar**
- Página de inicio.
- Nosotros y Contacto con formulario validado.
- `CONTRIBUTING.md`.

**Ramas**
- `feature/william-contributing`
- `feature/william-pagina-inicio`
- `feature/william-nosotros-contacto`

**Debe crear**
- PR 1: `feature/william-contributing` → `develop`
- PR 2: `feature/william-pagina-inicio` → `develop`
- PR 3: `feature/william-nosotros-contacto` → `develop`

**Debe revisar**
- PR `feature/britthany-estructura-repositorio` (Britthany).
- PR `feature/michael-readme` (Michael).
- PR de sincronización `main` → `develop` (José).

**Responsabilidades adicionales:** revisión final de formato del informe; prueba cruzada del menú en la release; cierre de la presentación.

**Evidencias:** las de los pasos 01 a 11 por cada uno de sus 3 PRs.

---

## 23. CHECKLIST ANTES DE HACER PUSH

- [ ] Estoy en mi rama feature.
- [ ] No estoy trabajando en `main`.
- [ ] No estoy trabajando directamente en `develop`.
- [ ] Probé la funcionalidad.
- [ ] Revisé mis cambios (`git status` y `git diff`).
- [ ] No incluí archivos innecesarios.
- [ ] No incluí credenciales.
- [ ] El commit tiene un mensaje correcto.
- [ ] El código no rompe funcionalidades existentes.

---

## 24. CHECKLIST ANTES DE CREAR PR

- [ ] La funcionalidad está terminada.
- [ ] La funcionalidad fue probada.
- [ ] El código está limpio.
- [ ] Los commits están correctamente nombrados.
- [ ] Mi rama está actualizada con `develop` y sin conflictos.
- [ ] La descripción del PR está completa.
- [ ] Incluí evidencias.
- [ ] No existen cambios ajenos a mi funcionalidad.
- [ ] El PR tiene el revisor asignado.

---

## 25. CHECKLIST ANTES DE MERGE

*(La completa el responsable autorizado antes de fusionar.)*

- [ ] PR revisado.
- [ ] Revisor asignado.
- [ ] Revisión completada.
- [ ] Comentarios resueltos.
- [ ] Pruebas correctas.
- [ ] No existen conflictos.
- [ ] Revisor aprobó.
- [ ] Yo no soy el autor del PR.
- [ ] Se puede realizar merge (método: merge commit).

---

## 26. REGLAS DE COMUNICACIÓN DEL EQUIPO

- Avisar **antes** de modificar archivos utilizados por otro integrante.
- Informar cuando una funcionalidad cambie una API (por ejemplo, las funciones que expone `cart.js`).
- Informar cambios en la estructura de los datos JSON.
- Avisar si una modificación puede afectar otra funcionalidad.
- Coordinar cambios estructurales (carpetas, nombres de archivos, estilos globales).
- Comunicar conflictos inmediatamente.
- Avisar por el canal del equipo cuando tu PR esté listo para revisión y cuando termines una revisión.

### Acuerdos de integración entre módulos

Estos acuerdos deben confirmarse entre los integrantes implicados **antes** de escribir sus archivos. Cualquier cambio posterior se avisa a todos.

| Acuerdo | Responsable de definirlo | Quién lo usa |
| ------- | ------------------------ | ------------ |
| Campos de `restaurantes.json`: identificador, nombre, tipo de cocina, descripción, imagen, calificación y tiempo de entrega. | Michael | Michael, Paola, William |
| Campos de `productos.json`: identificador, identificador del restaurante, nombre, descripción, categoría, precio e imagen. | Paola (coordinando con Michael) | Paola, José, Diana |
| Clave de LocalStorage del carrito: `turrazo_carrito`. | José | José, Paola, Diana |
| Clave de LocalStorage del pedido confirmado: `turrazo_pedido`. | Diana | Diana |
| Enlace al menú de un restaurante: `menu.html` con parámetro `restaurante=<id>`. | Michael y Paola | Michael, Paola, William |
| Funciones públicas de `cart.js` (agregar, quitar, cambiar cantidad, total, vaciar, contar). | José | Paola, Diana |
| Espacio del contador del carrito en la barra de navegación. | Britthany | José |

---

## 27. CRITERIO DE FINALIZACIÓN

Una tarea **NO** se considera terminada solamente porque el código fue escrito. Se considera terminada cuando:

- [ ] Está implementada.
- [ ] Funciona.
- [ ] Está probada.
- [ ] Tiene commits con mensajes correctos.
- [ ] Está subida al repositorio remoto.
- [ ] Tiene Pull Request.
- [ ] Fue revisada por el revisor asignado.
- [ ] Tiene las observaciones resueltas.
- [ ] Fue integrada correctamente en `develop` mediante merge.
- [ ] Tiene sus evidencias guardadas.

---

## 28. FLUJO VISUAL

### Flujo principal

```
main
│
└── release/*
        ↑
     develop
        │
  ┌─────┼─────┐
  ↓     ↓     ↓
feature feature feature
  │     │     │
  └── PR + REVIEW ──┘
        │
        ↓
     develop
        │
        ↓
    release/*
        │
        ↓
      main
```

### Flujo de hotfix

```
main
  ↓
hotfix/*
  ↓
main
  ↓
develop
```

---

## 29. REGLA FINAL PARA EL EQUIPO

1. `main` es estable.
2. `develop` es integración.
3. Las features se crean desde `develop`.
4. Nadie desarrolla directamente en `main`.
5. Nadie desarrolla directamente en `develop`.
6. Todo cambio funcional debe pasar por PR.
7. Todo PR debe tener revisión.
8. Nadie aprueba su propio PR.
9. Los conflictos se resuelven coordinadamente.
10. Cada integrante debe demostrar trabajo individual mediante commits, ramas y PRs.
11. El trabajo debe mantenerse organizado y trazable.