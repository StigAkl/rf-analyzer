import type { Room, Wall } from "./types";


export const getRoomWalls = (room: Room): Wall[] => {
    const w1 = {
        start:  { x: 0, y: 0},
        end: {x: room.width, y: 0}
    }

    const w2 = {
        start: {x: room.width, y: 0},
        end: {x: room.width, y: room.height}
    }

    const w3 = {
        start: { x: room.width, y: room.height},
        end: {x: 0, y: room.height}
    }

    const w4 = {
        start: { x:0, y: room.height},
        end: { x: 0, y: 0}
    }

    return [w1, w2, w3, w4]
}