export type MenuSectionId = "potions" | "food";

export type Temperature = "hot" | "cold";

export type IllustrationKind =
  | "bolt-glass"
  | "flame-orb-glass"
  | "swirl-glass"
  | "potion-bottle"
  | "blue-flask"
  | "ember-mug"
  | "latte-cup"
  | "rice-bowl"
  | "brownie";

export interface MenuItem {
  id: string;
  name: string;
  inspiredBy: string;
  section: MenuSectionId;
  sectionTitle: string;
  tagline: string;
  description: string;
  priceLabel: string;
  gradient: [string, string];
  temperature?: Temperature;
  ingredients?: string[];
  illustration: IllustrationKind;
  /** Set to true after adding `public/images/<id>.jpg` */
  hasPhoto: boolean;
}

const PRICE = "Rs 600";

export const MENU_SECTIONS: { id: MenuSectionId; title: string }[] = [
  { id: "potions", title: "Potions & Drinks" },
  { id: "food", title: "Power-Up Food" },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "thunderclap",
    name: "Thunderclap & Flash",
    inspiredBy: "Demon Slayer",
    section: "potions",
    sectionTitle: "Potions & Drinks",
    tagline: "Blink-fast citrus—gone before the crumbs settle.",
    description:
      "Golden fizz with passionfruit and mango, sharpened by lemon like a finishing slash.",
    priceLabel: PRICE,
    gradient: ["#FFD60A", "#FF9F0A"],
    temperature: "cold",
    ingredients: [
      "Passionfruit puree 20 ml",
      "Mango syrup 10 ml",
      "Lemon juice half piece",
      "Sprite 180 ml",
      "Ice 200 g",
    ],
    illustration: "bolt-glass",
    hasPhoto: false,
  },
  {
    id: "magicians-red",
    name: "Magician's Red",
    inspiredBy: "JoJo's Bizarre Adventure Part 3",
    section: "potions",
    sectionTitle: "Potions & Drinks",
    tagline: "Stand proud—this crimson fizz pulls no punches.",
    description:
      "Strawberry and cherry blaze over lemon sparkle, loud enough to turn heads mid-panel.",
    priceLabel: PRICE,
    gradient: ["#FF2D2D", "#B80000"],
    temperature: "cold",
    ingredients: [
      "Strawberry puree 20 ml",
      "Cherry syrup 10 ml",
      "Lemon juice half piece",
      "Sprite 180 ml",
      "Ice 200 g",
    ],
    illustration: "flame-orb-glass",
    hasPhoto: false,
  },
  {
    id: "hollow-purple",
    name: "Hollow Purple",
    inspiredBy: "Jujutsu Kaisen",
    section: "potions",
    sectionTitle: "Potions & Drinks",
    tagline: "Void-sweet, impossibly purple, weirdly comforting.",
    description:
      "Blueberry depth with blood-orange spark and lemon lift—cursed energy, friendly price.",
    priceLabel: PRICE,
    gradient: ["#9B5DE5", "#3A0CA3"],
    temperature: "cold",
    ingredients: [
      "Blueberry puree 20 ml",
      "Blood orange syrup 10 ml",
      "Lemon juice half piece",
      "Sprite 180 ml",
      "Ice 200 g",
    ],
    illustration: "swirl-glass",
    hasPhoto: false,
  },
  {
    id: "t-virus-antidote",
    name: "T-Virus Antidote",
    inspiredBy: "Resident Evil",
    section: "potions",
    sectionTitle: "Potions & Drinks",
    tagline: "Green bottle lore meets creamy cure vibes.",
    description:
      "Pakola fizz tamed with vanilla and milk—survival mission in a cup, auntie-approved.",
    priceLabel: PRICE,
    gradient: ["#7BE495", "#1B9C5A"],
    temperature: "cold",
    ingredients: ["Pakola 100 ml", "Vanilla 15 ml", "Milk 150 ml", "Ice 200 g"],
    illustration: "potion-bottle",
    hasPhoto: false,
  },
  {
    id: "mana-potion",
    name: "Mana Potion",
    inspiredBy: "Fantasy RPG / D&D",
    section: "potions",
    sectionTitle: "Potions & Drinks",
    tagline: "Roll for refresh—natural twenty on the gulp.",
    description:
      "Pineapple and coconut water with a blue lagoon shimmer, topped with crisp still water.",
    priceLabel: PRICE,
    gradient: ["#3BA7FF", "#0A3FBF"],
    temperature: "cold",
    ingredients: [
      "Pineapple juice 100 ml",
      "Coconut water 50 ml",
      "Blue lagoon 10 ml",
      "Water 50 ml",
      "Ice 200 g",
    ],
    illustration: "blue-flask",
    hasPhoto: false,
  },
  {
    id: "calcifer-hot-choco",
    name: "Calcifer's Ember Hot Chocolate",
    inspiredBy: "Howl's Moving Castle",
    section: "potions",
    sectionTitle: "Potions & Drinks",
    tagline: "Warm hearth in a mug—watch the steam dance.",
    description:
      "Dark chocolate, vanilla, and evaporated milk blended slow, like a fire spirit on duty.",
    priceLabel: PRICE,
    gradient: ["#FF8A3D", "#7A3E12"],
    temperature: "hot",
    ingredients: [
      "Dark chocolate sauce 30 ml",
      "Milk 100 ml",
      "Vanilla syrup 10 ml",
      "Evaporated milk 50 ml",
    ],
    illustration: "ember-mug",
    hasPhoto: false,
  },
  {
    id: "anteiku-latte",
    name: "Anteiku's Vanilla Latte",
    inspiredBy: "Tokyo Ghoul",
    section: "potions",
    sectionTitle: "Potions & Drinks",
    tagline: "Café hush with vanilla foam—second panel optional.",
    description:
      "Pull shot, steamed milk, and vanilla syrup—quiet strength in every sip.",
    priceLabel: PRICE,
    gradient: ["#E8D2B0", "#8B5E3C"],
    temperature: "hot",
    ingredients: [
      "Coffee 5 g",
      "Milk 180 ml",
      "Vanilla syrup 20 ml",
      "Water 30 ml",
    ],
    illustration: "latte-cup",
    hasPhoto: false,
  },
  {
    id: "sohma-pilaf",
    name: "Sohma's South Indian Pilaf",
    inspiredBy: "Food Wars!",
    section: "food",
    sectionTitle: "Power-Up Food",
    tagline: "Spice-line victory—fork at the ready.",
    description:
      "Golden South Indian pilaf built for festival hunger, served as a proper power-up plate.",
    priceLabel: PRICE,
    gradient: ["#F4A52C", "#A8541A"],
    illustration: "rice-bowl",
    hasPhoto: false,
  },
  {
    id: "lawliet-brownie",
    name: "Lawliet's Energy Bar",
    inspiredBy: "Death Note",
    section: "food",
    sectionTitle: "Power-Up Food",
    tagline: "Sweet logic—dense, dark, deadline fuel.",
    description:
      "A hefty chocolate brownie bar for thinkers who solve plots between booth hops.",
    priceLabel: PRICE,
    gradient: ["#7B4B2A", "#3B2312"],
    illustration: "brownie",
    hasPhoto: false,
  },
];

export function itemsBySection(sectionId: MenuSectionId): MenuItem[] {
  return MENU_ITEMS.filter((item) => item.section === sectionId);
}

export function photoPath(id: string): string {
  return `/images/${id}.jpg`;
}