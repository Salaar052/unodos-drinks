"use client";

import { useId, useState, type CSSProperties } from "react";
import type { MenuItem } from "@/lib/menu";
import { ItemImage } from "./ItemImage";

interface Props {
  item: MenuItem;
  index: number;
  imagePriority?: boolean;
}

export function MenuCard({ item, index, imagePriority }: Props) {
  const [open, setOpen] = useState(false);
  const ingredientsId = useId();
  const hasIngredients = Boolean(item.ingredients?.length);

  return (
    <article
      className="menu-card fade-up"
      style={
        {
          "--accent-a": item.gradient[0],
          "--accent-b": item.gradient[1],
          "--stagger": index,
        } as CSSProperties
      }
    >
      <ItemImage item={item} priority={imagePriority} />
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
        <p className="item-price">{item.priceLabel}</p>
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
    </article>
  );
}