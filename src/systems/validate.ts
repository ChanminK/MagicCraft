export type StepId = string;
export type StepEvent = { type: string; payload?: any };


export function makeStepValidator(expected: Array<StepEvent["type"]>) {
    let idx = 0;
    return function accept(ev: StepEvent) {
        if (ev.type === expected[idx]) {
            idx += 1;
            return { ok: true, done: idx >= expected.length } as const;
        }
        return { ok: false, done: false } as const;
    };
}