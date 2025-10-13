export type ExplosionStepId = "lower-c4-slow" | "add-angry-moss" | "add-fahhhh";

export const EXPLOSION_STEPS: Array<{ id: ExplosionStepId; label: string }> = [
  { id: "lower-c4-slow", label: "Slowly lower C4 (too fast = fail)" },
  { id: "add-angry-moss", label: "Add Angry Moss" },
  { id: "add-fahhhh", label: "Add FAHHHH" }
];

export function acceptExplosionAction(currentIndex: number, action: ExplosionStepId) {
  const expected = EXPLOSION_STEPS[currentIndex]?.id;
  const ok = action === expected;
  const nextIndex = ok ? currentIndex + 1 : currentIndex;
  const done = ok && nextIndex >= EXPLOSION_STEPS.length;
  return { ok, nextIndex, done };
}
