import { distance } from "./geometry";
import { intersectWall } from "./ray";
import type { Ray, Vector2, Wall } from "./types";

export const raycast = (ray: Ray, walls: Wall[]): Vector2 |  null => {
    let closestHit: Vector2 | null = null;
    let closestDistance = Infinity
    for(const wall of walls) {
        const intersected = intersectWall(ray, wall)
        if(!intersected) continue;

        const d = distance(ray.origin, intersected);

        if(d < closestDistance)  {
            closestHit = intersected
            closestDistance = d
        }
    }

    return closestHit
}