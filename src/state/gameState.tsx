import React, { createContext, useContext, useMemo, useState } from "react";

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
    const [scene, setScene] = useState<SceneId>("Intro");
    const [timer, setTimer] = useState(0);

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