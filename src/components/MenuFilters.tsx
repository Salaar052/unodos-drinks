"use client";

import type { CSSProperties } from "react";
import { FEATURED_UNIVERSES, type MenuFilterId } from "@/lib/universes";

interface Props {
  active: MenuFilterId;
  onChange: (id: MenuFilterId) => void;
  counts: Record<MenuFilterId, number>;
}

export function MenuFilters({ active, onChange, counts }: Props) {
  return (
    <nav className="menu-filters" aria-label="Filter drinks by collection">
      <button
        type="button"
        className={`filter-chip${active === "all" ? " is-active" : ""}`}
        aria-pressed={active === "all"}
        onClick={() => onChange("all")}
      >
        All Drinks
        <span className="filter-count">{counts.all}</span>
      </button>
      {FEATURED_UNIVERSES.map((universe) => {
        const count = counts[universe.id] ?? 0;
        if (count === 0) return null;
        return (
          <button
            key={universe.id}
            type="button"
            className={`filter-chip filter-chip-universe${active === universe.id ? " is-active" : ""}`}
            style={{ "--univ-accent": universe.accentColor } as CSSProperties}
            aria-pressed={active === universe.id}
            onClick={() => onChange(universe.id)}
          >
            {universe.title}
            <span className="filter-count">{count}</span>
          </button>
        );
      })}
    </nav>
  );
}