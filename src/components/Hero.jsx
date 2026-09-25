import CloudCorner from './CloudCorner';
import { asset } from '../utils/asset';

export default function Hero() {
  return (
    <section className="hero">
      {/* arrow doodles (inclinadas, volando hacia el título) */}
      <img className="arrow arrow--h1" src={asset('img/arrow-cream.png')} alt="" />
      <img className="arrow arrow--h2" src={asset('img/arrow-cream.png')} alt="" />
      <img className="arrow arrow--h3" src={asset('img/arrow-cream.png')} alt="" />
      <img className="hero__cupid" src={asset('img/cupid-brookie.png')} alt="" />

      <div className="hero__inner">
        <h1 className="hero__title" data-anim>
          El <span className="script">flechazo</span> entre el<br />brownie y la cookie
        </h1>
        <p className="hero__sub" data-anim data-anim-delay="1">
          El centro húmedo y profundo de un brownie con pequeños pedazos de
          cookie repartidos. Todo en una sola pieza, horneada del día.
        </p>
        <a href="#sabores" className="btn hero__cta" data-anim data-anim-delay="2">
          Ver el catálogo
        </a>
      </div>

      <CloudCorner position="bottom-left" />
    </section>
  );
}
