export type Ingredient = { id: string; name: string; category: "Buff" | "Heal" | "Attack"; emoji?: string };


export const INGREDIENTS: Ingredient[] = [
// Buff
{ id: "unicorn-horn", name: "Unicorn Horn", category: "Buff", emoji: "🦄" },
{ id: "ragebaiter-jam", name: "Ragebaiter Jam", category: "Buff", emoji: "🍓" },
{ id: "writers-block", name: "Writer's Block", category: "Buff", emoji: "🧱" },
{ id: "inspirational-quote", name: "Inspirational Quote", category: "Buff", emoji: "📜" },
{ id: "pixie-dust", name: "Pixie Dust", category: "Buff", emoji: "✨" },
{ id: "gamblers-vigor", name: "Gambler's Vigor", category: "Buff", emoji: "🪙" },
// Heal
{ id: "magical-wand", name: "Magical Wand", category: "Heal", emoji: "🪄" },
{ id: "toads-tongue", name: "Toad's Tongue", category: "Heal", emoji: "👅" },
{ id: "grandmas-lasagna", name: "Grandma's Lasagna", category: "Heal", emoji: "🍲" },
{ id: "saints-drink", name: "Saint's Drink", category: "Heal", emoji: "🥤" },
{ id: "angels-feather", name: "Angel's Feather", category: "Heal", emoji: "🪶" },
{ id: "time-watch", name: "Time (Watch)", category: "Heal", emoji: "⌚" },
// Attack
{ id: "dragons-tooth", name: "Dragon's Tooth", category: "Attack", emoji: "🦷" },
{ id: "cursed-orb", name: "Cursed Orb", category: "Attack", emoji: "🔮" },
{ id: "fahhhh-jar", name: "FAHHHH (Jar)", category: "Attack", emoji: "🫙" },
{ id: "c4", name: "C4", category: "Attack", emoji: "🧨" },
{ id: "crystalized-thunder", name: "Crystalized Thunder", category: "Attack", emoji: "⚡" },
{ id: "angry-moss", name: "Angry Moss", category: "Attack", emoji: "🌿" }
];