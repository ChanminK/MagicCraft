import { useState } from "react";
import sprites from "@/data/sprites.manifest";
import { INGREDIENTS } from "@/data/ingredients";

export default function IngredientGrid({ category }: { category: "Buff" | "Heal" | "Attack" }) {
  const all = INGREDIENTS.filter((i) => i.category === category);
  const [page, setPage] = useState(0);
  const pages = Math.max(1, Math.ceil(all.length / 6));
  const items = all.slice(page * 6, page * 6 + 6);

  return (
    <div className="relative w-[420px]">
      <div className="relative w-full aspect-[2/1]">
        <img src={sprites.shelf} alt="shelf" className="absolute inset-0 w-full h-full object-contain image-pixelated" />
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-x-6 gap-y-6 p-6">
          {items.map((it) => (
            <div key={it.id} className="flex items-center justify-center">
              <img
                src={it.img}
                alt={it.name}
                className="w-20 h-20 object-contain image-pixelated"
              />
            </div>
          ))}
        </div>
      </div>

      {pages > 1 && (
        <div className="mt-2 flex items-center justify-between">
          <button
            className="mc-btn"
            disabled={page === 0}
            onClick={() => setPage((p) => Math.max(0, p - 1))}
          >
            ◀ Prev
          </button>
          <span className="text-xs opacity-70">
            {page + 1}/{pages} — {category}
          </span>
          <button
            className="mc-btn"
            disabled={page >= pages - 1}
            onClick={() => setPage((p) => Math.min(pages - 1, p + 1))}
          >
            Next ▶
          </button>
        </div>
      )}
    </div>
  );
}
