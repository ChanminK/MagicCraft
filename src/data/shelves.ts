import { INGREDIENTS, type Ingredient } from "@/data/ingredients";


export const shelves: Record<"Buff" | "Heal" | "Attack", Ingredient[][]> = {
    Buff: [INGREDIENTS.filter((i) => i.category === "Buff")],
    Heal: [INGREDIENTS.filter((i) => i.category === "Heal")],
    Attack: [INGREDIENTS.filter((i) => i.category === "Attack")]
};