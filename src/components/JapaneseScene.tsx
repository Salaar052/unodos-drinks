/** Original SVG scene: pagoda, torii, sakura — no external assets */
export function JapaneseScene() {
  return (
    <div className="japanese-scene" aria-hidden>
      <svg
        className="scene-svg"
        viewBox="0 0 1200 500"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="sceneMoon" cx="50%" cy="28%" r="40%">
            <stop offset="0%" stopColor="#c41e3a" stopOpacity="0.55" />
            <stop offset="70%" stopColor="#5a0a18" stopOpacity="0.2" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <circle cx="600" cy="120" r="95" fill="url(#sceneMoon)" />
        {/* Pagoda right */}
        <g opacity="0.22" fill="#1a0a10" stroke="#3d1520" strokeWidth="1">
          <polygon points="920,380 980,220 1040,380" />
          <rect x="935" y="300" width="90" height="80" />
          <rect x="950" y="260" width="60" height="45" />
          <rect x="965" y="230" width="30" height="35" />
        </g>
        {/* Torii left */}
        <g opacity="0.28" stroke="#6b1528" strokeWidth="6" fill="none">
          <path d="M140 380 V240" />
          <path d="M220 380 V240" />
          <path d="M120 250 H240" />
          <path d="M130 210 H230" strokeWidth="4" />
        </g>
        {/* Sakura branches */}
        <g opacity="0.35">
          <path
            d="M0 80 Q120 120 200 90 Q280 60 360 100"
            fill="none"
            stroke="#4a2030"
            strokeWidth="3"
          />
          <circle cx="80" cy="95" r="4" fill="#c94d6a" />
          <circle cx="130" cy="75" r="3.5" fill="#d65a7a" />
          <circle cx="180" cy="100" r="3" fill="#b83d5c" />
          <circle cx="240" cy="70" r="3.5" fill="#d65a7a" />
          <circle cx="300" cy="95" r="3" fill="#c94d6a" />
        </g>
        <g opacity="0.25">
          <path
            d="M1050 60 Q980 100 900 70"
            fill="none"
            stroke="#4a2030"
            strokeWidth="2.5"
          />
          <circle cx="1000" cy="75" r="3" fill="#c94d6a" />
          <circle cx="940" cy="90" r="2.5" fill="#d65a7a" />
        </g>
      </svg>
    </div>
  );
}