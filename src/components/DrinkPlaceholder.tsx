interface Props {
  name: string;
  accent: string;
}

/** Simple realistic glass placeholder — no fantasy effects */
export function DrinkPlaceholder({ name, accent }: Props) {
  return (
    <svg viewBox="0 0 320 240" className="drink-placeholder-svg" role="img" aria-label={`${name} drink photo placeholder`}>
      <rect width="320" height="240" fill="#121018" rx="8" />
      <rect x="40" y="24" width="240" height="192" fill="#0c090d" rx="6" />
      <path
        d="M115 200 V70 H205 V200 Z"
        fill="#1a1520"
        stroke="#2a2430"
        strokeWidth="1"
      />
      <path
        d="M115 70 H205 L198 55 H122 Z"
        fill="#252030"
      />
      <rect
        x="128"
        y="95"
        width="64"
        height="85"
        rx="4"
        fill={accent}
        opacity="0.35"
      />
      <ellipse cx="160" cy="72" rx="38" ry="6" fill="#2a2430" />
    </svg>
  );
}