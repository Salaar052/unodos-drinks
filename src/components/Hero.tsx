export function Hero() {
  return (
    <header className="hero">
      <p className="hero-presents">Undos Games presents</p>
      <h1 className="hero-title hero-glitch">Unodos Drinks</h1>
      <div className="blood-drip" aria-hidden>
        <svg viewBox="0 0 200 40" className="blood-drip-svg">
          <path
            d="M100 4 C92 18 88 28 100 36 C112 28 108 18 100 4 Z"
            fill="#b0001e"
          />
          <path
            d="M55 6 C50 14 48 22 55 28 C62 22 60 14 55 6 Z"
            fill="#ff1744"
            opacity="0.85"
          />
          <path
            d="M145 8 C140 16 138 24 145 30 C152 24 150 16 145 8 Z"
            fill="#ff1744"
            opacity="0.7"
          />
        </svg>
      </div>
      <p className="hero-badge">Geek Con · 21–22 Nov</p>
    </header>
  );
}