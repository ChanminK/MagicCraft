//Please you stupid piece of code WORK PLEASE

import { useEffect, useMemo, useState } from "react";
import { useGame } from "@/state/gameState";
import sprites from "@/data/sprites.manifest";
import { playSfx } from "@/systems/audio";
import { INTRO_SCRIPT, type IntroLine } from "./script";

export default function Intro() {
    const { setScene } = useGame();
    const [idx, setIdx] = useState(0);
    const line: IntroLine = useMemo(() => INTRO_SCRIPT[idx], [idx]);

    useEffect(() => {
        if (line?.sfx) playSfx(line.sfx as any);
        if (line?.autoNextMs) {
            const t = setTimeout(() => handleNext(), line.autoNextMs);
            return () => clearTimeout(t);
        }
    }, [line]);

    const handleNext = () => {
        if (!line) return;
        if (line.gotoScene) {
            setScene(line.gotoScene);
            return;
        }
        setIdx((i) => Math.min(i + 1, INTRO_SCRIPT.length-1));
    };

    const portraitSrc = line?.portrait && (sprites.teacher as any)[
        line.portrait === "base" ? "base" : line.portrait
    ];

    return (
        <div className="mc-scene mc-fade-in">
            <h1 className="text-3xl font-bold mb-4">Potion Exam</h1>

            <div className="mc-panel p-4 flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-slate-700 overflow-hidden flex items-center justify-center shrink-0">
                    {portraitSrc ? (
                        <img src={portraitSrc} alt="teacher" className="w-full h-full object-cover" />
                    ) : (
                        <span className = "text-3xl">🧙‍♂️</span>
                    )}
                </div>
                <p className="text-sm opacity-90">{line?.text}</p>
            </div>

            <div className="mt-6 flex gap-3">
                <button className="mc-btn" onClick={handleNext}>
                    Next
                </button>
                <span className="text-xs opacity-60 self-center">
                    {idx +1}/{INTRO_SCRIPT.length}
                </span>
            </div>
        </div>
    );
}