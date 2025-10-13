export type SfxDef = { src: string; volume?: number };

const sfx = {
    fah: { src: "/src/assets/sfx/fah.mp3", volume: 1 },
    coinflip: { src: "/src/assets/sfx/coinflip.mp3", volume: 1 },
    hakari: { src: "/src/assets/sfx/hakari.mp3", volume: 0.1 },
    luigispeak: { src: "/src/assets/sfx/luigispeak.mp3", volume: 0.2 },
    augh: { src: "/src/assets/sfx/AUGH.mp3", volume: 1 },
    pepsiman: { src: "/src/assets/sfx/Pepsiman.mp3", volume: 0.3 },
    tiktok: { src: "/src/assets/sfx/tiktok.mp3", volume: 1 },
    rewind: { src: "/src/assets/sfx/Rewind.mp3", volume: 1 },
    beeping: { src: "/src/assets/sfx/beeping.mp3", volume: 1 },
    yell: { src: "/src/assets/sfx/yell.mp3", volume: 1 },
    slurp: { src: "/src/assets/sfx/slurp.mp3", volume: 1 },
    ahhh: { src: "/src/assets/sfx/AHHH.mp3", volume: 1 },
    crying: { src: "/src/assets/sfx/crying.mp3", volume: 1 },
    throw: { src: "/src/assets/sfx/throw.mp3", volume: 1 },
    explosion: { src: "/src/assets/sfx/explosion.mp3", volume: 1 }
} as const;

export type SfxKey = keyof typeof sfx;
export default sfx;