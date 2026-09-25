import { footerColumns } from '../data/content';
import { asset } from '../utils/asset';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__lead" data-anim>
          <h2>Brookies artesanales, horneados con amor.</h2>
          <p>Tandas chicas, cortados a mano, entregados el mismo día.</p>
        </div>
        <div className="footer__cols" data-anim data-anim-delay="1">
          {footerColumns.map((col) => (
            <div key={col.label}>
              <p className="footer__label">{col.label}</p>
              {col.links.map((l) => (
                <a key={l.label} href={l.href}>{l.label}</a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="footer__card" data-anim>
        <img src={asset('img/cupid-brookie.png')} alt="" />
        <span className="script footer__wordmark">coopid</span>
      </div>

      <div className="footer__bottom">
        <span>coopid® 2026 · Todos los derechos reservados</span>
        <span>Product made by las Mías</span>
      </div>
    </footer>
  );
}
