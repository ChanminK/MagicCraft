import { useGame } from "@/state/gameState";


export default function Intro() {
    const { setScene } = useGame();

    return (
        <div className="mc-scene mc-fade-in">
            <h1 className="text-3xl font-bold mb-4">Potion Exam</h1>

            <div className="mc-panel p-4">
                <p className="text-sm opacity-90">
                    Welcome, apprentice! You must brew three potions to pass your final exam.
                </p>
            </div>

            <div className="mt-6 flex gap-3">
                <button className="mc-btn" onClick={() => setScene("PotionVigor")}>
                    Begin Exam
                </button>
            </div>
        </div>
    );
}