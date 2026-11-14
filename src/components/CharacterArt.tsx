"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";
import type { MenuItem } from "@/lib/menu";
import { characterPath } from "@/lib/menu";
import { SpookySilhouette } from "./SpookySilhouette";

interface Props {
  item: MenuItem;
  side: "left" | "right";
  priority?: boolean;
}

export function CharacterArt({ item, side, priority = false }: Props) {
  const [missing, setMissing] = useState(false);
  const { offsetX, offsetY, scale, flip } = item.character;

  return (
    <div
      className={`char-wrap char-wrap-${side}`}
      style={
        {
          "--accent-a": item.gradient[0],
          "--char-x": `${offsetX}px`,
          "--char-y": `${offsetY}px`,
          "--char-scale": scale,
        } as CSSProperties
      }
    >
      <div
        className={`char-aura char-aura-${side}`}
        aria-hidden
      />
      <div className={`char-figure${flip ? " char-flip" : ""}`}>
        {!missing ? (
          <Image
            src={characterPath(item.id)}
            alt=""
            width={400}
            height={560}
            sizes="(max-width: 400px) 38vw, 160px"
            className="char-png"
            loading={priority ? undefined : "lazy"}
            priority={priority}
            onError={() => setMissing(true)}
          />
        ) : (
          <SpookySilhouette accent={item.gradient[0]} title={item.name} />
        )}
      </div>
    </div>
  );
}