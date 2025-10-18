// INGREDIENT LIST - ID FOR EACH IS HERE

import sprites from "./sprites.manifest";

export const INGREDIENTS = [
  // Buff stuff
  { id: "gamblers-vigor", name: "Gambler's Vigor", img: sprites.ingredients["gamblers-vigor"], cat: "Buff" },
  { id: "inspirational-quote", name: "Inspirational Quote", img: sprites.ingredients["inspirational-quote"], cat: "Buff" },
  { id: "ragebaiter-jam", name: "Ragebaiter Jam", img: sprites.ingredients["ragebaiter-jam"], cat: "Buff" },
  { id: "unicorn-horn", name: "Unicorn Horn", img: sprites.ingredients["unicorn-horn"], cat: "Buff" },
  { id: "pixie-dust", name: "Pixie Dust", img: sprites.ingredients["pixie-dust"], cat: "Buff" },
  { id: "writers-block", name: "Writer's Block", img: sprites.ingredients["writers-block"], cat: "Buff" },

  // Heal stuff
  { id: "saints-drink", name: "Saint's Drink", img: sprites.ingredients["saints-drink"], cat: "Heal" },
  { id: "time-watch", name: "Time (Watch)", img: sprites.ingredients["time-watch"], cat: "Heal" },
  { id: "grandmas-lasagna", name: "Grandma's Lasagna", img: sprites.ingredients["grandmas-lasagna"], cat: "Heal" },
  { id: "magical-wand", name: "Magical Wand", img: sprites.ingredients["magical-wand"], cat: "Heal" },
  { id: "toads-tongue", name: "Toad's Tongue", img: sprites.ingredients["toads-tongue"], cat: "Heal" },
  { id: "angels-feather", name: "Angel's Feather", img: sprites.ingredients["angels-feather"], cat: "Heal" },

  // Attack stuff
  { id: "c4", name: "C4", img: sprites.ingredients["c4"], cat: "Attack" },
  { id: "angry-moss", name: "Angry Moss", img: sprites.ingredients["angry-moss"], cat: "Attack" },
  { id: "fahhhh-jar", name: "FAHHHH", img: sprites.ingredients["fahhhh-jar"], cat: "Attack" },
  { id: "dragons-tooth", name: "Dragon's Tooth", img: sprites.ingredients["dragons-tooth"], cat: "Attack" },
  { id: "cursed-orb", name: "Cursed Orb", img: sprites.ingredients["cursed-orb"], cat: "Attack" },
  { id: "crystalized-thunder", name: "Crystalized Thunder", img: sprites.ingredients["crystalized-thunder"], cat: "Attack" },
] as const;
