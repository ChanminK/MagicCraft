import { useGame } from "@/state/gameState";
// Double check whether or not assets work here
// WHY DOESNT IT WORK???

export default function Win() {
    const { setScene } = useGame();

    return (
        <div className="mc-scene mc-fade-in flex flec-col items-center justify-center min-h-[70vh] text-center gap-4">
            <h2 className="text-3xl font-bold">You've passed your exam!</h2>
            <p className="text-sm opacity-80">Thanks for playing!</p>
            <div className="flex gap-3 mt-2">
                <button className="mc-btn" onClick={() => setScene("Intro")}>
                    Play Again (Intro)
                </button>
                <button className="mc-btn" onClick={() => setScene("PotionVigor")}>
                    Replay Potions
                </button>
            </div>
        </div>
    );
}