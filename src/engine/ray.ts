import { add, scale } from "./geometry";
import type { Ray, Vector2 } from "./types";


export const pointAt = (ray: Ray, t: number): Vector2 => {
    return add(ray.origin, scale(ray.direction, t));
}

export const intersectVerticalWall = (
    ray: Ray,
    wallX: number,
): Vector2 | null => {
    if(ray.direction.x === 0) return null;

    const t = (wallX - ray.origin.x) / ray.direction.x;

    if(t < 0) return null;

    return pointAt(ray, t);
}


export const intersectHorizontalWall = (
    ray: Ray,
    wallY: number,
): Vector2 | null => {
    if(ray.direction.y === 0) return null;

    const t = (wallY - ray.origin.y) / ray.direction.y

    if(t < 0) return null; 

    return pointAt(ray, t);
}