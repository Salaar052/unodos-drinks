"use client";

import { useMemo, useState, type CSSProperties } from "react";
import { filterCounts, MENU_ITEMS } from "@/lib/menu";
import type { MenuFilterId } from "@/lib/universes";
import { matchesMenuFilter } from "@/lib/menu";
import { FEATURED_UNIVERSES } from "@/lib/universes";
import { DrinkCard } from "./DrinkCard";
import { MenuFilters } from "./MenuFilters";

export function Menu() {
  const [filter, setFilter] = useState<MenuFilterId>("all");
  const counts = useMemo(() => filterCounts(), []);

  const visibleCount = useMemo(
    () => MENU_ITEMS.filter((item) => matchesMenuFilter(item, filter)).length,
    [filter],
  );

  const activeUniverse =
    filter !== "all" ? FEATURED_UNIVERSES.find((u) => u.id === filter) : null;

  return (
    <div className="menu" id="menu">
      <MenuFilters active={filter} onChange={setFilter} counts={counts} />
      {activeUniverse ? (
        <section
          className="universe-banner fade-up"
          style={
            { "--univ-accent": activeUniverse.accentColor } as CSSProperties
          }
          aria-label={`${activeUniverse.title} collection`}
        >
          <h2 className="universe-banner-title">{activeUniverse.title}</h2>
          <p className="universe-banner-tag">{activeUniverse.tagline}</p>
        </section>
      ) : null}
      <ul className="drink-list" aria-labelledby="menu-heading">
        <li className="sr-only" id="menu-heading">
          Menu items
        </li>
        {MENU_ITEMS.map((item, idx) => {
          const visible = matchesMenuFilter(item, filter);
          return (
            <li
              key={item.id}
              className="drink-list-item"
              hidden={!visible}
              aria-hidden={!visible}
            >
              <DrinkCard item={item} index={idx} />
            </li>
          );
        })}
      </ul>
      {visibleCount === 0 ? (
        <p className="menu-empty">No drinks in this collection yet.</p>
      ) : null}
    </div>
  );
}