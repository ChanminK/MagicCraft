import { useEffect, useState } from "react";


export function useCountdown(seconds: number, onEnd?: () => void) {
const [t, setT] = useState(seconds);
useEffect(() => {
setT(seconds);
const id = window.setInterval(() => {
setT((x) => {
if (x <= 1) {
window.clearInterval(id);
onEnd?.();
return 0;
}
return x - 1;
});
}, 1000);
return () => window.clearInterval(id);
}, [seconds]);
return t;
}