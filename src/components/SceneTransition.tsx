import React from "react";


export default function SceneTransition({ children }: { children: React.ReactNode }) {
return <div className="animate-fadeIn">{children}</div>;
}