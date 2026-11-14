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

  alt?: string;

  variant?: "inline" | "background";

}



export function CharacterArt({

  item,

  side,

  priority = false,

  alt,

  variant = "inline",

}: Props) {

  const [missing, setMissing] = useState(false);

  const { offsetX, offsetY, scale, flip } = item.character;

  const isBg = variant === "background";



  return (

    <div

      className={`char-wrap char-wrap-${side}${isBg ? " char-wrap-bg" : ""}`}

      style={

        {

          "--accent-a": item.gradient[0],

          "--char-x": `${offsetX}px`,

          "--char-y": `${offsetY}px`,

          "--char-scale": scale,

        } as CSSProperties

      }

    >

      {!isBg ? (

        <div className={`char-aura char-aura-${side}`} aria-hidden />

      ) : null}

      <div className={`char-figure${flip ? " char-flip" : ""}`}>

        {!missing ? (

          <Image

            src={characterPath(item.id)}

            alt={isBg ? "" : alt ?? `${item.characterName} character artwork`}

            width={400}

            height={560}

            sizes={
              isBg
                ? "(max-width: 640px) 100vw, 560px"
                : "(max-width: 400px) 38vw, 160px"
            }
            quality={isBg ? 82 : 80}
            className="char-png"
            loading={priority ? undefined : "lazy"}
            priority={priority}
            fetchPriority={priority ? "high" : "low"}

            onError={() => setMissing(true)}

            aria-hidden={isBg}

          />

        ) : (

          <SpookySilhouette accent={item.gradient[0]} title={item.name} />

        )}

      </div>

    </div>

  );

}
