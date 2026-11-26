import type { Vector2 } from "./types";

export const distance = (a: Vector2, b: Vector2) => {
    return length(subtract(a, b))
}

export const length = (v: Vector2) => Math.sqrt(v.x **2 + v.y ** 2)
export const subtract = (a: Vector2, b: Vector2) => {
    return {
        x: a.x - b.x,
        y: a.y - b.y
    }
}

export const add = (a: Vector2, b: Vector2) => {
    return {
        x: a.x + b.x,
        y: a.y + b.y
    }
}

export const scale = (v: Vector2, scalar: number) => {
    return {
        x: v.x * scalar,
        y: v.y * scalar
    }
}

// Enhetsvektor tror jeg
export const normalize = (v: Vector2): Vector2 => {
    const l = length(v)
    if(l === 0) return {x: 0, y: 0}
    return {
        x: v.x / length(v),
        y: v.y / length(v)
    }
}
