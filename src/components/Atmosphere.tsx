import type { CSSProperties } from "react";

const EMBERS = 10;

export function Atmosphere() {
  return (
  <div className="atmosphere" aria-hidden>
    <div className="blood-moon" />
    <div className="fog fog-a" />
    <div className="fog fog-b" />
    <div className="vignette" />
    <div className="film-grain" />
    {Array.from({ length: EMBERS }, (_, i) => (
      <span
        key={i}
        className="ember"
        style={{ "--ei": i } as CSSProperties}
      />
    ))}
  </div>
  );
}