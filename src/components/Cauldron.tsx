import sprites from "@/data/sprites.manifest";

type Props = { level?: "idle" | "mid" | "big"; bubbleTone?: "green" | "rwb" | "nature" };

export default function Cauldron({ level = "idle", bubbleTone }: Props) {
  const src =
    level === "big" ? sprites.cauldron.big : level === "mid" ? sprites.cauldron.mid : sprites.cauldron.idle;

  const tone =
    bubbleTone === "rwb" ? "hue-rotate(330deg) saturate(140%)"
    : bubbleTone === "nature" ? "hue-rotate(90deg) saturate(130%)"
    : "none";

  return (
    <div className="relative w-[256px] h-[256px] select-none">
      <img src={src} alt="cauldron" className="absolute inset-0 w-full h-full image-pixelated" />
      {/* optional bubbles overlay */}
      {bubbleTone && (
        <img
          src={sprites.bubbles}
          alt=""
          className="absolute inset-0 w-full h-full opacity-70 image-pixelated pointer-events-none"
          style={{ filter: tone }}
        />
      )}
    </div>
  );
}
