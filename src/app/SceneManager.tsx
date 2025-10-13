import { useGame } from "@/state/gameState";

import Intro from "@/scenes/Intro";
import PotionVigor from "@/scenes/PotionVigor";
import PotionHeal from "@/scenes/PotionHeal";
import PotionExplosion from "@/scenes/PotionExplosion";
import Lose from "@/scenes/Lose";
import Win from "@/scenes/Win";

export default function SceneManager() {
  const { scene } = useGame();

  switch (scene) {
    case "Intro":
      return <Intro />;
    case "PotionVigor":
      return <PotionVigor />;
    case "PotionHeal":
      return <PotionHeal />;
    case "PotionExplosion":
      return <PotionExplosion />;
    case "Lose":
      return <Lose />;
    case "Win":
      return <Win />;
    default:
      return (
        <div className="mc-scene p-6 text-center">
          <p className="text-lg font-semibold text-red-400">
            Unknown scene: {scene}
          </p>
        </div>
      );
  }
}

