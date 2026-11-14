"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";
import type { MenuItem } from "@/lib/menu";
import { photoPath } from "@/lib/menu";
import { ItemIllustration } from "./ItemIllustration";

interface Props {
  item: MenuItem;
  priority?: boolean;
}

export function ItemImage({ item, priority = false }: Props) {
  const [photoFailed, setPhotoFailed] = useState(false);
  const usePhoto = item.hasPhoto && !photoFailed;

  return (
    <div
      className="item-image"
      style={
        {
          "--accent-a": item.gradient[0],
          "--accent-b": item.gradient[1],
        } as CSSProperties
      }
    >
      {usePhoto ? (
        <Image
          src={photoPath(item.id)}
          alt={`${item.name} — stylized drink or food photo`}
          width={320}
          height={240}
          sizes="(max-width: 400px) 100vw, 160px"
          className="item-photo"
          loading={priority ? undefined : "lazy"}
          priority={priority}
          onError={() => setPhotoFailed(true)}
        />
      ) : (
        <ItemIllustration
          kind={item.illustration}
          colorA={item.gradient[0]}
          colorB={item.gradient[1]}
          title={item.name}
        />
      )}
    </div>
  );
}