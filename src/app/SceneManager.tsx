import { useGame } from "@/state/gameState";

import Intro from "@/scenes/Intro";
import PotionVigor from "@/scenes/PotionVigor";

export default function SceneManager() {
    const { scene } = useGame();
    if ( scene === "Intro" ) return <Intro />;
    //fallback in case im an idiot
    return <div className="mc-scene p-6">Loading... (scene: {scene})</div>;
}

// Hooking this back when when everything works
// export default function SceneManager() {
//     const { scene } = useGame();
//     return (
//         <div className="mx-auto max-w-6xl px-4 py-6">
//             {scene === "Intro" && <Intro />}
//             {scene === "PotionVigor" && <PotionVigor />}
//             {scene === "PotionHeal" && <PotionHeal />}
//             {scene === "PotionExplosion" && <PotionExplosion />}
//             {scene === "Lose" && <Lose />}
//             {scene === "Win" && <Win />}
//         </div>
//     );
// }

