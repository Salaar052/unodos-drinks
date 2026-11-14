import type { IllustrationKind } from "@/lib/menu";

interface Props {
  kind: IllustrationKind;
  colorA: string;
  colorB: string;
  title: string;
}

export function ItemIllustration({ kind, colorA, colorB, title }: Props) {
  const grad = `linear-gradient(160deg, ${colorA} 0%, ${colorB} 100%)`;

  switch (kind) {
    case "bolt-glass":
      return (
        <svg viewBox="0 0 120 120" role="img" aria-label={title} className="illus">
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={colorA} />
              <stop offset="100%" stopColor={colorB} />
            </linearGradient>
          </defs>
          <rect width="120" height="120" fill="#0b0716" />
          <path d="M40 95 V55 H52 L48 35 L78 65 H62 L66 95 Z" fill="url(#g)" />
          <path
            d="M55 38 Q60 28 52 22 Q48 30 50 38"
            fill="none"
            stroke={colorA}
            strokeWidth="2"
          />
          <rect x="38" y="95" width="44" height="8" rx="2" fill="#2a2340" />
          <path
            d="M42 50 H78 Q82 50 82 70 V95 H38 V70 Q38 50 42 50"
            fill="none"
            stroke="#e8e0ff"
            strokeWidth="2"
            opacity="0.7"
          />
        </svg>
      );
    case "flame-orb-glass":
      return (
        <svg viewBox="0 0 120 120" role="img" aria-label={title} className="illus">
          <rect width="120" height="120" fill="#0b0716" />
          <circle cx="60" cy="48" r="14" fill={colorA} />
          <circle cx="60" cy="48" r="8" fill={colorB} opacity="0.8" />
          <path
            d="M42 50 H78 Q84 50 84 72 V95 H36 V72 Q36 50 42 50"
            fill="none"
            stroke="#e8e0ff"
            strokeWidth="2"
            opacity="0.75"
          />
          <rect x="36" y="95" width="48" height="7" rx="2" fill="#2a2340" />
        </svg>
      );
    case "swirl-glass":
      return (
        <svg viewBox="0 0 120 120" role="img" aria-label={title} className="illus">
          <rect width="120" height="120" fill="#0b0716" />
          <path
            d="M60 30 C45 40 45 55 60 55 C75 55 75 70 60 70 C45 70 45 85 60 85"
            fill="none"
            stroke={colorA}
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M42 50 H78 Q84 50 84 72 V95 H36 V72 Q36 50 42 50"
            fill="none"
            stroke="#e8e0ff"
            strokeWidth="2"
            opacity="0.75"
          />
        </svg>
      );
    case "potion-bottle":
      return (
        <svg viewBox="0 0 120 120" role="img" aria-label={title} className="illus">
          <rect width="120" height="120" fill="#0b0716" />
          <rect x="52" y="28" width="16" height="12" rx="2" fill="#3d3555" />
          <path
            d="M46 40 H74 L70 95 H50 Z"
            fill={colorB}
            stroke={colorA}
            strokeWidth="2"
          />
          <ellipse cx="60" cy="70" rx="10" ry="18" fill={colorA} opacity="0.35" />
        </svg>
      );
    case "blue-flask":
      return (
        <svg viewBox="0 0 120 120" role="img" aria-label={title} className="illus">
          <rect width="120" height="120" fill="#0b0716" />
          <circle cx="60" cy="58" r="26" fill={colorB} stroke={colorA} strokeWidth="2" />
          <rect x="54" y="28" width="12" height="14" rx="2" fill="#3d3555" />
          <circle cx="60" cy="58" r="14" fill={colorA} opacity="0.4" />
        </svg>
      );
    case "ember-mug":
      return (
        <svg viewBox="0 0 120 120" role="img" aria-label={title} className="illus">
          <rect width="120" height="120" fill="#0b0716" />
          <path
            d="M38 48 Q60 32 82 48 V82 Q60 96 38 82 Z"
            fill={colorB}
            stroke={colorA}
            strokeWidth="2"
          />
          <path
            d="M52 38 Q56 28 60 38 Q64 28 68 38"
            fill="none"
            stroke={colorA}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path d="M82 58 H96 Q100 58 100 68 V74 Q100 84 96 84 H82" fill="none" stroke="#e8e0ff" strokeWidth="2" />
        </svg>
      );
    case "latte-cup":
      return (
        <svg viewBox="0 0 120 120" role="img" aria-label={title} className="illus">
          <rect width="120" height="120" fill="#0b0716" />
          <ellipse cx="60" cy="52" rx="28" ry="10" fill={colorA} opacity="0.5" />
          <path
            d="M34 52 H86 V82 Q60 96 34 82 Z"
            fill={colorB}
            stroke={colorA}
            strokeWidth="2"
          />
          <path d="M86 62 H98 Q104 62 104 72 V72 Q104 82 98 82 H86" fill="none" stroke="#e8e0ff" strokeWidth="2" />
        </svg>
      );
    case "rice-bowl":
      return (
        <svg viewBox="0 0 120 120" role="img" aria-label={title} className="illus">
          <rect width="120" height="120" fill="#0b0716" />
          <ellipse cx="60" cy="72" rx="36" ry="14" fill={colorB} />
          <path d="M28 72 Q60 48 92 72" fill={colorA} opacity="0.85" />
          <circle cx="48" cy="64" r="3" fill="#fff3d6" />
          <circle cx="68" cy="60" r="3" fill="#fff3d6" />
          <circle cx="58" cy="68" r="2.5" fill="#ffe08a" />
        </svg>
      );
    case "brownie":
      return (
        <svg viewBox="0 0 120 120" role="img" aria-label={title} className="illus">
          <rect width="120" height="120" fill="#0b0716" />
          <rect x="32" y="42" width="56" height="48" rx="6" fill={colorB} stroke={colorA} strokeWidth="2" />
          <path d="M32 58 H88" stroke={colorA} strokeWidth="1" opacity="0.5" />
          <path d="M32 70 H88" stroke={colorA} strokeWidth="1" opacity="0.35" />
          <rect x="40" y="50" width="10" height="8" rx="2" fill="#5c3820" opacity="0.6" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 120 120" role="img" aria-label={title} className="illus">
          <rect width="120" height="120" fill={grad} />
        </svg>
      );
  }
}