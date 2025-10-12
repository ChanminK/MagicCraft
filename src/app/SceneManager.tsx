import React from "react";
import { useGame } from "@/state/gameState";
import Intro from "@/scenes/Intro";
import PotionVigor from "@/scenes/PotionVigor";
import PotionHeal from "@/scenes/PotionHeal";
import PotionExplosion from "@/scenes/PotionExplosion";
import Lose from "@/scenes/Lose";
import Win from "@/scenes/Win";
import Freeplay from "@/scenes/Freeplay";


export default function SceneManager() {
const { scene } = useGame();
return (
<div className="mx-auto max-w-6xl px-4 py-6">
{scene === "Intro" && <Intro />}
{scene === "PotionVigor" && <PotionVigor />}
{scene === "PotionHeal" && <PotionHeal />}
{scene === "PotionExplosion" && <PotionExplosion />}
{scene === "Lose" && <Lose />}
{scene === "Win" && <Win />}
{scene === "Freeplay" && <Freeplay />}
</div>
);
}