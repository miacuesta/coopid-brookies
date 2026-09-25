// position: "bottom-left" (hero) | "top-right" (sabores)
export default function CloudCorner({ position }) {
  return (
    <div className={`bite bite--${position}`} aria-hidden="true">
      <svg viewBox="0 0 320 260">
        <use href="#cloud-corner" />
      </svg>
    </div>
  );
}
