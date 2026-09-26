import { useEffect, useState } from 'react';
import CloudCorner from './CloudCorner';
import { flavors } from '../data/content';
import { asset } from '../utils/asset';

const SLIDE_MS = 3000;
const VISIBLE_SIDE = 3; // cuántas tarjetas se dibujan a cada lado de la activa
const SIDE_SCALE = 0.72; // tamaño de las tarjetas que no se presentan (todas iguales)
const mod = (n, m) => ((n % m) + m) % m;

// Posición horizontal de la tarjeta a "d" lugares de la activa (la activa es grande, las demás chicas)
function slideTransform(d) {
  if (d === 0) return 'translateX(0) scale(1)';
  const sign = Math.sign(d);
  const n = Math.abs(d);
  const pct = (0.5 + SIDE_SCALE / 2 + (n - 1) * SIDE_SCALE) * 100;
  return `translateX(calc(${sign * pct}% + ${sign * n} * var(--gap))) scale(${SIDE_SCALE})`;
}

function Flavor({ flavor }) {
  return (
    <article className="flavor">
      <div className="flavor__img">
        <img src={asset(flavor.img)} alt={flavor.alt} style={{ objectPosition: flavor.position }} />
      </div>
      <div className="flavor__body">
        <h3>{flavor.title}</h3>
        <p>{flavor.text}</p>
      </div>
    </article>
  );
}

export default function Sabores() {
  // "step" crece sin parar (puede ser negativo): así el carrusel es infinito y nunca "rebobina"
  const [step, setStep] = useState(0);
  const total = flavors.length;
  const current = mod(step, total);

  // Cada sabor dura 3 segundos; al elegir uno a mano, el conteo vuelve a empezar
  useEffect(() => {
    const t = setTimeout(() => setStep((s) => s + 1), SLIDE_MS);
    return () => clearTimeout(t);
  }, [step]);

  const goTo = (target) => {
    let d = mod(target - current, total);
    if (d > total / 2) d -= total;
    setStep((s) => s + d);
  };

  const slots = [];
  for (let k = step - VISIBLE_SIDE; k <= step + VISIBLE_SIDE; k++) slots.push(k);

  return (
    <section className="sabores" id="sabores">
      <CloudCorner position="top-right" />
      <div className="sabores__head" data-anim>
        <p className="eyebrow eyebrow--cream">Sabores</p>
        <h2 className="section-title section-title--cream">Cuatro maneras de flechar.</h2>
      </div>

      <div className="carousel" data-anim data-anim-delay="1" aria-roledescription="carrusel">
        <div className="carousel__stage">
          {slots.map((k) => {
            const active = k === step;
            return (
              <div
                className={`carousel__slide${active ? ' is-active' : ''}`}
                key={k}
                style={{ transform: slideTransform(k - step) }}
                aria-hidden={active ? undefined : 'true'}
                onClick={() => setStep(k)}
              >
                <Flavor flavor={flavors[mod(k, total)]} />
              </div>
            );
          })}
        </div>

        <div className="carousel__dots">
          {flavors.map((f, i) => (
            <button
              key={f.tag}
              type="button"
              className={`carousel__dot${i === current ? ' is-active' : ''}`}
              aria-label={`Ver ${f.title}`}
              aria-current={i === current ? 'true' : undefined}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
