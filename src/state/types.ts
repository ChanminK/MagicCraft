export type SceneId =
  | "Intro"
  | "PotionVigor"
  | "PotionHeal"
  | "PotionExplosion"
  | "Lose"
  | "Win";

export type IngredientCategory = "Buff" | "Heal" | "Attack";

export type Ingredient = {
    id: string;
    name: string;
    category: IngredientCategory;
    img: string; //PNG path
    sfx?: string; //use sfx if needed
}

export type RecipeStep = {
    action: string;
    instruction: string;
    sfx?: string;
    visual?: string; //putting this here in case maybe i wanna use a popup
}

export type Recipe = {
    id: string;
    name: string;
    ingredients: string[]; // EACH INGREDIENT HAS ITS OWN ID
    steps: RecipeStep[]; //Same with recipe steps
    successScene?: SceneId;
};

export type GameSettings = {
    sfxVolume: number;
    reduceMotion: boolean;
};

export type SaveData = {
    currentScene: SceneId;
    discoveredPotions: string[];
    settings: GameSettings;
};