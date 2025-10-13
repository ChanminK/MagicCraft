export function screenFlash() {
    const el = document.body;
    el.classList.add("shake");
    window.setTimeout(() => el.classList.remove("shake"), 360);
}


export function applyBW(on: boolean) {
    const root = document.documentElement;
    if (on) root.style.filter = "grayscale(100%)";
    else root.style.filter = "none";
}