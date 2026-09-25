// Ruta a un archivo de /public/assets respetando el "base" de Vite
export const asset = (path) => `${import.meta.env.BASE_URL}assets/${path}`;
