import type { Vector2 } from "../engine/types";

interface DrawNodeOptions {
    position: Vector2;
    color: string;
    label: string;
}

export const drawNode = (ctx: CanvasRenderingContext2D, node: DrawNodeOptions, scale: number) => {
    const x = node.position.x * scale;
    const y = node.position.y * scale;

    ctx.save()

    ctx.fillStyle = node.color
    ctx.beginPath()
    ctx.arc(x, y, 7, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = node.color
    ctx.font = "12px monospace";
    ctx.fillText(node.label, x + 16, y + 4);
    ctx.restore();
}
