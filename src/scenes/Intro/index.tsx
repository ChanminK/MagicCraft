import React from "react";
import { useGame } from "@/state/gameState";
import TeacherDialog from "@/components/TeacherDialog";


export default function Intro() {
const { setScene } = useGame();
return (
<div>
<h1 className="text-2xl font-bold mb-4">Potion Exam</h1>
<TeacherDialog>
Welcome, apprentice! You must brew three potions to pass your final exam.
</TeacherDialog>
<div className="mt-6 flex gap-3">
<button className="px-4 py-2 border rounded" onClick={() => setScene("PotionVigor")}>Begin Exam</button>
<button className="px-4 py-2 border rounded" onClick={() => setScene("Freeplay")}>Freeplay</button>
</div>
</div>
);
}