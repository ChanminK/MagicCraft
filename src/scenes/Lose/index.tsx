import { useMemo } from "react";
import { useGame } from "@/state/gameState";
import type { SceneId } from "@/state/gameState";
import { loadProgress } from "@/systems/save";

const POTION_SCENES: SceneId[] = ["PotionVigor", "PotionHeal", "PotionExplosion"];

export default function Lose() {
  const { setScene } = useGame();

  const retryScene = useMemo<SceneId>(() => {
    const p = loadProgress();
    if (p && POTION_SCENES.includes(p.scene)) return p.scene;
    return "PotionVigor";
  }, []);

  return (
    <div className="mc-scene mc-fade-in flex flex-col items-center justify-center min-h-[70vh] text-center gap-4">
      <h2 className="text-4xl font-black">GAME OVER</h2>
      <p className="opacity-80">Try again?</p>
      <div className="flex gap-3">
        <button className="mc-btn" onClick={() => setScene("PotionVigor")}>
          Try from the Start
        </button>
        <button className="mc-btn" onClick={() => setScene(retryScene)}>
          Try from Current Potion
        </button>
      </div>
      <button className="mc-btn" onClick={() => setScene("Intro")}>
        Back to Intro
      </button>
    </div>
  );
}
