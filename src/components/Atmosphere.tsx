import type { CSSProperties } from "react";
import { JapaneseScene } from "./JapaneseScene";

const EMBERS = 4;

export function Atmosphere() {
  return (
  <div className="atmosphere" aria-hidden>
    <JapaneseScene />
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