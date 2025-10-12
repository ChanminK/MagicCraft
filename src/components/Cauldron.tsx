import React from "react";


type Props = { bubbleTone?: "green" | "rwb" | "nature"; children?: React.ReactNode };
export default function Cauldron({ bubbleTone = "green", children }: Props) {
return (
    <div className="relative flex items-end justify-center w-[640px] h-[480px] bg-slate-800/60 rounded-xl border border-slate-700 overflow-hidden">
        {/* Boiling Cauldron */}
        <div className="absolute inset-x-6 bottom-8 h-40 rounded-full bg-slate-700" />
        {/* Rising bubbles (PLACEHOLDER FOR NOW GET TO ART IDIOT) */}
        <div className="absolute inset-x-12 bottom-24 h-32 overflow-hidden">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white/70 animate-bounce" />
        </div>
        {children}
    </div>
    );
}