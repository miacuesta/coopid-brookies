// Símbolo SVG reutilizable: nube de esquina (tres óvalos en diagonal)
export default function CloudDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <symbol id="cloud-corner" viewBox="0 0 320 260">
        <g fill="#F2E8D5">
          {/* 1) ovalo-esquina: el óvalo grande pegado a la esquina */}
          <ellipse id="ovalo-esquina" cx="40" cy="212" rx="80" ry="90" />
          {/* 2) circulo-medio: el círculo del medio */}
          <circle id="circulo-medio" cx="152" cy="236" r="58" />
          {/* 3) frijol-punta: el óvalo angosto e inclinado de la punta */}
          <ellipse id="frijol-punta" cx="210" cy="260" rx="34" ry="30" transform="rotate(-22 226 222)" />
        </g>
      </symbol>
    </svg>
  );
}
