import { asset } from '../utils/asset';

function Annotation({ pos, delay, title, children }) {
  return (
    <article className={`anno anno--${pos}`} data-anim data-anim-delay={delay}>
      <div className="anno__text">
        <h3>{title}</h3>
        {children}
      </div>
    </article>
  );
}

export default function Brookie() {
  return (
    <section className="brookie" id="brookie">
      {/* flechas en zigzag ascendente por el margen izquierdo, mismo estilo que el hero */}
      <img className="brookie__trail-arrow brookie__trail-arrow--1" src={asset('img/arrow-red.png')} alt="" />
      <img className="brookie__trail-arrow brookie__trail-arrow--2" src={asset('img/arrow-red.png')} alt="" />
      <img className="brookie__trail-arrow brookie__trail-arrow--3" src={asset('img/arrow-red.png')} alt="" />

      <div className="brookie__head" data-anim>
        <p className="eyebrow eyebrow--red">Qué es un brookie</p>
        <h2 className="section-title section-title--red">
          No es medio brownie ni media cookie.<br />Es algo mejor. Mucho mejor.
        </h2>
      </div>

      {/* Anatomía del brookie: la información "flechada" */}
      <div className="anatomy">
        <div className="anatomy__stage">
          <div className="anatomy__disc" data-anim>
            <img className="anatomy__brookie" src={asset('img/brookie-center.png')} alt="Un brookie recién cortado" />
          </div>

          <Annotation pos="tl" delay="1" title="Centro húmedo">
            <p>
              La miga profunda del brownie, densa y todavía tibia por dentro.{' '}
              <br />Nunca seca en los bordes.
            </p>
          </Annotation>

          <Annotation pos="bl" delay="2" title="Pedazos de cookie">
            <p>Masa de galleta en trozos, repartida a mano antes del horno. </p>
            <p>Se ve y se muerde.</p>
          </Annotation>

          <Annotation pos="tr" delay="1" title="Una sola pieza">
            <p>No son dos postres pegados: las dos masas se hornean juntas en la misma placa.</p>
          </Annotation>

          <Annotation pos="br" delay="2" title="Tanda chica">
            <p>Horneamos poco y seguido. Lo que sale del horno hoy se corta y se entrega hoy.</p>
          </Annotation>
        </div>
      </div>
    </section>
  );
}
