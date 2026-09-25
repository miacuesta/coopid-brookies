import { asset } from '../utils/asset';

export default function Marca() {
  return (
    <section className="marca" id="marca">
      <img className="marca__icon" data-anim src={asset('img/cupid-brookie.png')} alt="Cupido de coopid" />
      <div className="marca__text" data-anim data-anim-delay="1">
        <p className="eyebrow eyebrow--red">La marca</p>
        <h2 className="section-title section-title--red marca__title">
          Coopid nació de un flechazo: alguien no quiso elegir entre el brownie y la cookie, y horneó las dos cosas juntas.
        </h2>
        <p className="marca__body">
          Desde entonces hacemos una sola cosa y la hacemos bien. Tandas chicas,
          ingredientes que se pueden nombrar y un horno que no para.{' '}
          <em>Product made by las Mías.</em>
        </p>
      </div>
    </section>
  );
}
