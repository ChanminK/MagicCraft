import { INGREDIENTS, type Ingredient, type IngredientCategory } from "@/data/ingredients";


export const SHELVES: Record<IngredientCategory, Ingredient[]> = {
  Buff: INGREDIENTS.filter(i => i.category === "Buff"),
  Heal: INGREDIENTS.filter(i => i.category === "Heal"),
  Attack: INGREDIENTS.filter(i => i.category === "Attack"),
};