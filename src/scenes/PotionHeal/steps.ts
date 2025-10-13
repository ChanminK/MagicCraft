export type HealStepId = "pour-saints-drink" | "rightclick-watch" | "add-lasagna";

export const HEAL_STEPS: Array<{ id: HealStepId; label: string }> = [
    { id: "pour-saints-drink", label: "Pour the Saint's Drink, then add the can" },
    { id: "rightclick-watch", label: "Right-click Time (watch) and add it" },
    { id: "add-lasagna", label: "Add Grandma's Lasagna" }
];

export function acceptHealAction(currentIndex: number, action: HealStepId) {
    const expected = HEAL_STEPS[currentIndex]?.id;
    const ok = action === expected;
    const nextIndex = ok ? currentIndex + 1 : currentIndex;
    const done = ok && nextIndex >= HEAL_STEPS.length;
    return { ok, nextIndex, done };
}
