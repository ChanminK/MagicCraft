import React from "react";

export default function TeacherDialog({ portrait, children }: { portrait?: string; children: React.ReactNode }) {
    return (
    <div className="mt-4 p-3 rounded-xl border bg-slate-800/60 flex items-center gap-3">
    <div className="w-16 h-16 rounded-full bg-slate-700 overflow-hidden flex items-center justify-center">
        {/* FINISHED WIZARD HERE */}
        <span className="text-2xl">🧙‍♂️</span>
    </div>
    <div className="text-sm opacity-90">{children}</div>
    </div>
);
}