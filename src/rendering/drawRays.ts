import type { Vector2 } from "../engine/types";


export const drawRays = (ctx: CanvasRenderingContext2D, origin: Vector2, scale: number) => {
    const txRadius = 7 / scale
    const radius = 3;
    const rayCount = 24;

    ctx.strokeStyle = "#0891b2"
    ctx.lineWidth = 1.5;

    for(let i = 0; i < rayCount; i++) {
        const angle = (i / rayCount) * Math.PI * 2;

        const endX = origin.x + Math.cos(angle) * radius;
        const endY = origin.y + Math.sin(angle) * radius;

        ctx.beginPath()
        ctx.moveTo(
            (origin.x + Math.cos(angle) * txRadius) * scale,
            (origin.y + Math.sin(angle) * txRadius) * scale
        )
        ctx.lineTo(
            endX * scale,
            endY * scale
        )
        ctx.stroke();

        ctx.fillStyle = "#ff0000";

        ctx.beginPath();
    
        ctx.arc(
            endX * scale,
            endY * scale,
            3,
            0,
            Math.PI * 2
        );
        ctx.fill()
    }

    ctx.save()

    ctx.strokeStyle = "#71717a";
    ctx.lineWidth = 1
    ctx.setLineDash([5,5])

    ctx.beginPath();
    ctx.arc(
        origin.x * scale,
        origin.y * scale,
        radius * scale,
        0, Math.PI * 2
    );

    ctx.stroke();
    ctx.restore();

    const labels = [0, 90, 180, 270]
    const labelRadius = radius + 0.5;

    ctx.fillStyle = "#d4d4d8";
    ctx.font = "14px monospace";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle"

    for(const degrees of labels) {
        const angle = degrees * Math.PI / 180;

        const x = origin.x + Math.cos(angle) * labelRadius;
        const y = origin.y + Math.sin(angle) * labelRadius;

        ctx.fillText(`${degrees}°`, x * scale, y * scale)
    }

}