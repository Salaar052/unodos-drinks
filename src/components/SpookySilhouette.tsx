interface Props {
  accent: string;
  title: string;
}

export function SpookySilhouette({ accent, title }: Props) {
  return (
    <svg
      className="char-silhouette"
      viewBox="0 0 120 200"
      role="img"
      aria-label={`${title} — character placeholder`}
    >
      <defs>
        <radialGradient id="aura" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.55" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="60" cy="70" rx="48" ry="56" fill="url(#aura)" />
      <path
        d="M35 175 Q60 130 85 175 L80 195 H40 Z"
        fill="#0a050c"
        stroke={accent}
        strokeWidth="1"
        opacity="0.9"
      />
      <ellipse cx="60" cy="55" rx="22" ry="26" fill="#0a050c" />
      <path
        d="M48 52 Q60 44 72 52"
        fill="none"
        stroke={accent}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <ellipse
        cx="52"
        cy="54"
        rx="5"
        ry="3"
        fill={accent}
        className="silhouette-eye"
      />
      <ellipse
        cx="68"
        cy="54"
        rx="5"
        ry="3"
        fill={accent}
        className="silhouette-eye"
      />
      <path
        d="M30 95 L90 70"
        stroke={accent}
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.85"
      />
    </svg>
  );
}