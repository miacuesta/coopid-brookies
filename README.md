# coopid · Landing de brookies

Landing de **coopid** — *"El flechazo entre el brownie y la cookie."* Hecha con React + Vite.

## Cómo correrlo

```bash
npm install      # solo la primera vez
npm run dev      # http://localhost:8777
npm run build    # genera /dist para publicar
npm run preview  # sirve /dist en http://localhost:8777
```

## Estructura

```
index.html            # HTML raíz de Vite (solo <div id="root"> + fuentes de Google)
vite.config.js
public/assets/        # imágenes y fuente (se sirven en /assets/...)
src/
  main.jsx            # entrada: monta <App /> y marca la clase "js"
  App.jsx             # arma la página y activa los hooks
  styles.css          # todos los estilos (sin cambios respecto a la versión estática)
  components/         # Marquee, Nav, Hero, Brookie, Sabores, Marca, Footer, CloudCorner, CloudDefs
  hooks/              # useReveal, useSmoothScroll, useClearCaret (lo que antes era script.js)
  data/content.js     # textos y listas (sabores, links del nav y del footer, marquee)
  utils/asset.js      # helper para rutas de /public/assets
legacy/               # copia de la versión HTML/CSS/JS estática, solo de referencia
```

Para agregar un sabor o cambiar un link, editá `src/data/content.js`.
