import type { SceneId } from "@/state/gameState";

export type IntroLine = {
    id: string;
    text: string;
    portrait?:  "base" | "drink" | "vigor" | "cry" | "throw" | "suprise" | "huh";
    sfx?: "slurp" | "ahhh" | "crying" | "throw" | "explosion";
    autoNextMs?: number;
    gotoScene?: SceneId;
};

export const INTRO_SCRIPT: IntroLine[] = [
    {
        id: "welcome",
        portrait: "base",
        text: "Welcome, apprentice! Today is your final potion-making exam."
    },
    {
        id: "rules1",
        portrait: "base",
        text: "you must brew three potions. Follow each step exactly, in order"
    },
    {
        id: "rule2",
        portrait: "huh",
        text: "Wrong step, wrong timing, or too much force... and well"
    },
    {
        id: "explosion",
        portrait: "huh",
        sfx: "explosion",
        text: "boom"
    },
    {
        id:"controls",
        portrait: "base",
        text: "Controls: Right-click for special actions. Hold Alt and drag to tilt/pour."
    },
    {
        id:"timer",
        portrait: "suprise",
        text: "Each potion has a 3-minte limit. Don't dawdle!"
    },
    {
        id: "encourage",
        portrait: "vigor",
        sfx: "ahhh",
        text: "Impress me and you'll pass with flying colors."
    },
    {
        id: "begin",
        portrait: "base",
        text: "Ready? Let's start with the Potion of Vigor.",
        gotoScene: "PotionVigor"
    }
];

export function nextLineIndex(current: number) {
    const next = current + 1;
    return next < INTRO_SCRIPT.length ? next : current;
}