// NOT YET DOUBLE CHECK DEPENDENCIES AND FIGURE OUT WHY THE HELL THIS BROKEY
import { useEffect, useState } from "react";
import { useGame } from "@/state/gameState";
import Cauldron from "@/components/Cauldron";
import IngredientGrid from "@/components/IngredientGrid";
import TeacherDialog from "@/components/TeacherDialog";
import ControlsHUD from "@/components/ControlsHUD";
import { playSfx } from "@/systems/audio";
import { screenFlash } from "@/systems/fx";
import { VIGOR_STEPS, type VigorStepId, acceptVigorAction } from "./steps";
import { VIGOR_EFFECTS } from "./effects.map";

export default function PotionVigor() {
    const { setScene, startCountdown, timer } = useGame();
    const [ stepIndex, setStepIndex] = useState(0);
    const current = VIGOR_STEPS[stepIndex];

    useEffect(() => {
        startCountdown(180);
    }, []);

    const runEffects = (id: VigorStepId) => {
        const fx = VIGOR_EFFECTS[id];
        if (fx?.sfx) playSfx(fx.sfx);
        if (fx?.flash) screenFlash();
    };

    const doAction = (id: VigorStepId) => {
        const { ok, nextIndex, done } = acceptVigorAction(stepIndex, id);
        if (!ok) {
            setScene("Lose");
            return;
        }
        runEffects(id);
        if (done) {
            return setStepIndex(nextIndex);
        }
        setStepIndex(nextIndex);
    };

    const allDone = stepIndex >= VIGOR_STEPS.length;

return (
    <div className="mc-scene mc-fade-in grid grid-cols-[1fr_360px] gap-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">Potion of Vigor</h2>

        <div className="relative">
          <Cauldron bubbleTone="green" />
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          <button className="mc-btn" onClick={() => doAction("flip-coin")}>
            Flip Coin
          </button>
          <button className="mc-btn" onClick={() => doAction("dip-quote")}>
            Dip Quote
          </button>
          <button className="mc-btn" onClick={() => doAction("drop-jam")}>
            Drop Jam
          </button>

          {allDone && (
            <button className="mc-btn" onClick={() => setScene("PotionHeal")}>
              Done ▶
            </button>
          )}
        </div>

        <ControlsHUD timer={timer} />

        <TeacherDialog>
          {allDone
            ? "Good—vigor achieved. Proceed when ready."
            : current
            ? `Step ${stepIndex + 1}/${VIGOR_STEPS.length}: ${current.label}`
            : "Follow the steps precisely."}
        </TeacherDialog>
      </div>

      <IngredientGrid />
    </div>
  );
}