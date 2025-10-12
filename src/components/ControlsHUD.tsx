import React from "react";


export default function ControlsHUD({ timer }: { timer?: number }) {
return (
<div className="mt-3 text-xs opacity-80 flex items-center gap-4">
<div>Right-click = special action</div>
<div>Alt + Drag = pour/tilt</div>
{typeof timer === "number" && <div className="ml-auto">⏱ {timer}s</div>}
</div>
);
}