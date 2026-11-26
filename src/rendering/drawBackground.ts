export const drawBackground = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number
) => {
    ctx.save()

    ctx.fillStyle = "#09090b";
    ctx.fillRect(0,0,width,height)

    ctx.restore();
}