"use client";

import { memo, useId, useState, type CSSProperties } from "react";
import type { MenuItem } from "@/lib/menu";
import { CharacterArt } from "./CharacterArt";
import { DrinkPhoto } from "./DrinkPhoto";

interface Props {
  item: MenuItem;
  index: number;
}

export const DrinkCard = memo(function DrinkCard({ item, index }: Props) {
  const [open, setOpen] = useState(false);
  const ingredientsId = useId();
  const hasIngredients = Boolean(item.ingredients?.length);

  return (
    <article
      className="drink-card fade-up"
      data-item-id={item.id}
      data-section={item.section}
      style={
        {
          "--accent-a": item.gradient[0],
          "--accent-b": item.gradient[1],
          "--item-accent": item.accentColor,
          "--stagger": index,
        } as CSSProperties
      }
    >
      <div className="drink-card-canvas" aria-hidden>
        <CharacterArt item={item} side="left" variant="background" />
        <div className="drink-card-scrim" />
      </div>
      <div className="drink-card-hero">
        <DrinkPhoto item={item} />
      </div>
      <div className="drink-card-layout">
        <div className="drink-card-body">
          <div className="drink-card-badges">
            <span className="chip chip-series">{item.inspiredBy}</span>
            {item.temperature ? (
              <span className={`chip chip-temp chip-temp-${item.temperature}`}>
                {item.temperature === "hot" ? "Hot" : "Cold"}
              </span>
            ) : null}
          </div>
          <h3 className="drink-name">{item.name}</h3>
          <p className="drink-inspiration">
            Inspired by <strong>{item.characterName}</strong>
          </p>
          <p className="drink-tagline">{item.tagline}</p>
          <p className="drink-desc">{item.description}</p>
          <p className="drink-price">{item.priceLabel}</p>
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
});