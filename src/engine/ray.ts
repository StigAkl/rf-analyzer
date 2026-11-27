import { add, cross, scale, subtract } from "./geometry";
import type { Ray, Vector2, Wall } from "./types";


export const pointAt = (ray: Ray, t: number): Vector2 => {
    return add(ray.origin, scale(ray.direction, t));
}


export const intersectWall = (
    ray: Ray,
    wall: Wall,
): Vector2 | null => {
    const wallVector = subtract(wall.end, wall.start)
    const offset = subtract(wall.start, ray.origin);

    const denominator = cross(ray.direction, wallVector);

    if(Math.abs(denominator) < 1e-10) return null;

    const t = cross(offset, wallVector) / denominator
    const u = cross(offset, ray.direction) / denominator

    if(t < 0 || u < 0 || u > 1) return null;

    return pointAt(ray, t);
}