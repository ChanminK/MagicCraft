import type { SceneId } from "@/state/gameState";

// Like the name suggests - helpers/functions related to save states

const NS = "magiccraft";

function setJSON(key: string, value: unknown) {
  try {
    localStorage.setItem(`${NS}:${key}`, JSON.stringify(value));
  } catch {}
}
function getJSON<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(`${NS}:${key}`);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}
function del(key: string) {
  try {
    localStorage.removeItem(`${NS}:${key}`);
  } catch {}
}

/* Player scene check*/
export type Progress = {
  scene: SceneId;
  stepIndex?: number;
};

export function saveProgress(p: Progress) {
  setJSON("progress", p);
}

export function loadProgress(): Progress | null {
  const p = getJSON<Progress | null>("progress", null);
  return p ?? null;
}

export function clearProgress() {
  del("progress");
}

/* Settings that carry over */
export type Settings = {
  sfxVolume?: number; // 0..1
  reduceMotion?: boolean;
};

export function saveSettings(s: Settings) {
  setJSON("settings", s);
}

export function loadSettings(): Settings {
  return getJSON<Settings>("settings", {});
}

/* MAKE SAVES NOT TOO OFTEN */
let saveTimer: number | null = null;
export function debounceSaveProgress(p: Progress, ms = 300) {
  if (saveTimer) window.clearTimeout(saveTimer);
  saveTimer = window.setTimeout(() => saveProgress(p), ms);
}