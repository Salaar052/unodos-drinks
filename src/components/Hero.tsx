interface Props {
  menuUnlocked: boolean;
}

export function Hero({ menuUnlocked }: Props) {
  return (
    <header className="hero hero-cinematic">
      <p className="hero-presents">Undos Games presents</p>
      <h1 className="hero-title hero-glitch">Unodos Drinks</h1>
      <div className="blood-drip" aria-hidden>
        <svg viewBox="0 0 200 40" className="blood-drip-svg">
          <path
            d="M100 4 C92 18 88 28 100 36 C112 28 108 18 100 4 Z"
            fill="#A5092D"
          />
          <path
            d="M55 6 C50 14 48 22 55 28 C62 22 60 14 55 6 Z"
            fill="#c41e3a"
            opacity="0.85"
          />
          <path
            d="M145 8 C140 16 138 24 145 30 C152 24 150 16 145 8 Z"
            fill="#c41e3a"
            opacity="0.7"
          />
        </svg>
      </div>
      <p className="hero-lead">
        Premium anime-inspired potions for Geek Con — characters, colour, and
        every pour at <strong>Rs 600</strong>.
      </p>
      <p className="hero-badge">Geek Con · 21–22 Nov 2026</p>
      {menuUnlocked ? (
        <a className="hero-cta" href="#menu">
          Explore Menu
        </a>
      ) : null}
    </header>
  );
}