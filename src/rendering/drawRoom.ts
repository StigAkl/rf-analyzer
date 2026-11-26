import type { Room } from "../engine/types"


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