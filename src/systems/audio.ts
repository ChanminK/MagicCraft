import { Howl, Howler } from "howler"; // WHY DOES THIS ALSO HAVE MODERATE SECURITY VULNERABILITIES
import sfx, {type SfxKey } from "@/data/sfx.manifest";


let unlocked = false;
const sounds: Partial<Record<SfxKey, Howl>> = {};

export function unlockAudio() {
  if (unlocked) return;
  try {
    const beep = new Howl({ src: ["/assets/sfx/coinflip.mp3"], volume: 0, preload: false });
    beep.play();
  } catch {}
  unlocked = true;
}

export function setMasterVolume(vol: number) {
  Howler.volume(Math.max(0, Math.min(1, vol)));
}

export function getSound(key: SfxKey): Howl {
  if (!sounds[key]) {
    const def = sfx[key];
    if (!def) throw new Error(`SFX key not found: ${key}`);
    sounds[key] = new Howl({
      src: [def.src],
      volume: def.volume ?? 1,
      preload: true,
      html5: false,
    });
  }
  return sounds[key]!;
}

export function playSfx(key: SfxKey) {
    try {
        const h = getSound(key);
        h.play();
    } catch (e) {
        console.warn("playSfx failed:", key, e);
    }
}

export function stopSfx(key: SfxKey) {
  try {
    const h = sounds[key];
    h?.stop();
  } catch {}
}

export function stopAllSfx() {
    Howler.stop();
}