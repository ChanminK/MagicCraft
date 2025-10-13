import React from "react";

export default function ScreenEffects({ bw = false }: { bw?: boolean }) {
    return (
    <div className={`pointer-events-none fixed inset-0 ${bw ? "" : ""}`}></div>
    );
}