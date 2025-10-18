// INGREDIENT LIST - ID FOR EACH IS HERE

export type IngredientCategory = "Buff" | "Heal" | "Attack";

export type Ingredient = {
  id: string;
  name: string;
  img: string;
  category: IngredientCategory;
};

const I = (id: string, name: string, img: string, category: IngredientCategory): Ingredient => ({
  id, name, img, category
});


import sprites from "./sprites.manifest";

export const INGREDIENTS: readonly Ingredient[] = [
  // Buff stuff
  I("gamblers-vigor", "Gambler's Vigor", sprites.ingredients["gamblers-vigor"], "Buff"),
  I("inspirational-quote", "Inspirational Quote", sprites.ingredients["inspirational-quote"], "Buff"),
  I("ragebaiter-jam", "Ragebaiter Jam", sprites.ingredients["ragebaiter-jam"], "Buff"),
  I("unicorn-horn", "Unicorn Horn", sprites.ingredients["unicorn-horn"], "Buff"),
  I("pixie-dust", "Pixie Dust", sprites.ingredients["pixie-dust"], "Buff"),
  I("writers-block", "Writer's Block", sprites.ingredients["writers-block"], "Buff"),

  // Heal stff
  I("saints-drink", "Saint's Drink", sprites.ingredients["saints-drink"], "Heal"),
  I("time-watch", "Time (Watch)", sprites.ingredients["time-watch"], "Heal"),
  I("grandmas-lasagna", "Grandma's Lasagna", sprites.ingredients["grandmas-lasagna"], "Heal"),
  I("magical-wand", "Magical Wand", sprites.ingredients["magical-wand"], "Heal"),
  I("toads-tongue", "Toad's Tongue", sprites.ingredients["toads-tongue"], "Heal"),
  I("angels-feather", "Angel's Feather", sprites.ingredients["angels-feather"], "Heal"),

  // Attack
  I("c4", "C4", sprites.ingredients["c4"], "Attack"),
  I("angry-moss", "Angry Moss", sprites.ingredients["angry-moss"], "Attack"),
  I("fahhhh-jar", "FAHHHH", sprites.ingredients["fahhhh-jar"], "Attack"),
  I("dragons-tooth", "Dragon's Tooth", sprites.ingredients["dragons-tooth"], "Attack"),
  I("cursed-orb", "Cursed Orb", sprites.ingredients["cursed-orb"], "Attack"),
  I("crystalized-thunder", "Crystalized Thunder", sprites.ingredients["crystalized-thunder"], "Attack"),
];
