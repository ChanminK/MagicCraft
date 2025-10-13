import type { VigorStepId } from "./steps";
import type { SfxKey } from "@/data/sfx.manifest";

export type EffectDef = {
    sfx?: SfxKey;
    bubbles?: "green" | "rwb" | "nature";
    flash?: boolean; 
};

export const VIGOR_EFFECTS: Record<VigorStepId, EffectDef> = {
    "flip-coin": { sfx: "coinflip", bubbles: "green"},
    "dip-quote": { sfx: "luigispeak", bubbles: "green"},
    "drop-jam": { sfx: "augh", bubbles: "green", flash: true }
}