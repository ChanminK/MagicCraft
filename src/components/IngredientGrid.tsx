import React, { useState } from "react";
import { shelves } from "@/data/shelves";
import IngredientCard from "@/components/IngredientCard";


export default function IngredientGrid() {
const categories = Object.keys(shelves) as Array<keyof typeof shelves>;
const [catIdx, setCatIdx] = useState(0);
const [pageIdx, setPageIdx] = useState(0);
const cat = categories[catIdx];
const pages = shelves[cat];


const page = pages[pageIdx] ?? [];


return (
<div className="w-[360px]">
<div className="flex items-center justify-between mb-2">
<button className="px-2 py-1 border rounded" onClick={() => setCatIdx((c) => (c - 1 + categories.length) % categories.length)}>
◀ Prev Group
</button>
<div className="text-sm opacity-80">{cat}</div>
<button className="px-2 py-1 border rounded" onClick={() => setCatIdx((c) => (c + 1) % categories.length)}>
Next Group ▶
</button>
</div>
<div className="grid grid-cols-2 gap-3">
{page.map((ing) => (
<IngredientCard key={ing.id} ing={ing} />
))}
</div>
<div className="flex items-center justify-between mt-3">
<button className="px-2 py-1 border rounded" onClick={() => setPageIdx((p) => Math.max(0, p - 1))}>Prev</button>
<div className="text-xs opacity-70">Page {pageIdx + 1} / {pages.length}</div>
<button className="px-2 py-1 border rounded" onClick={() => setPageIdx((p) => Math.min(pages.length - 1, p + 1))}>Next</button>
</div>
</div>
);
}