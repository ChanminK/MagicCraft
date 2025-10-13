export type VigorStepId = "flip-coin" | "dip-quote" | "drop-jam";

export const VIGOR_STEPS: Array<{ id: VigorStepId; label: string }> = [
    { id: "flip-coin", label: "Flip Gambler's Vigor into the cauldron"},
    { id: "dip-quote", label: "Lower the Inspirational Quote slowly"},
    { id: "drop-jam", label: "Drop the Ragebaiter Jam"}
];

export function acceptVigorAction(currentIndex: number, action: VigorStepId) {
    const expected = VIGOR_STEPS[currentIndex]?.id;
    const ok = action === expected;
    const nextIndex = ok ? currentIndex + 1 : currentIndex;
    const done = ok && nextIndex >= VIGOR_STEPS.length;
    return { ok, nextIndex, done };
}

