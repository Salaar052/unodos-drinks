"use client";

import { useId, useState, type CSSProperties } from "react";
import type { MenuItem } from "@/lib/menu";
import { CharacterArt } from "./CharacterArt";
import { DrinkPhotoBadge } from "./DrinkPhotoBadge";

interface Props {
  item: MenuItem;
  index: number;
  imagePriority?: boolean;
}

export function MenuCard({ item, index, imagePriority }: Props) {
  const [open, setOpen] = useState(false);
  const ingredientsId = useId();
  const hasIngredients = Boolean(item.ingredients?.length);
  const side: "left" | "right" = index % 2 === 0 ? "left" : "right";

  return (
    <article
      className={`menu-card fade-up menu-card-${side}`}
      style={
        {
          "--accent-a": item.gradient[0],
          "--accent-b": item.gradient[1],
          "--stagger": index,
        } as CSSProperties
      }
    >
      <CharacterArt item={item} side={side} priority={imagePriority} />
      <div className="menu-card-panel">
        <div className="menu-card-claw" aria-hidden />
        <div className="menu-card-body">
          <div className="menu-card-top">
            <span className="chip chip-inspired">{item.inspiredBy}</span>
            {item.temperature ? (
              <span className={`chip chip-temp chip-temp-${item.temperature}`}>
                {item.temperature === "hot" ? "Hot" : "Cold"}
              </span>
            ) : null}
          </div>
          <h3 className="item-title">{item.name}</h3>
          <p className="item-tagline">{item.tagline}</p>
          <p className="item-desc">{item.description}</p>
          <div className="price-row">
            <p className="item-price">{item.priceLabel}</p>
            <DrinkPhotoBadge item={item} />
          </div>
          {hasIngredients ? (
            <div className="ingredients-wrap">
              <button
                type="button"
                className="ingredients-toggle"
                aria-expanded={open}
                aria-controls={ingredientsId}
                onClick={() => setOpen((v) => !v)}
              >
                Ingredients
                <span className="chev" aria-hidden>
                  {open ? "−" : "+"}
                </span>
              </button>
              {open ? (
                <ul id={ingredientsId} className="ingredients-list">
                  {item.ingredients!.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}