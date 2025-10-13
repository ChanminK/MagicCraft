import { useEffect, useState } from "react";
import { useGame } from "@/state/gameState";
import Cauldron from "@/components/Cauldron";
import IngredientGrid from "@/components/IngredientGrid";
import TeacherDialog from "@/components/TeacherDialog";
import ControlsHUD from "@/components/ControlsHUD";
import { playSfx } from "@/systems/audio";
import { applyBW } from "@/systems/fx";
import { HEAL_STEPS, type HealStepId, acceptHealAction } from "./steps";
import { HEAL_EFFECTS } from "./effects.map";

export default function PotionHeal() {
  const { setScene, startCountdown, timer } = useGame();
  const [stepIndex, setStepIndex] = useState(0);
  const current = HEAL_STEPS[stepIndex];

  useEffect(() => {
    startCountdown(180); 
    return () => applyBW(false); 
  }, []);

  const runEffects = (id: HealStepId) => {
    const fx = HEAL_EFFECTS[id];
    if (fx?.sfx) playSfx(fx.sfx);
    if (fx?.bwToggle === "on") applyBW(true);
    if (fx?.bwToggle === "off") applyBW(false);
  };

  const doAction = (id: HealStepId) => {
    const { ok, nextIndex, done } = acceptHealAction(stepIndex, id);
    if (!ok) {
      setScene("Lose"); 
      return;
    }
    runEffects(id);
    if (done) {
      setStepIndex(nextIndex);
      return;
    }
    setStepIndex(nextIndex);
  };

  const allDone = stepIndex >= HEAL_STEPS.length;

  return (
    <div className="mc-scene mc-fade-in grid grid-cols-[1fr_360px] gap-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">Potion that heals my broken heart</h2>

        <div className="relative">
          <Cauldron bubbleTone="rwb" />
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          <button className="mc-btn" onClick={() => doAction("pour-saints-drink")}>
            Pour Saint's Drink
          </button>
          <button className="mc-btn" onClick={() => doAction("rightclick-watch")}>
            Right-click Watch
          </button>
          <button className="mc-btn" onClick={() => doAction("add-lasagna")}>
            Add Lasagna
          </button>

          {allDone && (
            <button className="mc-btn" onClick={() => setScene("PotionExplosion")}>
              Done ▶
            </button>
          )}
        </div>

        <ControlsHUD timer={timer} />

        <TeacherDialog>
          {allDone
            ? "Color restored. Heart mended. Onward to the finale."
            : current
            ? `Step ${stepIndex + 1}/${HEAL_STEPS.length}: ${current.label}`
            : "Follow the steps precisely."}
        </TeacherDialog>
      </div>

      <IngredientGrid />
    </div>
  );
}
