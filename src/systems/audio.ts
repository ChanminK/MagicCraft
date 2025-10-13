import { Howl } from "howler"; // WHY DOES THIS ALSO HAVE MODERATE SECURITY VULNERABILITIES
import sfx from "@/data/sfx.manifest";


type SoundMap = Record<string, Howl>;
const sounds: SoundMap = {};


export function loadAllSfx() {
    Object.entries(sfx).forEach(([key, { src, volume = 1 }]) => {
        if (!sounds[key]) {
            sounds[key] = new Howl({ src: [src], volume });
        }
    });
}


export function playSfx(key: keyof typeof sfx) {
    if (!sounds[key]) loadAllSfx();
    sounds[key].play();
}


export function stopAllSfx() {
    Object.values(sounds).forEach((h) => h.stop());
}