import { Fragment } from 'react';
import { marqueeItems } from '../data/content';

function Group({ hidden }) {
  return (
    <span className="marquee__group" aria-hidden={hidden ? 'true' : undefined}>
      {marqueeItems.map((text) => (
        <Fragment key={text}>
          <span>{text}</span>
          <span className="marquee__sep">✦</span>
        </Fragment>
      ))}
    </span>
  );
}

export default function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee__track">
        <Group />
        <Group hidden />
      </div>
    </div>
  );
}
