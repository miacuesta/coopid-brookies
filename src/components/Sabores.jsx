import CloudCorner from './CloudCorner';
import { flavors } from '../data/content';
import { asset } from '../utils/asset';

function Flavor({ flavor, index }) {
  return (
    <article className="flavor" data-anim data-anim-delay={index + 1}>
      <div className="flavor__img">
        <img src={asset(flavor.img)} alt={flavor.alt} style={{ objectPosition: flavor.position }} />
        <span className="flavor__tag">{flavor.tag}</span>
      </div>
      <div className="flavor__body">
        <h3>{flavor.title}</h3>
        <p>{flavor.text}</p>
      </div>
    </article>
  );
}

export default function Sabores() {
  return (
    <section className="sabores" id="sabores">
      <CloudCorner position="top-right" />
      <div className="sabores__head" data-anim>
        <p className="eyebrow eyebrow--cream">Sabores</p>
        <h2 className="section-title section-title--cream">Cuatro maneras de flechar.</h2>
      </div>

      <div className="sabores__grid">
        {flavors.map((f, i) => (
          <Flavor key={f.tag} flavor={f} index={i} />
        ))}
      </div>
    </section>
  );
}
