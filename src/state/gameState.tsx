import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { loadProgress, saveProgress } from "@/systems/save";

export type SceneId =
    | "Intro"
    | "PotionVigor"
    | "PotionHeal"
    | "PotionExplosion"
    | "Lose"
    | "Win";

export type GameState = {  
    scene: SceneId;
    setScene: (s: SceneId) => void;
    timer: number; 
    setTimer: (n: number) => void;
    startCountdown: (secs: number) => void;
    stopCountdown: () => void;
};

const Ctx = createContext<GameState | null>(null);
let countdownId: number | null = null;


export function GameProvider({ children }: { children: React.ReactNode }) {
    const saved = loadProgress();
    const [scene, setScene] = useState<SceneId>("Intro");
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        saveProgress({ scene });
        if (countdownId) {
            window.clearInterval(countdownId);
            countdownId = null;
            setTimer(0);
        }
    }, [scene]);

    useEffect(() => {
        return () => {
            if (countdownId) window.clearInterval(countdownId);
            countdownId = null;
        };
    }, []);

    const startCountdown = (secs: number) => {
        if (countdownId) window.clearInterval(countdownId);
        setTimer(secs);
        countdownId = window.setInterval(() => {
            setTimer((t) => {
                if (t <= 1) {
                    window.clearInterval(countdownId!);
                    countdownId = null;
                    return 0;
                }
                return t - 1;
            });
        }, 1000);
    };


    const stopCountdown = () => {
        if (countdownId) window.clearInterval(countdownId);
        countdownId = null;
    };


    const value = useMemo(
        () => ({ scene, setScene, timer, setTimer, startCountdown, stopCountdown }),
        [scene, timer]
    );


    return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}


export function useGame() {
    const ctx = useContext(Ctx);
    if (!ctx) throw new Error("useGame must be used within GameProvider");
    return ctx;
}