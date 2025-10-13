import type { HealStepId } from "./steps";
import type { SfxKey } from "@/data/sfx.manifest";

export type HealEffectDef = {
  sfx?: SfxKey;
  bubbles?: "green" | "rwb" | "nature";
  bwToggle?: "on" | "off";
};

export const HEAL_EFFECTS: Record<HealStepId, HealEffectDef> = {
  "pour-saints-drink": { sfx: "pepsiman", bubbles: "rwb" },
  "rightclick-watch":  { sfx: "tiktok",   bwToggle: "on" },
  "add-lasagna":       { sfx: "rewind",   bwToggle: "off" }
};
