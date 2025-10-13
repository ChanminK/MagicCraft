import React from "react";
import type { Ingredient } from "@/data/ingredients";

export default function IngredientCard({ ing }: { ing: Ingredient }) {
    return (
    <button className="h-28 border rounded-lg bg-slate-800/40 hover:bg-slate-800 transition flex flex-col items-center justify-center">
        <div className="text-xl mb-1">{ing.emoji ?? "🧪"}</div>
        <div className="text-xs opacity-80 text-center px-2">{ing.name}</div>
    </button>
    );
}