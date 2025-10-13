export type StepDef = { type: string; label: string };


export const RECIPES = {
    PotionVigor: {
        name: "Potion of Vigor",
        steps: [
            { type: "flip-coin", label: "Flip Gambler's Vigor into the cauldron" },
            { type: "dip-quote", label: "Lower the Inspirational Quote slowly" },
            { type: "drop-jam", label: "Drop the Ragebaiter Jam" }
        ] as StepDef[]
    },

    PotionHeal: {
        name: "Potion that heals my broken heart",
        steps: [
            { type: "pour-saints-drink", label: "Pour the Saint's Drink, then add the can" },
            { type: "rightclick-watch", label: "Right-click Time (watch) and add it" },
            { type: "add-lasagna", label: "Add Grandma's Lasagna" }
        ] as StepDef[]
    },

    PotionExplosion: {
        name: "Potion of EXPLOSION",
        steps: [
            { type: "lower-c4-slow", label: "Slowly lower C4 (too fast = fail)" },
            { type: "auto-angry-moss", label: "Add Angry Moss (auto-drops)" },
            { type: "add-fahhhh", label: "Add FAHHHH" }
        ] as StepDef[]
    }
};