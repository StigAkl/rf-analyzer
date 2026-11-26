
export const drawGrid = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    scale: number
) => {
    ctx.save()

    ctx.strokeStyle = "#2727a";
    ctx.lineWidth = 1;

    for(let x = 0; x <= width; x+=scale) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
    }

    for(let y = 0; y <= height; y+= scale) {
        ctx.beginPath();
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke();
    }
    ctx.restore();
}