import { useEffect, useRef, useState } from "react";
import { useGame } from "@/state/gameState";
import Cauldron from "@/components/Cauldron";
import IngredientGrid from "@/components/IngredientGrid";
import TeacherDialog from "@/components/TeacherDialog";
import ControlsHUD from "@/components/ControlsHUD";
import { playSfx, stopAllSfx } from "@/systems/audio";
import { screenFlash } from "@/systems/fx";
import { EXPLOSION_STEPS, type ExplosionStepId, acceptExplosionAction } from "./steps";
import { EXPLOSION_EFFECTS } from "./effects.map";

export default function PotionExplosion() {
  const { setScene, startCountdown, timer } = useGame();
  const [stepIndex, setStepIndex] = useState(0);
  const current = EXPLOSION_STEPS[stepIndex];

  // ADD PHYSICS FOR MOSS DROP
  const mossDrops = useRef(0);
  const mossTimer = useRef<number | null>(null);

  useEffect(() => {
    startCountdown(180);
    return () => {
      if (mossTimer.current) window.clearInterval(mossTimer.current);
      mossTimer.current = null;
      stopAllSfx();
    };
  }, []);

  const runEffects = (id: ExplosionStepId) => {
    const fx = EXPLOSION_EFFECTS[id];
    if (fx?.sfx) playSfx(fx.sfx);
    if (fx?.flash) screenFlash();
    // bubble tone needs to get handled
};

  const doAction = (id: ExplosionStepId) => {
    const { ok, nextIndex, done } = acceptExplosionAction(stepIndex, id);
    if (!ok) {
      stopAllSfx();
      setScene("Lose");
      return;
    }
    runEffects(id);

    if (id === "lower-c4-slow") {
      setTimeout(() => stopAllSfx(), 1000);
    }
    if (id === "add-angry-moss") {
      mossDrops.current = 0;
      if (mossTimer.current) window.clearInterval(mossTimer.current);
      mossTimer.current = window.setInterval(() => {
        mossDrops.current += 1;
        if (mossDrops.current >= 3) {
          if (mossTimer.current) window.clearInterval(mossTimer.current);
          mossTimer.current = null;
        }
      }, 2000) as unknown as number;
      setTimeout(() => stopAllSfx(), 1200);
    }
    if (id === "add-fahhhh") {
      setTimeout(() => stopAllSfx(), 1000);
    }

    setStepIndex(nextIndex);
    if (done) {
      setTimeout(() => setScene("Win"), 300);
    }
  };

  const lowerC4TooFast = () => {
    playSfx("beeping");
    setTimeout(() => {
      stopAllSfx();
      setScene("Lose");
    }, 250);
  };

  const allDone = stepIndex >= EXPLOSION_STEPS.length;

  return (
    <div className="mc-scene mc-fade-in grid grid-cols-[1fr_360px] gap-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">Potion of EXPLOSION</h2>

        <div className="relative">
          <Cauldron bubbleTone="nature" />
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {/* safe/too-fast buttons simulate speed threshold. FOR NOW */}
          <button className="mc-btn" onClick={() => doAction("lower-c4-slow")}>
            Lower C4 (safe)
          </button>
          <button className="mc-btn" onClick={lowerC4TooFast}>
            Lower C4 (too fast → FAIL)
          </button>

          <button
            className="mc-btn"
            disabled={stepIndex < 1}
            onClick={() => doAction("add-angry-moss")}
          >
            Add Angry Moss
          </button>

          <button
            className="mc-btn"
            disabled={stepIndex < 2}
            onClick={() => doAction("add-fahhhh")}
          >
            Add FAHHHH
          </button>

          {allDone && (
            <button className="mc-btn" onClick={() => setScene("Win")}>
              Done ▶
            </button>
          )}
        </div>

        <ControlsHUD timer={timer} />

        <TeacherDialog>
          {allDone
            ? "Explosion controlled. Remarkably tidy, actually."
            : current
            ? `Step ${stepIndex + 1}/${EXPLOSION_STEPS.length}: ${current.label}`
            : "Follow the steps precisely."}
        </TeacherDialog>
      </div>

      <IngredientGrid />
    </div>
  );
}
