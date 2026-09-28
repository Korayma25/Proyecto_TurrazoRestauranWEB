# Guía de contribución — Turrazo Restaurant

Este documento resume las reglas de colaboración del equipo. El detalle completo
está en [`docs/GUIA_TRABAJO_EQUIPO.md`](docs/GUIA_TRABAJO_EQUIPO.md).

## Ramas

- `main`: version estable. Nadie desarrolla ni hace push directo aqui.
- `develop`: rama de integracion. Nadie desarrolla ni hace push directo aqui.
- `feature/<nombre>-<funcionalidad>`: una rama por funcionalidad, creada desde `develop`.
- `release/x.x.x`: preparacion de una version, creada desde `develop`.
- `hotfix/<descripcion>`: correccion urgente sobre `main`.

## Flujo de trabajo

1. Actualiza `develop`: `git checkout develop && git pull origin develop`
2. Crea tu rama: `git checkout -b feature/tu-nombre-funcionalidad`
3. Trabaja solo en los archivos de tu funcionalidad.
4. Prueba tu cambio en el navegador antes de subirlo.
5. Sube tu rama: `git push -u origin feature/tu-nombre-funcionalidad`
6. Crea un Pull Request hacia `develop`, con revisor asignado.
7. Espera la aprobacion. Corrige si te piden cambios.
8. El merge lo realiza el responsable autorizado, nunca el autor del PR.

## Convencion de commits

| Tipo | Uso |
|------|-----|
| `feat:` | Nueva funcionalidad |
| `fix:` | Correccion de un error |
| `refactor:` | Cambios internos sin alterar el comportamiento |
| `test:` | Pruebas |
| `docs:` | Documentacion |
| `chore:` | Configuracion o mantenimiento |

Ejemplo: `feat: agregar formulario de contacto con validacion`

## Reglas de revision

- Cada Pull Request necesita minimo 1 revisor distinto del autor.
- Nadie aprueba ni fusiona su propio Pull Request.
- El revisor prueba la funcionalidad, no solo lee el codigo.

## Prohibido

- Trabajar o hacer push directo en `main` o `develop`.
- Hacer merge sin revision aprobada.
- Subir archivos `.env`, credenciales o `node_modules`.
- Usar `git push --force` o `git rebase` sobre ramas compartidas.
- Mensajes de commit como "cambio", "prueba" o "arreglo".

## Estructura del proyecto

Ver la seccion 2 de [`docs/GUIA_TRABAJO_EQUIPO.md`](docs/GUIA_TRABAJO_EQUIPO.md) para el detalle completo de carpetas.

## Estilos y scripts compartidos

- Enlaza siempre en este orden en el `<head>`: Bootstrap 5 → `css/styles.css` → tu CSS de modulo.
- Enlaza siempre al final del `<body>`: Bootstrap JS → `js/main.js` → tu JS de modulo.
- No modifiques `css/styles.css` ni `js/main.js` sin coordinar con Britthany.
- Para actualizar el contador del carrito despues de un cambio, dispara:
```javascript
  document.dispatchEvent(new CustomEvent('carritoActualizado'));
```