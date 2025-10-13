import { useEffect, useRef, useState, VoidFunctionComponent } from "react";

/* Alt key down = signal || USE FOR TIPPING DRINK */
export function useAltKey() {
    const [alt, setAlt] = useState(false);
    useEffect(() => {
        const down = (e: KeyboardEvent) => e.altKey && setAlt(true);
        const up = (e: KeyboardEvent) => !e.altKey && setAlt(false);
        const any = (e: KeyboardEvent) => setAlt(e.altKey);
        window.addEventListener("keydown", down);
        window.addEventListener("keyup", up);
        window.addEventListener("blur", () => setAlt(false));
        window.addEventListener("keydown", any);
        return () => {
            window.removeEventListener("keydown", down);
            window.removeEventListener("keyup", up);
            window.removeEventListener("keydown", any);
        };
    }, []);
    return alt;
}

export function useRightClick(handler: (e: MouseEvent) => void) {
    const ref = useRef<HTMLElement | null>(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const onCtx = (e: MouseEvent) => {
            e.preventDefault();
            handler(e);
        };
        el.addEventListener("contextmenu", onCtx);
        return () => el.removeEventListener("contextmenu", onCtx);
    }, [handler]);
    return ref; // YOU CAN ATTACH TO ANY ELEMENT USE IT
}

export function usePointerDrag(
    onMove: (info: { dx: number; dy: number; vx: number; vy: number }) => void,
    onEnd?: (info: { dx: number; dy: number; vx: number; vy: number }) => void
) {
    const start = useRef<{ x: number; y: number; t: number } | null>(null);
    const last = useRef<{ x: number; y: number; t: number } | null>(null);

    const onPointerDown = (e: React.PointerEvent) => {
        (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
        const t = performance.now();
        start.current = { x: e.clientX, y: e.clientY, t};
        last.current = { x: e.clientX, y: e.clientY, t};
    };

    const onPointerMove = (E: React.PointerEvent) => {
        if (!start.current || !last.current) return;
        const now = { x: E.clientX, y: E.clientY, t: performance.now() };
        const dt = Math.max(1, now.t - last.current.t);
        const dx = now.x - start.current.x;
        const dy = now.y - start.current.y;
        const vx = (now.x - last.current.x) /dt;
        const vy = (now.y - last.current.y) /dt;
        last.current = now;
        onMove({ dx, dy, vx, vy});
    };

    const onPointerUp = () => {
        if (!start.current || !last.current) return;
        const dt = Math.max(1, last.current.t - start.current.t);
        const dx = last.current.x - start.current.x;
        const dy = last.current.y - start.current.y;
        const vx = dx / dt;
        const vy = dy / dt;
        onEnd?.({ dx, dy, vx, vy });
        start.current = null;
        last.current = null;
    };

    return {
        bind: {
            onPointerDown,
            onPointerMove,
            onPointerUp,
        },
    };
}

/* function to get the tilt angle*/
export function computeTitltFromDrag(dx: number, altHeld: boolean, maxDeg = 45) {
    if (!altHeld) return 0;
    const clamped = Math.max(-200, Math.min(200, dx)); //change if drag is too much or litte
    return (clamped / 200) * maxDeg;
}
