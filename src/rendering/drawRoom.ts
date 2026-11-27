import type { Room, Wall } from "../engine/types"


export const drawRoom = (
    ctx: CanvasRenderingContext2D,
    room: Room,
    scale: number
) =>  {
    ctx.save()

    const width = room.width * scale;
    const height = room.height * scale;

    ctx.fillStyle = "rgba(8,145,178,0.08)"
    ctx.fillRect(0,0,width,height);

    ctx.fillStyle = "#22d3ee";
    ctx.lineWidth = 2;
    ctx.strokeRect(0,0,width,height);

    ctx.font = "bold 16px monospace";
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";

    ctx.fillText(
        `${room.width} x ${room.height} m`,
        10,
        20
    );

    ctx.restore();
}

export const drawWalls = (
    ctx: CanvasRenderingContext2D,
    walls: Wall[],
    scale: number
) => {
    ctx.save()

    ctx.strokeStyle = "#dddddd"
    ctx.lineWidth = 5;

    for(const wall of walls) {
        ctx.beginPath()

        ctx.moveTo(
            wall.start.x * scale,
            wall.start.y * scale
        )

        ctx.lineTo(
            wall.end.x * scale,
            wall.end.y * scale
        )

        ctx.stroke()
    }

    ctx.restore()
}