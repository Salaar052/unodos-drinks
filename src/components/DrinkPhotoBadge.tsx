"use client";

import Image from "next/image";
import { useState } from "react";
import type { MenuItem } from "@/lib/menu";
import { photoPath } from "@/lib/menu";

interface Props {
  item: MenuItem;
}

export function DrinkPhotoBadge({ item }: Props) {
  const [failed, setFailed] = useState(false);
  if (!item.hasPhoto || failed) return null;

  return (
    <span className="drink-photo-badge">
      <Image
        src={photoPath(item.id)}
        alt={`Photo of ${item.name}`}
        width={48}
        height={48}
        className="drink-photo-badge-img"
        loading="lazy"
        onError={() => setFailed(true)}
      />
    </span>
  );
}