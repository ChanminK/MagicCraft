import type { ExplosionStepId } from "./steps";
import type { SfxKey } from "@/data/sfx.manifest";

export type ExplosionEffectDef = {
  sfx?: SfxKey;
  bubbles?: "green" | "rwb" | "nature";
  flash?: boolean; 
};

export const EXPLOSION_EFFECTS: Record<ExplosionStepId, ExplosionEffectDef> = {
  "lower-c4-slow": { sfx: "beeping", bubbles: "nature" },
  "add-angry-moss": { sfx: "yell", bubbles: "nature" },
  "add-fahhhh": { sfx: "fah", bubbles: "nature", flash: true }
};
