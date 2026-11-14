export type FeaturedUniverseId = "demon-slayer" | "jujutsu-kaisen";

export interface AnimeUniverse {
  id: FeaturedUniverseId;
  title: string;
  tagline: string;
  accentColor: string;
  secondaryColor: string;
}

/** Only universes that have at least one menu item in lib/menu.ts */
export const FEATURED_UNIVERSES: AnimeUniverse[] = [
  {
    id: "demon-slayer",
    title: "Demon Slayer",
    tagline: "Flame, gold, and lightning in the dark.",
    accentColor: "#D6A94F",
    secondaryColor: "#A5092D",
  },
  {
    id: "jujutsu-kaisen",
    title: "Jujutsu Kaisen",
    tagline: "Cursed energy in electric violet and blue.",
    accentColor: "#729BD9",
    secondaryColor: "#9B5DE5",
  },
];

export type MenuFilterId = "all" | FeaturedUniverseId;

export function universeById(id: FeaturedUniverseId): AnimeUniverse {
  const found = FEATURED_UNIVERSES.find((u) => u.id === id);
  if (!found) throw new Error(`Unknown universe: ${id}`);
  return found;
}