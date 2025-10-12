import React from "react";
import { GameProvider } from "@/state/gameState";
import SceneManager from "@/app/SceneManager";


export default function App() {
return (
<GameProvider>
<div className="min-h-screen bg-slate-900 text-slate-100">
<SceneManager />
</div>
</GameProvider>
);
}