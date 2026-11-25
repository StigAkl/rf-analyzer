import type { Vector2 } from "./types";

export const distance = (a: Vector2, b: Vector2) => {
    const dx = b.x - a.x;
    const dy = b.y - a.y;

    //Ny innebygd funksjon i js som kan gjøre dette
    // return Math.hypot(dx, dy)
    return Math.sqrt(dx * dx + dy * dy);
}