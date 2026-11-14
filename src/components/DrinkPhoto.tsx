"use client";

import Image from "next/image";
import { useState } from "react";
import type { MenuItem } from "@/lib/menu";
import { photoPath } from "@/lib/menu";
import { DrinkPlaceholder } from "./DrinkPlaceholder";

interface Props {
  item: MenuItem;
  priority?: boolean;
}

export function DrinkPhoto({ item, priority = false }: Props) {
  const [failed, setFailed] = useState(false);
  const usePhoto = item.hasPhoto && !failed;

  return (
    <figure className="drink-photo-frame">
      {usePhoto ? (
        <Image
          src={photoPath(item.id)}
          alt={`Photograph of ${item.name}`}
          width={640}
          height={480}
          sizes="(max-width: 640px) 44vw, 248px"
          quality={82}
          className="drink-photo-img"
          loading={priority ? undefined : "lazy"}
          priority={priority}
          fetchPriority={priority ? "high" : "low"}
          onError={() => setFailed(true)}
        />
      ) : (
        <DrinkPlaceholder name={item.name} accent={item.accentColor} />
      )}
      {!usePhoto ? (
        <figcaption className="drink-photo-caption">Concept preview — not the final pour</figcaption>
      ) : null}
    </figure>
  );
}