import sprites from "@/data/sprites.manifest";

type PortraitKey = keyof typeof sprites.teacher;

export default function TeacherDialog({
  children,
  portrait = "base",
}: {
  children: React.ReactNode;
  portrait?: PortraitKey; // "base" | "drink" | "vigor" | "cry" | "throw" | "suprise" | "huh"
}) {
  const img = sprites.teacher[portrait] ?? sprites.teacher.base;

  return (
    <div className="mc-panel p-4 mt-4 flex items-center gap-3">
      <div className="w-16 h-16 rounded bg-slate-700 overflow-hidden shrink-0 flex items-center justify-center">
        <img src={img} alt="teacher" className="w-full h-full object-contain image-pixelated" />
      </div>
      <div className="text-sm opacity-90">{children}</div>
    </div>
  );
}
