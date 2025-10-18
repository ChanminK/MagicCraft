import type { Ingredient } from "@/data/ingredients";

export default function IngredientCard({ item }: { item: Ingredient }) {
    return (
    <div className="flex items-center justify-center">
      <img src={item.img} alt={item.name} className="w-20 h-20 object-contain image-pixelated" />
    </div>
    );
}