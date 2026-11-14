export type MenuSectionId = "potions" | "food";

export type Temperature = "hot" | "cold";

export interface CharacterPlacement {
  offsetX: number;
  offsetY: number;
  scale: number;
  flip: boolean;
}

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
  character: CharacterPlacement;
  /** Set to true after adding `public/images/<id>.jpg` (small badge near price) */
  hasPhoto: boolean;
}

const PRICE = "Rs 600";

const defaultChar = (): CharacterPlacement => ({
  offsetX: 0,
  offsetY: 0,
  scale: 1,
  flip: false,
});

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
    tagline: "Sip if you dare—blink and the aftertaste hunts you.",
    description:
      "Golden fizz, passionfruit and mango cut with lemon—like a finishing stroke in the dark.",
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
    character: { ...defaultChar(), offsetY: 8, scale: 0.92 },
    hasPhoto: false,
  },
  {
    id: "magicians-red",
    name: "Magician's Red",
    inspiredBy: "JoJo's Bizarre Adventure Part 3",
    section: "potions",
    sectionTitle: "Potions & Drinks",
    tagline: "One sip and the night remembers your name.",
    description:
      "Strawberry and cherry flare over lemon sparkle—crimson enough to summon a stand in the shadows.",
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
    character: { ...defaultChar(), offsetX: -4, scale: 0.95 },
    hasPhoto: false,
  },
  {
    id: "hollow-purple",
    name: "Hollow Purple",
    inspiredBy: "Jujutsu Kaisen",
    section: "potions",
    sectionTitle: "Potions & Drinks",
    tagline: "Cursed energy in a cup—sweet, violet, irreversible.",
    description:
      "Blueberry void with blood-orange sting and lemon lift—impossibly purple, unsettlingly good.",
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
    character: { ...defaultChar(), offsetY: 12, scale: 0.9 },
    hasPhoto: false,
  },
  {
    id: "t-virus-antidote",
    name: "T-Virus Antidote",
    inspiredBy: "Resident Evil",
    section: "potions",
    sectionTitle: "Potions & Drinks",
    tagline: "Green salvation—one sip, no cure for the craving.",
    description:
      "Pakola hiss mellowed with vanilla and milk—survival never tasted so suspiciously creamy.",
    priceLabel: PRICE,
    gradient: ["#7BE495", "#1B9C5A"],
    temperature: "cold",
    ingredients: ["Pakola 100 ml", "Vanilla 15 ml", "Milk 150 ml", "Ice 200 g"],
    character: { ...defaultChar(), scale: 0.88, flip: true },
    hasPhoto: false,
  },
  {
    id: "mana-potion",
    name: "Mana Potion",
    inspiredBy: "Fantasy RPG / D&D",
    section: "potions",
    sectionTitle: "Potions & Drinks",
    tagline: "Roll for refresh—the dungeon thirsts with you.",
    description:
      "Pineapple, coconut water, and blue lagoon shimmer—mana restored, morality optional.",
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
    character: { ...defaultChar(), offsetX: 6, offsetY: 6, scale: 0.93 },
    hasPhoto: false,
  },
  {
    id: "calcifer-hot-choco",
    name: "Calcifer's Ember Hot Chocolate",
    inspiredBy: "Howl's Moving Castle",
    section: "potions",
    sectionTitle: "Potions & Drinks",
    tagline: "Warm ember on your lips—don't look away from the steam.",
    description:
      "Dark chocolate, vanilla, and evaporated milk—hearth-light for travelers past curfew.",
    priceLabel: PRICE,
    gradient: ["#FF8A3D", "#7A3E12"],
    temperature: "hot",
    ingredients: [
      "Dark chocolate sauce 30 ml",
      "Milk 100 ml",
      "Vanilla syrup 10 ml",
      "Evaporated milk 50 ml",
    ],
    character: { ...defaultChar(), offsetY: 10, scale: 0.9 },
    hasPhoto: false,
  },
  {
    id: "anteiku-latte",
    name: "Anteiku's Vanilla Latte",
    inspiredBy: "Tokyo Ghoul",
    section: "potions",
    sectionTitle: "Potions & Drinks",
    tagline: "Quiet café poison—vanilla soft, coffee cruel.",
    description:
      "Espresso pull, steamed milk, vanilla veil—strength sipped behind a polite foam mask.",
    priceLabel: PRICE,
    gradient: ["#E8D2B0", "#8B5E3C"],
    temperature: "hot",
    ingredients: [
      "Coffee 5 g",
      "Milk 180 ml",
      "Vanilla syrup 20 ml",
      "Water 30 ml",
    ],
    character: { ...defaultChar(), offsetX: -6, scale: 0.91 },
    hasPhoto: false,
  },
  {
    id: "sohma-pilaf",
    name: "Sohma's South Indian Pilaf",
    inspiredBy: "Food Wars!",
    section: "food",
    sectionTitle: "Power-Up Food",
    tagline: "Feast like your last night—spices that bite back.",
    description:
      "Golden South Indian pilaf for festival hunger—a plate that dares you to stop at one spoon.",
    priceLabel: PRICE,
    gradient: ["#F4A52C", "#A8541A"],
    character: { ...defaultChar(), offsetY: 16, scale: 0.85 },
    hasPhoto: false,
  },
  {
    id: "lawliet-brownie",
    name: "Lawliet's Energy Bar",
    inspiredBy: "Death Note",
    section: "food",
    sectionTitle: "Power-Up Food",
    tagline: "Sweet logic, dark crumbs—fuel for beautiful minds.",
    description:
      "Dense chocolate brownie bar—deadline fuel for those who plot in the moonlight.",
    priceLabel: PRICE,
    gradient: ["#7B4B2A", "#3B2312"],
    character: { ...defaultChar(), scale: 0.87, flip: true },
    hasPhoto: false,
  },
];

export function itemsBySection(sectionId: MenuSectionId): MenuItem[] {
  return MENU_ITEMS.filter((item) => item.section === sectionId);
}

export function photoPath(id: string): string {
  return `/images/${id}.jpg`;
}

export function characterPath(id: string): string {
  return `/characters/${id}.png`;
}