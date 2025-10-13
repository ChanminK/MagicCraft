import React from "react";

export default function BubbleEffect({ color = "white" as const }) {
    return (
    <div className="absolute inset-0 pointer-events-none">
        {/* Placeholder - dots. GET TO ARTING */}
        {[...Array(16)].map((_, i) => (
            <div key={i} className="absolute w-2 h-2 rounded-full bg-white/70" style={{ left: `${10 + (i * 5) % 80}%`, bottom: `${(i * 7) % 60}%` }}/>
        ))}
    </div>
    );
}